const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const newUser = req.body;
    if (newUser.balance < 0){
      return res.status(400).send({message:"Balance cannot be negative"})
    }
    const takenUserEmail = await User.findOne({ email: newUser.email });
    const takenUsername = await User.findOne({ username: newUser.username });
    if (takenUserEmail || takenUsername) {
      return res
        .status(403)
        .send({ error: "Username or Email already registered" });
    }  //-> already taken care of in checkUser but still, used to protect against possible attacks
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    const user = new User({
      username: newUser.username,
      email: newUser.email,
      password: hashedPassword,
      balance: newUser.balance,
    });
    await user.save();
    
    //added payload and sign to signup as well
    const payload = {id: user._id, username: user.username}

    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY * 24 * 60 * 60 },
        (error, token) => {
            if (error) {
                console.error('Error generating jwt:', error.message)
                return res.status(500).send({ error: 'Error generating token' })
            }
            return res
                  .status(201)
                  .send({ message: "Successfully registered new user" , accessToken: token});        
        }
    )

  } catch (error) {
    console.error("Error registering user:", error.message);
    return res.status(400).send({ error: "Error registering user" });
  }
};

exports.login = async (req, res) => {

    const user = req.body;
    const existingUser = await User.findOne({ email: user.email });
    if (!existingUser) {
      return res.status(401).send({ error: "Invalid username or password" });
    }
    const isValidPassword = await bcrypt.compare(user.password, existingUser.password);
    if (!isValidPassword) {
      return res.status(401).send({ error: "Invalid username or password" });
    }
    const payload = { id: existingUser._id, username: existingUser.username }
    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY * 24 * 60 * 60 },
        (error, token) => {
            if (error) {
                console.error('Error generating jwt:', error.message)
                return res.status(400).send({ error: 'Invalid credentials' })
            }
            return res.status(200).send({ message: 'Successfully logged in', accessToken: token })
        }
    )
};

exports.checkUser = async (req, res) => {
  const user = req.body
  const takenUserEmail = await User.findOne({email: user.email})
  const takenUserName = await User.findOne({username: user.username})
  if (takenUserName || takenUserEmail){
    return res.status(403).send({exists: true, error: "Username or Email already registered" });
  }
  return res.status(200).send({exists: false})
}