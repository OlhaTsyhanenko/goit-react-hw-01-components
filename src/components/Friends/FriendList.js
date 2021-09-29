import PropTypes from 'prop-types';


export default function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li class="item" key={friend.id}>
                    <span class="status">{friend.isOnline}</span>
                    <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
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