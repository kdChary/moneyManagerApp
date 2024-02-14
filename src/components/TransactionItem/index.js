import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props

  const {id, title, amount, type} = transactionDetails

  const onDeleteClicked = () => {
    const {deleteTransaction} = props

    deleteTransaction(id)
  }

  return (
    <li className="transaction-history">
      <p className="history-title">{title}</p>
      <p className="history-amount">{amount}</p>
      <p className="history-type">{type}</p>
      <button
        className="history-delete-btn"
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
