import followersIcon from '../../../../images/followersIcon.svg';
import followingIcon from '../../../../images/followingIcon.svg';
import style from '../Profile.module.css';
function Description({ userPic, userName, userNick, followersCount, followingCount, userLink }) {
	return (
		<div className={style.description}>
			<img src={userPic} alt="userPic" />
			<h2>{userName || 'User name is empty'}</h2>
			<a href={userLink} target="_blank" rel="details">
				<h3>{userNick}</h3>
			</a>
			<div>
				<img src={followersIcon} alt="followersIcon" />
				<span>{followersCount} followers</span>
				<img src={followingIcon} alt="followingIcon" />
				<span>{followingCount} following</span>
			</div>
		</div >
	);
}

export default Description
