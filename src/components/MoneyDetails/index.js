import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <ul className="money-details-list">
      <p>{balance}</p>
      <p>{income}</p>
      <p>{expenses}</p>
    </ul>
  )
}

export default MoneyDetails
