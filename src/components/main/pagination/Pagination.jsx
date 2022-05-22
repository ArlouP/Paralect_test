
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { getRepositoriesThunk } from '../../../state/userReduser';
import style from './Pagination.module.css';



function Pagination({ reposCount, userName, getRepositoriesThunk }) {


	const [carentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(4);
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = (itemOffset + pageSize) > reposCount ? reposCount : (itemOffset + pageSize);
	const pageCount = Math.ceil(reposCount / pageSize);
	useEffect(() => {
		getRepositoriesThunk(userName, pageSize, carentPage);
	}, [carentPage]);

	const handlePageClick = (event) => {
		const newPage = event.selected + 1;
		const newOffset = event.selected * pageSize;
		setCurrentPage(newPage);
		setItemOffset(newOffset);

	};

	return (
		<div className={style.wraper}>
			<span> {itemOffset || 1}-{endOffset} of {reposCount} items </span>
			<ReactPaginate
				breakLabel="..."
				nextLabel="❯"
				onPageChange={handlePageClick}
				marginPagesDisplayed={1}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				previousLabel="❮"
				containerClassName={style.pagination}
				pageLinkClassName={style.Btn}
				activeClassName={style.activeBtn}
				activeLinkClassName={style.activelink}
				previousLinkClassName={style.activArrow}
				nextLinkClassName={style.activArrow}
				disabledClassName={style.disabledArrow}
			/>
		</div>
	);
}


const mapStateToProps = (state) => {

	return {
		reposCount: state.user.user.public_repos,
		userName: state.user.user.login,
	}
};

const mapDispatchToProps = {
	getRepositoriesThunk
};



export default connect(mapStateToProps, mapDispatchToProps)(Pagination);






























