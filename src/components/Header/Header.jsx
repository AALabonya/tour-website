import Headings from "../Shared/Headings/Headings";

/* eslint-disable react/prop-types */
const Header = ({room}) => {
    return  <>
    <Headings title={room?.title} subtitle={room?.location} />
    <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
      <img
        className='object-cover w-full'
        src={room.image}
        alt='header image'
      />
    </div>
  </>
};

export default Header;