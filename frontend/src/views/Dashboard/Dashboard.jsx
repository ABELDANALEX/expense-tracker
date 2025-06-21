import { useEffect, useState } from "react";
import NewModal from "../../components/Modals/Create new transaction/newModal";
import UpdateBalanceModal from "../../components/Modals/UpdateBalanceModal/UpdateBalanceModal";
import TransactionCard from "../../components/Transaction/TransactionCard";
import Pagination from "../../components/Pagination/Pagination";
import "./Dashboard.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); //get it from login
  const [id, setId] = useState(undefined);
  const [newModal, setNewModal] = useState(false);
  const [balance, setBalance] = useState(0);
  const [sortOption, setSortOption] = useState("latest");
  const [updateBalanceModal, setUpdateBalanceModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 6;

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSortOption(selected);
    //other stuff goes here
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUsername(decoded.username);
      setId(decoded.id);
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const getBalance = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`/balance/${id}`);
        setBalance(res.data.balance);
      } catch (error) {
        console.log(error);
      }
    };

    const getHistory = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`/expense/${id}`);
        if (res?.data?.history && Array.isArray(res.data.history)) {
          setHistory(res.data.history);
          console.log(res.data.history);
        } else if (res?.data && Array.isArray(res.data)) {
          setHistory(res.data);
          console.log(history);
        } else {
          setHistory([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBalance();
    getHistory();
  }, [id, balance]);

  const commafy = (number) => {
    return new Intl.NumberFormat("en-IN").format(number);
  };

  const startIndex = (currentPage - 1) * transactionsPerPage
  const endIndex = currentPage * transactionsPerPage
  const page = history.slice(startIndex, endIndex)



  return (
    <>
      <div
        className="dashboard-ancestor-container"
        id="dashboard-ancestor-container"
      >
        <div
          className="dashboard-header-container"
          id="dashboard-header-container"
        >
          <p className="dashboard-header" id="dashboard-header">
            Welcome,{" "}
            <span
              className="dashboard-header-username"
              id="dashboard-header-username"
            >
              {username}!
            </span>
          </p>
          <button
            className="dashboard-signout-button"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            SIGN OUT
          </button>
        </div>
        <div
          className="current-balance-container"
          id="current-balance-container"
        >
          Current Balance:{" "}
          <span
            className="current-balance"
            id="current-balance"
            title="double click to update balance"
            onDoubleClick={() => setUpdateBalanceModal(true)}
          >
            ₹ {commafy(balance)}
          </span>
        </div>
        <hr className="dashboard-rule-1" id="dashboard-rule-1" />
        <div
          className="history-headings-container"
          id="history-headings-container"
        >
          <button
            className="add-newexpense-button"
            id="add-newexpense-button"
            onClick={() => {
              setNewModal(true);
            }}
          >
            <div>+</div>
          </button>
          <div className="transaction-history-heading">
            <i>Transaction History</i>
          </div>
          <select
            className="transaction-history-order"
            name="transaction-history-order"
            id="transaction-history-order"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="latest">By date(latest first)</option>
            <option value="oldest">By date(oldest first)</option>
            <option value="high">By expense(descending)</option>
            <option value="low">By expense(ascending)</option>
          </select>
        </div>
        <div className="transaction-history" id="transaction-history">
          {Array.isArray(page) && page.length > 0 ? (
            // const page = history.slice(((currentPage-1)*1,currentPage*transactionsPerPage))
            page.map((item, index) => {
              return (
                <div>
                  <TransactionCard
                    key={item._id}
                    title={item.title}
                    date={item.date}
                    amount={item.amount}
                    category={item.category}
                  />
                </div>
              );
            })
          ) : (
            <div>No transactions</div>
          )}
        </div>
        <div className="history-footer">
          <div>
            Showing {startIndex+1}-{Math.min(endIndex,history.length)} of {history.length} transactions
          </div>
          <Pagination
            totalItems={history.length}
            itemsPerPage={transactionsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div
          className="dashboard-modals-container"
          id="dashboard-modals-container"
        >
          {newModal && (
            <NewModal
              id={id}
              setBalance={setBalance}
              onClose={() => {
                setNewModal(false);
              }}
            />
          )}

          {updateBalanceModal && (
            <UpdateBalanceModal
              id={id}
              setBalance={setBalance}
              onClose={() => setUpdateBalanceModal(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}
