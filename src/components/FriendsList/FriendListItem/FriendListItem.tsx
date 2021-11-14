import css from './FriendListItem.module.css';

interface Props {
  avatar: string,
  name: string,
  isOnline:boolean
}

const FriendListItem = ({ avatar, name, isOnline }:Props) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

