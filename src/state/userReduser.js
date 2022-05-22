import { profileApi } from "../api/api";

const SET_USER = 'SET_USER';
const SET_REPOS = 'SET_REPOS';
const IS_START_PAGE = 'IS_START_PAGE';
const IS_USER_EMPTY = 'IS_USER_EMPTY';
const IS_FETCING = 'IS_FETCING';


const initialState = {
	user: '',
	repos: [],
	isStartPage: true,
	isUserEmpty: false,
	isFetching: false,
};

const userReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			}
		case SET_REPOS:
			return {
				...state,
				repos: action.repos,
			}
		case IS_START_PAGE:
			return {
				...state,
				isStartPage: action.isStartPage,
			}
		case IS_USER_EMPTY:
			return {
				...state,
				isUserEmpty: action.isUserEmpty,
			}
		case IS_FETCING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		default:
			return state;
	};
}

const setUser = user => ({ type: SET_USER, user });
const setRepositories = repos => ({ type: SET_REPOS, repos });

const cnangeIsStartPage = isStartPage => ({ type: IS_START_PAGE, isStartPage });
const cnangeIsUserEmpty = isUserEmpty => ({ type: IS_USER_EMPTY, isUserEmpty });
const cnangeIsFetching = isFetching => ({ type: IS_FETCING, isFetching });



export const getProfileThunk = (userName) => async (dispatch) => {
	try {
		dispatch(cnangeIsStartPage(true));
		dispatch(cnangeIsFetching(true));
		const response = await profileApi.getProfile(userName);
		dispatch(cnangeIsUserEmpty(false));
		dispatch(cnangeIsStartPage(false));
		dispatch(setUser(response));
		dispatch(cnangeIsFetching(false));

	} catch (error) {
		console.log('ошибочка')
		if (error.response.status === 404) {
			dispatch(cnangeIsStartPage(false));
			dispatch(cnangeIsFetching(false));
			dispatch(cnangeIsUserEmpty(true));
		}
	}
}

export const getRepositoriesThunk = (userName, reposCount, carentPage) => async (dispatch) => {
	dispatch(cnangeIsFetching(true));
	const response = await profileApi.getRepos(userName, reposCount, carentPage);
	dispatch(setRepositories(response));
	dispatch(cnangeIsFetching(false));
}

export default userReduser;

