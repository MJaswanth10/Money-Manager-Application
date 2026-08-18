// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="money-details-container">
      <div className="card-item balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo"
        />

        <div className="manage-details">
          <p className="section-title">Your Balance</p>

          <p className="profile-amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="card-item income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="logo"
        />

        <div className="manage-details">
          <p className="section-title">Your Income</p>

          <p className="profile-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="card-item expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo"
        />

        <div className="manage-details">
          <p className="section-title">Your Expenses</p>

          <p className="profile-amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
