// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './userData.json'
import friends from './friends.json'
import transactions from './transactions.json'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr/>
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
