import { Table, Tr, Thead } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = function ({ items }) {
  return (
    <Table className="transaction-history">
      <Thead>
        <Tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Tr>
      </Thead>
      <tbody>
        {items.map((item, index) => (
          <Tr key={item.id} isGray={index % 2 === 0}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
