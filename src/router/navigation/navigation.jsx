import { BagIcon } from "../../componets/bag-icon/bag-icon";
import './navigation.scss'

export function Navigation(){
    return(
        <>
        <div className="navigation">
            <div>
                <h1>Urban Vogue</h1>
            </div>
            <div className="nav-links-container">
                <a className="nav-link">CAMISAS</a>
                <a className="nav-link">CALÇAS</a>
                <a className="nav-link">SAPATOS</a>
                <a className="nav-link">INFATIL</a>
                <BagIcon /> 
            </div>
        </div>
        </>
    )
}
