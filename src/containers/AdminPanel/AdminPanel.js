import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adminContext } from "../../contexts/AdminContext";

const AdminPanel = () => {
  const {
    cafes,
    getCafes,
    getMenuDetails,
    deleteCafe,
    addNewCafe,
    editCafe,
    getEditCafe,
  } = useContext(adminContext);

  useEffect(() => {
    getCafes();
  }, []);

  const [newCafe, setNewCafe] = useState({});
  const [menu, setNewMenu] = useState([]);

  function handleInputsValue(e) {
    let obj = {
      ...newCafe,
      [e.target.name]: e.target.value,
      menu,
    };

    setNewMenu([]);
    setNewCafe(obj);
  }

  function handleClick() {
    addNewCafe(newCafe);
  }

  return (
    <div>
      <div>
        <input
          name="name"
          onChange={handleInputsValue}
          type="text"
          placeholder="name"
          value={newCafe.name}
        />
        <input
          name="address"
          onChange={handleInputsValue}
          type="text"
          placeholder="address"
          value={newCafe.address}
        />
        <input
          name="image"
          onChange={handleInputsValue}
          type="text"
          placeholder="image"
          value={newCafe.image}
        />


        <button onClick={handleClick}>Add</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>address</th>
            <th>img</th>
            <th>menu</th>
          </tr>
        </thead>
        <tbody>
          {cafes.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>
                <img style={{ width: "50px" }} src={item.image} />
              </td>
              <td>
                <Link to="/menudetails">
                  <button onClick={() => getMenuDetails(item.id)}>
                    Подробнее
                  </button>
                </Link>
              </td>
              <td>
                <button onClick={() => deleteCafe(item.id)}>Delete</button>
              </td>
              <td>
                <Link to="/edit">
                  <button onClick={() => getEditCafe(item.id)}>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
