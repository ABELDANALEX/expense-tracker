import Balance from "../../components/Balance/Balance"
import Welcome from "../../components/Welcome/Welcome"
import TransactionCard from "../../components/Transaction/TransactionCard"

export default function Dashboard(){
    return(
        <>
        <Welcome User={'abc'}/>
        <Balance amt={1200}/>
        <TransactionCard/>
        </>
    )
}