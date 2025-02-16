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
  const [friendList, setFriendList] = useState<Friend[]>([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchFriendList();
  }, [offset]);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset => offset + 1);
      } 
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const fetchFriendList = async () => {

    try {
      const response = await fetch(`https://randomuser.me/api/?page=${offset}&results=4&seed=abc`);
      if (!response.ok) {
        throw new Error(`Error fetching friends, response status: ${response.status}`);
      }
      const data = await response.json();
      const result = data["results"];
      ///console.log(json["results"]);
      setFriendList(pre => [...pre, ...result]);
    }
    catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <div className='friend-list'>
        Hello friends!
        {friendList.map((friend: Friend, index: number) => (
          <FriendCard
            key={index}
            name={friend.name}
            phone={friend.phone}
            pictureUrl={friend.picture.large}
          />
        ))}
      </div>
    </>
  )
}

export default App
