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
        <div className="friend-card">
            <img src={pictureUrl} alt={`${name.first} ${name.last}`} />
            <h2>{name.first} {name.last}</h2>
            <p>Phone: {phone}</p>
        </div>
    );
}

export default FriendCard;