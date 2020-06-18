import React from 'react'
// import Pagination from 'react-js-pagination';

const Pagination = ({ postsPerPage, totalPosts,paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        // <nav aria-label="Page navigation example">
        //     <ul className="pagination">
        //         {pageNumbers.map(number => (
        //             <li key={number} className='page-item'>
        //                 <a onClick={()=> paginate(number)} href='!#' className='page-link'>
        //                     {number}
        //                 </a>
        //             </li>
        //         ))}
        //     </ul>

        // </nav>
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
    )
}
export default Pagination;