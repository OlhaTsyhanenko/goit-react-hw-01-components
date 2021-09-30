import PropTypes from 'prop-types';
import defaultImg from '../default.jpg';


export default function FriendList({ friends }) {
    console.log(friends.avatar);
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li class="item" key={friend.id}>
                    <span class="status">{friend.isOnline}</span>
                    {friend.avatar ?
                        <img class="avatar" src={friend.avatar} alt={friend.name} width="48" /> :
                        <img class="avatar" src={friend.avatar=defaultImg} alt={friend.name} width="48" />}
                    
                    <p class="name">{friend.name}</p>
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