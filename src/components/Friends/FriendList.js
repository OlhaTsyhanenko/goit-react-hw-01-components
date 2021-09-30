import PropTypes from 'prop-types';
import defaultImg from '../default.jpg';
import styles from './Friends.module.css';


export default function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <li className={styles.item} key={friend.id} >
                    {friend.isOnline ?
                        <span className={styles.status} style={{ backgroundColor: 'green' }} > </span>
                        : <span className={styles.status} style={{ backgroundColor: 'red' }} ></span>}
                    {friend.avatar ?
                        <img className="avatar" src={friend.avatar} alt={friend.name} width="48" /> :
                        <img className="avatar" src={friend.avatar=defaultImg} alt={friend.name} width="48" />}
                    
                    <p className={styles.name}>{friend.name}</p>
                </li>
            ))}
        </ul>

    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool
    }))
}