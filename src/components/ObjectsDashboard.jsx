import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getObjects } from "../store/actions/objectActions"
import Navbar from "./Navbar"
import { Outlet } from "react-router"

function ObjectDashBoard() {

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(getObjects())

    }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>

        </div>
    )
}
export default ObjectDashBoard
