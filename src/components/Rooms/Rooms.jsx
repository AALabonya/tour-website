/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Headings from "../Shared/Headings/Headings";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
    const[rooms, setRooms] =useState([])
    const[params, setParams] = useSearchParams()

    const category =params.get("category")
   

    useEffect(()=>{
       getAllRooms()
        .then(data=>{
            if(category){
                const filterData = data.filter(room=> room.category === category)
                setRooms(filterData)
            }else{
                setRooms(data)
            }
        }
            )
    },[category])
    // console.log(rooms);
    return (
        <Container>
           {rooms && rooms.length >0 ?(
             <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
             {
                 rooms.map(room=><Card key={room._id} room={room}></Card>)
             }
         </div>
           ):(
            <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                <Headings center={true}   title="No Rooms Available In This Category!" subTitle="Please Select Other Categories"/>
            </div>
           )
        
        }
        </Container>
    );
};

export default Rooms;

// TO: jp@programminghero.org
// Sub: Orientation Issues