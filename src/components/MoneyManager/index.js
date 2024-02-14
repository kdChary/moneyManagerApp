import {Component} from 'react'
import {v4 as uidV4} from 'uuid'

import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    amountInput: '',
    titleInput: '',
    transactionList: [],
    transactionType: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state

    const filteredList = transactionList.filter(
      transaction => id !== transaction.id,
    )

    this.setState({transactionList: filteredList})
  }

  onChangeTransactionType = event => {
    this.setState({transactionType: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onSubmission = event => {
    event.preventDefault()
    const {titleInput, amountInput, transactionType} = this.state
    const {displayText} = transactionTypeOptions.find(
      option => option.optionId === transactionType,
    )
    const option = displayText
    const newTransaction = {
      id: uidV4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: option,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      transactionType: transactionTypeOptions[0].optionId,
    }))
  }

  calculateIncome = () => {
    const {transactionList} = this.state

    let income = 0
    transactionList.forEach(transaction => {
      if (transaction.type === transactionTypeOptions[0].displayText) {
        income += transaction.amount
      }
    })
    return income
  }

  calculateExpenses = () => {
    const {transactionList} = this.state

    let expenses = 0
    transactionList.forEach(transaction => {
      if (transaction.type === transactionTypeOptions[1].displayText) {
        expenses += transaction.amount
      }
    })
    return expenses
  }

  render() {
    const expenses = this.calculateExpenses()
    const income = this.calculateIncome()
    const balance = income - expenses
    const {
      titleInput,
      amountInput,
      transactionType,
      transactionList,
    } = this.state
    return (
      <div className="app-container">
        <div className="user-details-section">
          <h1 className="greet-user">Hi,Richard</h1>
          <p className="welcome-msg">
            Welcome back to your
            <span className="welcome-title"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="transactions-section">
          <h2 className="transaction-title">Add Transaction</h2>
          <div className="transactions-container">
            <form className="form-style" onSubmit={this.onSubmission}>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                className="input"
                onChange={this.onChangeTitle}
                value={titleInput}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                className="input"
                onChange={this.onChangeAmount}
                value={amountInput}
              />
              <label htmlFor="select" className="label">
                TYPE
              </label>
              <select
                id="select"
                value={transactionType}
                className="input"
                onChange={this.onChangeTransactionType}
              >
                {transactionTypeOptions.map(optionType => (
                  <option key={optionType.optionId} value={optionType.optionId}>
                    {optionType.displayText}
                  </option>
                ))}
              </select>
              <button className="form-button" type="submit">
                Add
              </button>
            </form>
            <div className="history-section">
              <h2 className="history-title">History</h2>
              <div>
                <ul className="history-items-list">
                  <li className="history-header-item">
                    <p className="header-info">Title</p>
                    <p className="header-info">Amount</p>
                    <p className="header-info">Type</p>
                  </li>
                  {transactionList.map(transaction => (
                    <TransactionItem
                      key={transaction.id}
                      transactionDetails={transaction}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
