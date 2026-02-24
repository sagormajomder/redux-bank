import { connect } from 'react-redux';

function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay({ currentBalance }) {
  return <div className='balance'>{formatCurrency(currentBalance)}</div>;
}

function mapStateToProps(state) {
  return {
    currentBalance: state.account.balance,
  };
}

//connect() return new function and that function take our component as argument and pass the state (which mapped) as props
export default connect(mapStateToProps)(BalanceDisplay);
