// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="history-details">{title}</p>
      <p className="history-details">Rs {amount}</p>
      <p className="history-details">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
