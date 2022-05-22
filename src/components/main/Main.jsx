import { connect } from "react-redux";
import Empty from "./empty/Empty";
import Profile from "./profile/Profile";
import searchIcon from '../../images/searchIcon.svg';
import userIcon from '../../images/userIcon.svg';
import Loader from '../../components/loader/Loader';
import style from './Main.module.css';
import Pagination from "./pagination/Pagination";


function Main({ isStartPage, isUserEmpty, isFetching, reposCount }) {
	return (
		<div className={style.main}>
			{isStartPage ?
				<>
					{isFetching ?
						<Loader />
						:
						<Empty text='Start with searching a GitHub user' icon={searchIcon} />
					}
				</>
				:
				<>
					{isUserEmpty ?
						<Empty text='User not found' icon={userIcon} />
						:
						<>
							<Profile />
							{reposCount ? <Pagination /> : null}
						</>
					}
				</>
			}
		</div>
	);
}


const mapStateToProps = (state) => {
	return {
		isStartPage: state.user.isStartPage,
		isUserEmpty: state.user.isUserEmpty,
		isFetching: state.user.isFetching,
		reposCount: state.user.user.public_repos,

	}
};

const mapDispatchToProps = null;



export default connect(mapStateToProps, mapDispatchToProps)(Main);












