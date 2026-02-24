import { useSelector } from 'react-redux';

function Customer() {
  // const customer = useSelector(state => state.customer); //must be store.<reducer-name>
  // console.log(customer);

  const { fullName } = useSelector(state => state.customer);
  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
