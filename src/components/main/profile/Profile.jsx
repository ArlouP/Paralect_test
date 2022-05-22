import Empty from "../empty/Empty";
import Description from "./description/Description";
import Repos from "./repos/Repos";
import xmarkIcon from '../../../images/xmarkIcon.svg'
import { connect } from "react-redux";
import Loader from "../../loader/Loader";
import style from './Profile.module.css';

function Profile({ userLink, reposCount, repos,
	userPic, userName, userNick,
	followersCount, followingCount, isFetching
}) {
	return (
		<>

			< Description
				userPic={userPic}
				userName={userName}
				userNick={userNick}
				followersCount={followersCount}
				followingCount={followingCount}
				userLink={userLink}
			/>
			<div className={style.repos}>
				{isFetching ?
					<Loader />
					:
					<>
						{reposCount ?
							<>
								<Repos repos={repos} reposCount={reposCount} />
							</>
							:
							<Empty text='Repository list is empty' icon={xmarkIcon} />
						}
					</>
				}
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		repos: state.user.repos,
		userPic: state.user.user.avatar_url,
		userName: state.user.user.name,
		userNick: state.user.user.login,
		followersCount: state.user.user.followers,
		followingCount: state.user.user.following,
		isFetching: state.user.isFetching,
		reposCount: state.user.user.public_repos,
		userLink: state.user.user.html_url,
	}
};

const mapDispatchToProps = null;



export default connect(mapStateToProps, mapDispatchToProps)(Profile);




