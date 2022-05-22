import style from './Empty.module.css'

function Empty({ text, icon }) {

	return (
		<div className={style.wraper} >
			<img className={style.icon} src={icon} alt='icon' />
			<span>
				{text}
			</span>
		</div>
	)
}

export default Empty;







