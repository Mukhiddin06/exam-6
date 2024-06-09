import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./single-card.css";

const SingleCard = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setItem(response.data);
            })
            .catch(error => {
                console.error("Error fetching item data:", error);
            });
    }, [id]);

    return (
        <div className="container">
            <h1>Single Card</h1>
            {item ? (
                <div className="card-details">
                    <img width={200} height={200} src={item.image} alt="img" />
                    <div className="card-list">
                        <h2 className="card-title">{item.title}</h2>
                        <h3 className="card-about">{item.category}</h3>
                        <p className="card-text">{item.description}</p>
                        <div className="card-price">{item.price}$</div>
                        <div className="card-rate">{item.rating?.rate}</div>
                    </div> 
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SingleCard;
