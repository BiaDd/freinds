// Define the props interface
interface FriendCardProps {
  name: {
    first: string;
    last: string;
  };
  phone: string;
  pictureUrl: string;
}

const FriendCard = ({ name, phone, pictureUrl }: FriendCardProps) => {
  return (
    <button type="button" className="list-group-item list-group-item-action active friend-card" aria-current="true">
      <img className="profile-image" src={pictureUrl} alt={`${name.first} ${name.last}`} />
      <div className="content">
        <h2>{name.first} {name.last}</h2>
        <p>Phone: {phone}</p>
      </div>
    </button>
  );
}

export default FriendCard;