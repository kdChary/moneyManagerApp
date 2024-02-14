import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <ul className="money-details-list">
      <li className="amount-details balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-icon"
        />
        <div className="amount-section">
          <p className="amount-item">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="amount-details income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-icon"
        />
        <div className="amount-section">
          <p className="amount-item">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="amount-details expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-icon"
        />
        <div className="amount-section">
          <p className="amount-item">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
