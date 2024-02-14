import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props

  const {id, title, amount, type} = transactionDetails

  const onDeleteClicked = () => {
    const {deleteTransaction} = props

    deleteTransaction(id)
  }

  return (
    <li className="transaction-history-item">
      <div className="item-alignment">
        <p className="history-item">{title}</p>
        <p className="history-item">Rs {amount}</p>
        <p className="history-item">{type}</p>
      </div>
      <button
        className="item-delete-btn"
        type="button"
        data-testid="delete"
        onClick={onDeleteClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
