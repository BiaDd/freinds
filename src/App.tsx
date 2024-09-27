import { useState, useEffect } from 'react'
import FriendCard from './components/FriendCard';
import './App.css'

type Friend = {
  gender: string,
  name: {
    first: string;
    last: string;
  };
  phone: string;
  picture: {
    large: string; // URL for the profile picture
  };
};

function App() {
  const [friendList, setFriendList] = useState([]);
  const [hasFetched, setHasFetched] = useState(false); // New flag to track the fetch status

  useEffect(() => {
    if (!hasFetched) {
      fetchFriendList();
      setHasFetched(true);
      console.log(friendList);

    }
  }, [hasFetched]);

  const fetchFriendList = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    if (!response.ok) {
      throw new Error(`Error fetching friends, response status: ${response.status}`);
    }
    const json = await response.json();
    ///console.log(json["results"]);
    setFriendList(json["results"]);
    return true;
  }

  return (
    <>
      <div>
        Hello friends!
        {friendList.map((friend: Friend, index: number) => (
          <ul>
            <li>
              <FriendCard
                key={index}
                name={friend.name}
                phone={friend.phone}
                pictureUrl={friend.picture.large}
              />
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default App
