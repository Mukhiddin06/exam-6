import { useEffect, useState } from "react";
import "./todos.css";
import axios from "axios";

const Todos = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(2)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`).then(response=>{
            setUsers(response.data)
        })
    },[page, limit])
    const changePage =(type)=>{
        if(type === "prev"){
            if(page > 1){
                setPage(prev => prev - 1)
            }
        }else{
            setPage(prev => prev + 1)
        }
    }
    return (
        <>
        <div className="container">
        <h1 className="table-name">Todos</h1>
            <div className="table-wrapper">
                <div className="table">
                <div className="select-wrapper">
                        <select className="table-select" onChange={(e)=>setLimit(e.target.value)}>
                            <option value="" selected >Select limit</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>UserId</td>
                                <td>Id</td>
                                <td>Title</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="btn-wrapper">
                        <button className="btn-change" onClick={()=>changePage("prev")}>Prev</button>
                        <p className="text-btn">{page}</p>
                        <button className="btn-change" onClick={()=>changePage("next")}>Next</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Todos;
