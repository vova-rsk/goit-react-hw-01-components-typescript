import css from './TransactionHistory.module.css';

type Item = {
  id: string,
  type: string,
  amount: string,
  currency:string
};

interface Props {
items:Item[]
};

const TransactionHistory = ({ items }:Props) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

