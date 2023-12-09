import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menuData = useLoaderData();
  console.log(menuData);

  return (
    <ul>
      {menuData.map(pizza => <MenuItem key={pizza.id} pizza={pizza} />)}
    </ul>
  );
}

export async function loader(){
  const menu = await getMenu();
  return menu;
}


export default Menu;
