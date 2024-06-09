import "./cars.css"
import UserModal from "../modal/modal"
import { useState } from "react"
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

const Cars = () => {
    const [search, setSearch] = useState("")
    const [cars, setCars] = useState([
        {id:nanoid(), name:"BMW", price:150000, color:"blue", year:"2024-06-06", brand:"m8"}
    ]);
    const [car, setCar] = useState({})
    const [modal, setModal] = useState(false)

    const openModal = (item) => {
        setCar(item)
        setModal(true)

    }
    const toggle =()=>{
        setModal(false)
        setCar({})
    }
    const deleteCar =(id)=>{
        setCars(cars.filter((car) => car.id !== id));
    }
    return (
        <>
            <UserModal open={modal} car={car} toggle={toggle} cars={cars} setCars={setCars} />
            <div className="container">
                <div className="cars-wrapper">
                    <div className="cars">
                        <div className="btn-wrp">
                            <button className="btn-cars" onClick={()=>setModal(true)}>Add user</button>
                        </div>
                        <div className="inp-wrp">
                            <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} className="inp-cars" />
                        </div>
                    </div>
                    <div className="cars-table">
                        <table>
                            <thead>
                                <tr>
                                    <td>T/R</td>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Year</td>
                                    <td>Color</td>
                                    <td>Brand</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cars?.filter((item) => {
                                    let name = item?.name?.toLowerCase()
                                    let find = search.toLowerCase()
                                        if(name.includes(find)){
                                            return item
                                        }
                                    }).map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.year}</td>
                                        <td>{item.color}</td>
                                        <td>{item.brand}</td>
                                        <td>
                                            <div className="btn-wrapper">
                                                <button onClick={()=>openModal(item)} className="btn-edit"><i className="fa-solid fa-pen-to-square"></i></button>
                                                <button onClick={()=>deleteCar(item.id)} className="btn-trash"><i className="fa-solid fa-trash-can"></i></button>
                                                <NavLink to="/single-cars">
                                                    <span><i className="fa-solid fa-eye"></i></span>
                                                </NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cars
