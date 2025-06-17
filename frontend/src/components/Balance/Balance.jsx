import './Balance.css'

export default function Balance({amt}){
    return (
        <>
            <div class ="balance-container">
                <div class="c-balance">
                    Current balance:
                </div>
                <div class="amt">
                    ₹{amt}
                </div>
            </div>
            <div class='underline'></div>
        </>
    )
}