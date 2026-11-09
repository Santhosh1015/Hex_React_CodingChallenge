import { useState } from "react"
import { useDispatch } from "react-redux"
import { addObject } from "../store/actions/objectActions"

function ObjectAdd() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")
    const [cpu, setCpu] = useState("")

    const processAdd = (e) => {
        e.preventDefault()

        const obj = {
            'name': name,
            'data': {
                'Year': year,
                'Price': price,
                'CPU': cpu
            }
        }

        dispatch(addObject(obj))
        setName("")
        setYear("")
        setPrice("")
        setCpu("")

    }

    return (
        <div className="container">
            <h5 className="card card-header">Add object</h5>
            <form className="card card-body" onSubmit={processAdd}>
                <label>Name</label>

                <input type="text" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Year</label>
                <input type="number" className="form-control mb-2" value={year} onChange={(e) => setYear(e.target.value)} />

                <label>Price</label>
                <input type="number" step="0.01" className="form-control mb-2" value={price} onChange={(e) => setPrice(e.target.value)} />

                <label>CPU</label>
                <input type="text" className="form-control mb-2" value={cpu} onChange={(e) => setCpu(e.target.value)} />

                <button type="submit" className="btn btn-primary">Add</button>
            </form>


        </div>
    )
}
export default ObjectAdd
