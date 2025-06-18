require('dotenv').config()
const express = require('express')
const cors=require('cors')
const mongoConnection=require('./config/mongodb')
const authRouter=require('./routes/auth')
const expenseRouter=require('./routes/expense')
const app = express();
const PORT= process.env.PORT || 3000;
app.use(express.json());
app.use(cors({
    origin: '*'
}))

mongoConnection();


app.use('/auth', authRouter);
app.use('/expense',expenseRouter)


app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);