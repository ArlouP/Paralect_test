
import Search from "./search/Search";
import gitIcon from '../../images/gitIcon.svg';
import style from './Header.module.css';


const Header = () => {

	return (
		<header className={style.header}>
			<img src={gitIcon} alt="gitIcon" />
			<Search />
		</header>
	);
}


export default Header;
