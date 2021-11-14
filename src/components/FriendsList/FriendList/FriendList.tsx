import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

type Friend = {
  id: number,
  avatar: string,
  name: string,
  isOnline:boolean
}

interface Props {
  friends: Friend[];
}

const FriendList = ({ friends }: Props) => {  
  return (
    <ul className={css.list}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;

