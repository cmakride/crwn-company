import { Outlet } from "react-router-dom";
import CategoryList from "../../components/categoryList/categoryList";
const Home = () => {
  return ( 
    <div>
      <Outlet/>
      <CategoryList/>
    </div>
    
   );
}
 
export default Home;