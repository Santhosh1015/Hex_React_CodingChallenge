import { useDispatch, useSelector } from "react-redux"
import { deleteObject } from "../store/actions/objectActions"
import { useState } from "react"

function ObjectList() {
    const dispatch = useDispatch()

    const list = useSelector((state) => state.objectList)

    const [page, setPage] = useState(1)
    const size = 10

    const totalPage = Math.max(1, Math.ceil(list.length / size))

    const currPage = Math.min(page, totalPage)
    const start = (currPage - 1) * size

    const temp = list.slice(start, start + size)


    const onPageChange = (val) => {
        setPage(val)
    }
    const onDelete = (objId) => {
        dispatch(deleteObject(objId))
    }
    return (
        <div className="container">
            <div className="row">
                {
                    temp?.map((o, index) => (
                        <div className="card" key={index}>
                            <div className="card-header bg-dark text-white">
                                <h4>{o.name}</h4>
                            </div>
                            <div className="card-body">
                                <p className="mb-1"> Color: {o.data?.color || "N/A"}</p>
                                <p className="mb-1"> Price: {o.data?.price || "N/A"}</p>
                                <p className="mb-1"> CPU: {o.data?.CPU || "N/A"}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-outline-danger" onClick={() => onDelete(o.id)}>Delete</button>
                            </div>
                        </div>

                    ))
                }
            </div>
            <nav aria-label="Page navigation" className="mt-4">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button className="page-link" onClick={() => setPage(page - 1)}
                            disabled={page === 0}>Previous</button>
                    </li>

                    {Array.from({ length: totalPage }, (e, index) => (
                        <li key={index} className="page-item">
                            <button className="page-link" onClick={() => onPageChange(index)}>{index + 1}</button></li>
                    ))}

                    <li className="page-item"><button className="page-link" onClick={() => setPage(page + 1)}
                        disabled={currPage === totalPage} >Next</button></li>
                </ul>
            </nav>


        </div>
    )
}
export default ObjectList