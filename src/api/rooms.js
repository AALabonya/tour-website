import axiosSecure from "."
//Fetch all rooms from database
export const getAllRooms = async()=>{
    const {data}= await axiosSecure("/rooms")
    return data
}
 //Fetch all rooms hor host
export const getHostRooms =async email =>{
    const {data}= await axiosSecure(`/rooms/${email}`)
    return data
}

//fetch single room data from database
export const getSingleRoom = async id =>{
    const {data}= await axiosSecure(`/room/${id}`)
    return data
}

//Save a room data in database

export const addRoom =async roomData=>{
    const {data}= await axiosSecure.post(`/rooms`, roomData)
    return data
}

//get user role 
export const getRole =async email =>{
    const {data}= await axiosSecure(`/user/${email}`)
    return data.role
}