import { useSelector } from 'react-redux';

function Customer() {
  // const customer = useSelector(store => store.customer); //must be store.<reducer-name>
  // console.log(customer);

  const { fullName } = useSelector(store => store.customer);
  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
