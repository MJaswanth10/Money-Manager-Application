import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

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
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  getIncome = () => {
    const {transactionList} = this.state
    let totalIncome = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        totalIncome += eachTransaction.amount
      }
    })

    return totalIncome
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let totalExpenses = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        totalExpenses += eachTransaction.amount
      }
    })

    return totalExpenses
  }

  onChangeTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state

    const totalIncome = this.getIncome()
    const totalExpenses = this.getExpenses()
    const totalBalance = totalIncome - totalExpenses

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="profile-card">
            <h1 className="user-name">Hi, Richard</h1>

            <p className="description">
              Welcome back to your
              <span className="highlight"> Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balance={totalBalance}
            income={totalIncome}
            expenses={totalExpenses}
          />

          <div className="transaction-container">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
              <h1 className="form-heading">Add Transaction</h1>

              <label htmlFor="title" className="label">
                TITLE
              </label>

              <input
                type="text"
                id="title"
                value={titleInput}
                placeholder="TITLE"
                className="input"
                onChange={this.onChangeTitle}
              />

              <label htmlFor="amount" className="label">
                AMOUNT
              </label>

              <input
                type="text"
                id="amount"
                value={amountInput}
                placeholder="AMOUNT"
                className="input"
                onChange={this.onChangeAmount}
              />

              <label htmlFor="type" className="label">
                TYPE
              </label>

              <select
                id="type"
                value={optionId}
                className="input"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>

              <button type="submit" className="button">
                Add
              </button>
            </form>

            <div className="history-container">
              <h1 className="history-title">History</h1>

              <div className="transactions-table-container">
                <ul className="transaction-list">
                  <li className="history-header">
                    <p className="history-cells">Title</p>
                    <p className="history-cells">Amount</p>
                    <p className="history-cells">Type</p>
                  </li>

                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
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
