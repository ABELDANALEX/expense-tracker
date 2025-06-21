import './Transaction.css'

export default function TransactionCard(props){
    const dateString = props.date;
    const originalDate = new Date(dateString);
    const istOffsetMs = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(originalDate.getTime() + istOffsetMs);

    const onlyDate = istDate.toISOString().split('T')[0];
    const timez = istDate.toISOString().split('T')[1];
    const time = timez.slice(0, 5);
    return(
        <>
        <div className="transaction-card" onClick={props.onClick}>
            <div className="transaction-card-ist">
                <div className="transaction-card-date" id="transaction-card-date">{onlyDate}</div>
                <div className="transaction-card-time" >{time}</div> 
            </div>
            
            <div className="transaction-card-title" id="transaction-card-title">{props.title}</div>
            <div className="transaction-card-category" id="transaction-card-category">{props.category}</div>
            <div className="transaction-card-amount" id="transaction-card-amount">₹{props.amount}</div>
        </div>
        </>
    )
}