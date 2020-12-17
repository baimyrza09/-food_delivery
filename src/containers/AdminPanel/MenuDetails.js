import React, { useContext} from "react";
import { adminContext } from "../../contexts/AdminContext";

const MenuDetails = () => {
  const { menuDetails } = useContext(adminContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>
          {menuDetails?.menu ? (
              <>
                {menuDetails.menu.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img style={{ width: "50px" }} src={item.img} />
              </td>
            </tr>
          ))}
              </>
          ) : (<td>loading</td>)}
        </tbody>
      </table>
    </div>
  );
};

export default MenuDetails;
