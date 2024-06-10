import { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./modal.css";
import { nanoid } from "nanoid";

const UserModal = (props) => {
    const [form, setForm] = useState({ status: props.status || 'open' });
    const { open, cards, setCards, toggle, card, status } = props;

    useEffect(() => {
        setForm({ ...card, status: card.status || status });
    }, [card, status]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (card.id) {
            let newCards = cards.map((item) => {
                if (item.id === card.id) {
                    return { ...item, name: form.name || item.name , status: form.status || item.status};
                }
                return item;
            });
            setCards([...newCards]);
        } else {
            let id = nanoid();
            setCards([...cards, { ...form, id}]);
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
                    <input defaultValue={card.name} onChange={handleChange} type="text" placeholder="Name" name="name" className="modal-input" />
                    <select value={form.status} onChange={handleChange} name="status" className="modal-select">
                        <option value="open">Open</option>
                        <option value="pending">Pending</option>
                        <option value="inprog">In Progress</option>
                        <option value="complete">Complete</option>
                    </select>
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
