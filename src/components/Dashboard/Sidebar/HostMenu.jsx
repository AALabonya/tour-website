import MenuItem from "./MenuItem";
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'
const HostMenu = () => {
    return (
        <>
        <MenuItem icon={BsFillHouseAddFill} label='Add Room' address='addRoom' />
        <MenuItem icon={MdHomeWork} label='My Listing' address='my-listing' />
      </>
    );
};

export default HostMenu;