import { Route, Routes } from "react-router"
import ObjectList from "./components/ObjectList"
import ObjectAdd from "./components/ObjectAdd"
import ObjectDashBoard from "./components/ObjectsDashboard"


function App() {
  

  return (
    <Routes>
       <Route path="/" element={<ObjectDashBoard />}>
        <Route path="list" element={<ObjectList />} />
        <Route path="add" element={<ObjectAdd />} />
      </Route>

    </Routes>
   
  )
}

export default App
