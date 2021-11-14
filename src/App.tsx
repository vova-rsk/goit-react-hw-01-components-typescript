import Profile from './components/Profile/Profile';
import user from './json/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';
import FriendList from './components/FriendsList/FriendList/FriendList';
import friends from './json/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './json/transactions.json';

/*Функция для формирования разметки*/
const App = () => {
  return (
    <div>
      <h1>Домашнее задание</h1>
      <div>
        <h2>Задание 1</h2>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <h2>Задание 2</h2>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>
      <div>
        <h2>Задание 3</h2>
        <FriendList friends={friends} />
      </div>
      <div>
        <h2>Задание 4</h2>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
