// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomsDetails = () => {
    // const { id } = useParams()
    // console.log(id);
        const room = useLoaderData()
        console.log(room);
    // const [room, setRoom] = useState({})

    // useEffect(() => {
    //     fetch("/rooms.json")
    //         .then(res => res.json())
    //         .then(data => {
    //           const singleRoom = data.find(room => room._id === id)
    //             setRoom(singleRoom)
    //         })
    // }, [id])
    // console.log(room);
    return (
       <Container>
            <Helmet><title>{room?.title}</title></Helmet>
            <div className="max-w-screen-lg mx-auto">
               <div className="flex flex-col gap-6">
                 <Header room={room}/>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                 <RoomInfo room={room}/>
                  {/* Room Reservation  */}
                 <div className="md:col-span-3 order-first md:order-last ">
                      <RoomReservation room={room}/>
                 </div>
               </div>
              
            </div>
            </Container>
    );
};

export default RoomsDetails;
