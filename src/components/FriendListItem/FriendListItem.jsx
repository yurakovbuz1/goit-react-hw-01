import clsx from "clsx";
import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    const status = clsx(isOnline ? css.online : css.offline)
    return (
        <>
            <div className={css.friendsItem}>
                <img src={avatar} alt="Avatar" width="48" />
                <p>{name}</p>
                <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
            </div>
        </>
    );
};

export default FriendListItem;