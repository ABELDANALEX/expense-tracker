import './Welcome.css'

export default function Welcome({User}){
    return(
        <>
        <div className="welcome-container">
            <div>
              Welcome, {User}!
            </div>
            <div className='logout'> 
                Logout
            </div>
        </div>
        <div className="underline"></div>
        </>
    )
}