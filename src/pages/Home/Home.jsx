import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";
const Home = () => {

    return (
        <div>
      
                {/* Categories section  */}
                  <Categories/>
                {/* Room section  */}
                <Rooms/>
            
        </div>
    );
};

export default Home;