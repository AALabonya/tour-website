import axiosSecure from "."


//create payment intent 
export const createPaymentIntent = async (price)=>{
    const {data} =await axiosSecure.post('/create-payment-intent', price)
    return data
}

//save booking info in bd 
export const saveBooking = async (paymentInfo)=>{
    const {data} =await axiosSecure.post('/bookings', paymentInfo)
    return data
}
///update
export const updateStatus = async (id, status)=>{
    const {data} =await axiosSecure.patch(`/rooms/status/${id}`, status)
    return data
}