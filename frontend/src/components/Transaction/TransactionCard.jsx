import './Transaction.css'

export default function TransactionCard(props){
    const dateString =props.date;
    const onlyDate = new Date(dateString).toISOString().split('T')[0];
    return(
        <>
        <div key={props.key} className="transaction-card">
            <div className="transaction-card-date" id="transaction-card-date">{onlyDate}</div>
            <div className="transaction-card-title" id="transaction-card-title">{props.title}</div>
            <div className="transaction-card-category" id="transaction-card-category">{props.category}</div>
            <div className="transaction-card-amount" id="transaction-card-amount">₹{props.amount}</div>
        </div>
        </>
    )
}