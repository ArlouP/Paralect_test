import { useState } from "react";
import { connect } from "react-redux";
import { getProfileThunk } from '../../../state/userReduser'
import searchIcon from '../../../images/searchIcon.svg';
import style from '../Header.module.css';

function Search(props) {

	const [userName, changeUserName] = useState('');

	const updateSearchQuery = e => {
		changeUserName(e.currentTarget.value);
	}

	const sendRequest = e => {
		if (e.key === 'Enter') {
			props.getProfileThunk(userName);
			changeUserName('');
		}
	}

	return (
		<div className={style.searchWraper} >
			<img src={searchIcon} alt="searchIcon" />
			<input
				onChange={updateSearchQuery}
				onKeyPress={sendRequest}
				type="text"
				placeholder='Enter GitHub username'
				value={userName}
			/>
		</div>
	);
}
const mapStateToProps = () => ({})
const mapDispatchToProps = {
	getProfileThunk,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

