import { useEffect, useState } from "react";
import "./users.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])
    const [limit, setLimit] = useState(2)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products?limit=${limit}&sort=desc`).then(response=>{
            setUsers(response.data)
        })
    }, [limit])
    return (
        <>
        <div className="container">
            <h1 className="table-name">Products</h1>
            <div className="table-wrapper">
                <div className="table">
                    <div className="select-wrapper">
                        <select className="table-select" onChange={(e)=>setLimit(e.target.value)} defaultValue={limit}>
                            <option value="1">Select limit</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                        <div className="cards">{users.map((item,index) =>(
                            <div className="cards-body" key={index}>
                                <img width={200} height={200} src={item.image} alt="img" />
                                <h2 className="cards-title">{item.title}</h2>
                                <h3 className="cards-about">{item.category}</h3>
                                <p className="cards-text">{item.description}</p>
                                <div className="cards-price">{item.price}$</div>
                                <div className="cards-rate">{item.rating.rate}</div>
                                <NavLink to={{
                                    pathname: `/main/single-card/${item.id}`,
                                    state: {
                                        image: item.image,
                                        title: item.title,
                                        category: item.category,
                                        description: item.description,
                                        price: item.price,
                                        rating: item.rating.rate
                                    }
                                }}>
                                <span><i className="fa-solid fa-eye"></i></span>
                                </NavLink>
                            </div>
                        ))}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Users;
