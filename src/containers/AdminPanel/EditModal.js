import React, {useState} from 'react';
import './EditModal.css'

const EditModal = (props) => {

    let [editContact1, setEditContact1] = useState(props.editContact.title)
    let [editContact2, setEditContact2] = useState(props.editContact.price)
    let [editContact3, setEditContact3] = useState(props.editContact.img)
    let [editContact4] = useState(props.editContact)
    function setName(e){
       let name = e.target.value
        setEditContact1(name)
    }

    function setLastName(e){
        let lastName = e.target.value
        setEditContact2(lastName)
    }

    function setNumber(e){
        let number = e.target.value
        setEditContact3(number)
    }

    function handleSave(){
        let newObj = {
            title: editContact1,
            price: editContact2,
            img: editContact3,
            id: editContact4.id,
        }
        props.handleSaveContact(newObj)
    }


    return (
        <div>
            <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick = {props.handleCloseModal}>&times;</button>
                </div>
                <input 
                    onChange = {setName}
                    type="text" 
                    value={editContact1} 
                    className="inp-edit"
                />
                <input 
                    onChange = {setLastName}
                    type="text" 
                    value={editContact2} 
                    className="inp-edit"
                />
                <input 
                    onChange = {setNumber}
                    type="text" 
                    value={editContact3} 
                    className="inp-edit"
                />
                <button onClick = {handleSave}>Save</button>
            </div>
        </div>
        </div>
    );
};

export default EditModal;