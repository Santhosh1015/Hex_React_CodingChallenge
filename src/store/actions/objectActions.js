import axios from "axios"

export const getObjects = () => async (dispatch) => {
    const getURL = "https://api.restful-api.dev/objects"
    const response = await axios.get(getURL,
        {
        headers: { "x-api-key": "74c70880-a840-4892-892b-d92fa59ba287" }
    })
    


    dispatch({
        type: 'GET_OBJECTS',
        payload: response.data
    })
}

export const deleteObject = (id) => async (dispatch) => {
    await axios.delete(
        `https://api.restful-api.dev/objects/${id}`,
    {
        headers: { "x-api-key": "74c70880-a840-4892-892b-d92fa59ba287" }
    })
   
    dispatch({ 
        type: "DELETE_OBJECT",
         payload: id
    })

}
export const addObject = (obj) => async (dispatch) => {
    const response = await axios.post('https://api.restful-api.dev/objects', obj)
    dispatch({ 
        type: "ADD_OBJECT",
         payload: response.data 
    })
}