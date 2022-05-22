import style from '../Profile.module.css';

function Repos({ repos, reposCount }) {
	const repositories = repos.map(repo => {
		return (

			<div key={repo.id} className={style.repo}>
				<a href={repo.html_url} target="_blank" rel="details">
					<h3>{repo.name}</h3 >
				</a>
				<p>{repo.description || 'description is empty'}</p>
			</div>

		)
	})

	return (
		<>
			<h2> {`Repozitories (${reposCount})`}</h2 >
			{repositories}
		</>

	)
}
export default Repos;


