import React, { useContext, useEffect, useState } from "react";
import { adminContext } from "../../contexts/AdminContext";
import axios from "axios";
import FacebookIcon from '@material-ui/icons/Facebook';
import EditModal from './EditModal'

const MenuDetails = () => {
  const { editCafe, saveCafe, dishDelete, dishEdit } = useContext(adminContext);
  const [newEditItem, setNewEditItem] = useState(editCafe);
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState("");
  let [img, setImg] = useState("");
  let [modal, setModal] = useState(false)
  let [editContact, setEditContact] = useState([])

  useEffect(()=> {
    setNewEditItem(editCafe)
  },[editCafe])

  function handleEdit(item){
      setModal(true)
      setEditContact(item)
  }

  function handleCloseModal(){
      setModal(false)
  }

  // Редактирование 
  async function handleSaveContact(newContact1){
    let arr = {...newEditItem}

    let newArr = arr.menu

    let newContact = newArr.map(item =>{
        if(item.id === newContact1.id){
            return newContact1
        }
        return item
    })
    arr.menu = newContact
    dishEdit(arr)
  }

  function handleValue1(e) {
    setTitle(e.target.value);
  }
  function handleValue2(e) {
    setPrice(e.target.value);
  }
  function handleValue3(e) {
    setImg(e.target.value);
  }

  function handleClick() {
    let newObj = {
      title: title,
      price: price,
      img: img,
      id: Date.now()
    };
    handleDish(newObj)
    setTitle("");
    setPrice("");
    setImg("");
  }

//    Добавляет в меню данные

  async function handleDish(dish){
    let arr = {...newEditItem}
    arr.menu.push(dish)
    setNewEditItem(arr)
    await axios.patch(`http://localhost:8001/cafes/${newEditItem.id}` ,newEditItem)
  }

  // Удаление

  async function handleDelete(id){
    let arr = {...newEditItem}

    let newArr = arr.menu.filter(item => {
        return item.id !== id
    })
    arr.menu = newArr
    dishDelete(arr)     
  }

  useEffect(() => {
    setNewEditItem(editCafe);
  }, [editCafe]);

  function handleEditInput(e) {
    let newCafe = {
      ...newEditItem,
      [e.target.name]: e.target.value,
    };
    setNewEditItem(newCafe);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>address</th>
            <th>img</th>
            <th><FacebookIcon/></th>
          </tr>
        </thead>
        <tbody>
          {newEditItem ? (
            <tr key={newEditItem.id}>
              <td>
                <input
                  value={newEditItem.name}
                  type="text"
                  name="name"
                  onChange={handleEditInput}
                  placeholder="name"
                />
              </td>
              <td>
                <input
                  value={newEditItem.address}
                  type="text"
                  name="address"
                  onChange={handleEditInput}
                  placeholder="address"
                />
              </td>
              <td>
                <input
                  value={newEditItem.image}
                  type="text"
                  name="image"
                  onChange={handleEditInput}
                  placeholder="image"
                />
              </td>
              <button onClick={() => saveCafe(newEditItem)}>Save</button>
            </tr>
          ) : (
            <h1>loading</h1>
          )}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>img</th>
          </tr>
        </thead>
        <tobdy>
            <tr>
                <td> <input value={title} onChange={handleValue1} type="text" placeholder="title"/></td>
                <td>  <input value={price} onChange={handleValue2} type="text" placeholder="price"/></td>
                <td>  <input value={img} onChange={handleValue3} type="text" placeholder="img"/></td>
                <button onClick={handleClick}>Add</button>
            </tr>
        </tobdy>
      </table>

      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>
          {editCafe?.menu ? (
            <>
              {editCafe.menu.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <img style={{ width: "50px" }} src={item.img} />
                  </td>
                  <button onClick={() =>handleDelete(item.id)}>Delete</button>
                  <button onClick={() =>{handleEdit(item)}}>Edit</button>
                </tr>
              ))}
            </>
          ) : (
            <td>loading</td>
          )}
        </tbody>
      </table>
      {modal ? <EditModal
        editContact ={editContact}
        handleSaveContact ={handleSaveContact}
        handleCloseModal = {handleCloseModal}
      /> : null}
    </div>
  );
};

export default MenuDetails;
