import { Outlet } from "react-router-dom"
import Header from "../../components/ui/header/header"
import "./main.css"

const Main =() =>{
    return(
        <>
        <div className="main_layout">
            <div className="main-left">
                <Header/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
        </>
    )
}
export default Main