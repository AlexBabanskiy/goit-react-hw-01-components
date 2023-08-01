import { Profile } from './profile/Profile';
import user from './user.json';
import data from './data.json';
import { Statistics } from './statistics/Statistics';
// import { ReactDOM } from 'react';
import friends from './friends.json';
import { FriendList } from './friendList/FriendList';
import transactions from './transactions.json';
import { TransactionHistory } from './transactionhistory/TransactionHistory';

console.log(transactions);

export const App = () => {
  return (
    <div>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
