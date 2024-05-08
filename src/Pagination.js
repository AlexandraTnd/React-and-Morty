function Pagination({ noOfPages, currentPage, changePage }) {
    const pages = Array(3).fill(0).map((x, i) =>
        currentPage === noOfPages ? i + noOfPages - 2 :
            currentPage === 1 ? i + 1 :
                i === 0 ? currentPage - 1 :
                    i === 1 ? currentPage : currentPage + 1
    );
    return (
        <nav aria-label="Page navigation" className="mt-2">
            <ul className="pagination justify-content-end">
                <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                    <button className="page-link" onClick={() => changePage(currentPage - 1)}>Previous</button>
                </li>
                {pages.map(x => {
                    return (
                        <li key={x} className={x === currentPage ? "page-item active" : "page-item"}>
                            <button className="page-link" onClick={() => changePage(x)}>{x}</button>
                        </li>
                    )
                })}
                <li className={currentPage === noOfPages ? "page-item disabled" : "page-item"}>
                    <button className="page-link" onClick={() => changePage(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;