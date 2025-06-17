import './Transaction.css'

export default function TransactionCard(props){
    return(
        <>
        <div className="transaction-card">
            {/* <div>{props.date}</div>
            <div>{props.title}</div>
            <div>{props.amount}</div> */}
            <div>12/3/34</div>
            <div>Biryani</div>
            <div>₹200</div>
        </div>
        </>
    )
}