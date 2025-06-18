import './Transaction.css'

export default function TransactionCard(props){
    return(
        <>
        <div className="transaction-card">
            {/* <div>{props.date}</div>
            <div>{props.title}</div>
            <div>{props.amount}</div> */}
            <div className="transaction-card-date" id="transaction-card-date">12/3/34</div>
            <div className="transaction-card-title" id="transaction-card-title">Biryani</div>
            <div className="transaction-card-amount" id="transaction-card-amount">₹200</div>
        </div>
        </>
    )
}