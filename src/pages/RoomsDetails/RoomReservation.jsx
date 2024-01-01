
/* eslint-disable react/prop-types */
// import Calender from "./Calender";
import Button from "../../components/Button/Button";
// eslint-disable-next-line no-unused-vars
import { formatDistance } from "date-fns";
import {  useState } from "react";
// import { DateRange } from "react-date-range";
import Calender from "./Calender";
import BookingModal from "../../components/Modal/BookingModal";
import useAuth from "../../hooks/useAuth";


const RoomReservation = ({room}) => {
  let[isOpen, setIsOpen] =useState(false)
 const{user}=useAuth()
  const closeModal =()=>{
    setIsOpen(false)
  }
// const[calculation, setCalculation]= useState("")
// console.log(room);
//   console.log("this is to ", room?.to);
//   console.log(" this is from ",typeof room?.from);

// useEffect(()=>{
//   if(room?.to){
//     const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])
//     console.log(totalDays);
//     const totalPrice = totalDays * room?.price
//     setCalculation(totalPrice);
//   }else{
//     console.log("undefined");
//   }
  
 
// },[room?.to,room?.from,room?.price])

  //  console.log(totalPrice);
  const[value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key:"selection",
  })
    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])
    console.log(totalDays);
    const totalPrice = totalDays * room?.price

    const handleSelect = ranges => {
      setValue({ ...value })
    }
 console.log(value);
 
 const [bookingInfo, setBookingInfo] = useState({
  guest: {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
  },
  host: room?.host?.email,
  location: room?.location,
  price: totalPrice,
  to: value.endDate,
  from: value.startDate,
  title: room?.title,
  roomId: room?._id,
  image: room?.image,
})

          return (
            <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
              <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>$ {room?.price}</div>
                <div className='font-light text-neutral-600'>night</div>
              </div>
              <hr />
              <div className='flex justify-center'>
                <Calender  value={value} />
              </div>
        
              <hr />
              <div className='p-4'>
                <Button onClick={()=> setIsOpen(true)} label='Reserve' />
              </div>
              <hr />
              <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
                <div>Total</div>
                <div>${totalPrice}</div>
              </div>
              <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo}/>
            </div>
    );
};

export default RoomReservation;