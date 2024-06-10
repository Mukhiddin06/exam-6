import { useState } from "react";
import UserModal from "../modal/modal";
import "./todos.css";

const Todos = () => {
    const [cards, setCards] = useState([]);
    const [modal, setModal] = useState(false);
    const [card, setCard] = useState({});
    const [status, setStatus] = useState("");

    const openModal = (item, status) => {
        setCard(item);
        setStatus(status);
        setModal(true);
    };

    const toggle = () => {
        setModal(false);
        setCard({});
        setStatus("");
    };

    const deleteCard = (id) => {
        setCards(cards.filter((car) => car.id !== id));
    };

    return (
        <>
            <UserModal open={modal} card={card} toggle={toggle} cards={cards} setCards={setCards} status={status} />
            <div className="container">
                <div className="cards-wrapper">
                    {['open', 'pending', 'inprog', 'complete'].map(status => (
                        <TaskColumn
                            key={status}
                            status={status}
                            cards={cards.filter(card => card.status === status)}
                            openModal={openModal}
                            deleteCard={deleteCard}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

const TaskColumn = ({ status, cards, openModal, deleteCard }) => {
    return (
        <div className="single-card">
            <h1 className="single-card-title">{status}</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <div className="btns-wrapper">
                                    <button onClick={() => openModal(item)} className="btn-edit"><i className="fa-solid fa-pen-to-square"></i></button>
                                    <button onClick={() => deleteCard(item.id)} className="btn-trash"><i className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="btns-wrp">
                <button className="btn-cars" onClick={() => openModal({}, status)}>Add user</button>
            </div>
        </div>
    );
};

export default Todos;
