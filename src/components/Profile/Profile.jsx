import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {

    return (
        <>
            <div className={css.container}>
                <div>
                    <img
                        src={image}
                        alt="User avatar"
                        className={css.image}
                    />
                    <p className={css.name}>{name}</p>
                    <p className={css.description}>@{tag}</p>
                    <p className={css.description}>{location}</p>
                </div>

                <ul className={css.stats}>
                    <li className={css.statsItem}>
                        <span>Followers</span>
                        <span>{stats.followers}</span>
                    </li>
                    <li className={css.statsItem}>
                        <span>Views</span>
                        <span>{stats.views}</span>
                    </li>
                    <li className={css.statsItem}>
                        <span>Likes</span>
                        <span>{stats.likes}</span>
                    </li>
                </ul>
            </div>

        </>
    );
    
};

export default Profile;