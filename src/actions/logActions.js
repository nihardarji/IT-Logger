import { 
    ADD_LOG,
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from './types'

// export const getLogs = () => {
//     return async dispatch => {
//         setLoading()
        
//         const res = await fetch('/logs')
//         const data = await res.json()

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

// Add new Log
export const addLog = (log) => async dispatch => {
    try {
        setLoading()
        
        const res = await fetch('/logs',{
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type' : 'application/json'
            }}
        )
        const data = await res.json()

        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (err) {
        dispatch({
            type : LOGS_ERROR,
            payload : err.response.statusText
        })
    }
}
// Get Logs from Server
export const getLogs = () => async dispatch => {
    try {
        setLoading()
        
        const res = await fetch('/logs')
        const data = await res.json()

        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type : LOGS_ERROR,
            payload : err.response.statusText
        })
    }
}

// Delete Log from Server
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading()
        
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })

        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (err) {
        dispatch({
            type : LOGS_ERROR,
            payload : err.response.statusText
        })
    }
}

// Update the Log
export const updateLog = (log) => async dispatch => {
    try {
        setLoading()
        
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()

        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (err) {
        dispatch({
            type : LOGS_ERROR,
            payload : err.response.statusText
        })
    }
}

// Search Logs from Server
export const searchLogs = ( text ) => async dispatch => {
    try {
        setLoading()
        
        const res = await fetch(`/logs?q=${text}`)
        const data = await res.json()

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type : LOGS_ERROR,
            payload : err.response.statusText
        })
    }
}

// Set Current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

// Clear Current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

// Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}