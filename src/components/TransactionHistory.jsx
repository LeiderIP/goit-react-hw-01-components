import React from 'react';
import './TransactionHistory.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="Transactions">
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className="transaction-row">
              <td className="transaction-cell">{transaction.type}</td>
              <td className="transaction-cell">{transaction.amount}</td>
              <td className="transaction-cell">{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
