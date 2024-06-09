import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./modal.css";
import { nanoid } from "nanoid";

const UserModal = (props) => {
    const [form, setForm] = useState({});
    const  {open, cars, setCars, toggle, car} = props
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(car.id){
            let new_cars = cars.map((item)=>{
                if(item.id === car.id){
                    item.name = form.name ? form.name : item.name
                    item.price = form.price ? form.price : item.price
                    item.year = form.year ? form.year : item.year
                    item.color = form.color ? form.color : item.color
                    item.brand = form.brand ? form.brand : item.brand
                }
                return item
            })
            setCars([...new_cars])
        }else{
            let id = nanoid() 
            cars.push({...form, id})
            setCars([...cars]);
        }
        toggle();
    };

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="modal-title">Add user</h1>
            </ModalHeader>
            <ModalBody>
                <form className="modal-form" id="submit" onSubmit={handleSubmit}>
                    <input defaultValue={car.name} onChange={handleChange} type="text" placeholder="Name" name="name" className="modal-input" />
                    <input defaultValue={car.price} onChange={handleChange} type="number" placeholder="Price" name="price" className="modal-input" />
                    <input defaultValue={car.year} onChange={handleChange} type="date" placeholder="Year" name="year" className="modal-input" />
                    <input defaultValue={car.color} onChange={handleChange} type="text" placeholder="Color" name="color" className="modal-input" />
                    <input defaultValue={car.brand} onChange={handleChange} type="text" placeholder="Brand" name="brand" className="modal-input" />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="modal-btn" onClick={toggle}>Cancel</button>
                <button className="modal-btn2" form="submit" type="submit">Save</button>
            </ModalFooter>
        </Modal>
    );
};

export default UserModal;
