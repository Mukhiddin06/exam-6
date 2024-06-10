import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"
import App from "../App"
import Login from "../pages/login/login"
import Users from "../pages/users/users"
import Main from "../pages/main/main"
import Todos from "../pages/todos/todos"
import SingleCard from "../pages/single-card/single-card"
 const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login />}/>
                <Route path="main/*" element={<Main/>}>
                    <Route index element={<Users />}/>
                    <Route path="todos" element={<Todos />}/>
                    <Route path="single-card/:id" element={<SingleCard />}/>
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={router}/>
 }
 export default Index