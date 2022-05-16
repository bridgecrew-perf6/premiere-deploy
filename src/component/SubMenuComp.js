import { NavLink } from "react-bootstrap";
import { FaAddressCard, FaChartArea, FaCubes, FaMoneyBill, FaThLarge } from "react-icons/fa";
import "./SubMenu.css"

const SubMenuComp = ({ modifyParentStateValue }) => {


    //const page = 'coucou les amis';


    return (

        <div className="vertical-nav bg-white" id="sidebar">
            <div className="py-4 px-3 mb-4 bg-light">
                <div className="media d-flex align-items-center">
                    <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/270179824_10227681573568357_6192534326685177085_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=HqrB-dipUeEAX8n1l5z&_nc_ht=scontent-cdt1-1.xx&oh=00_AT8GK8mCH683e0hbjPPCwgp8o2wbDFx-w8vjk_ec7VnwqA&oe=6283DED5" alt="..." width="65" className="mx-3 rounded-circle img-thumbnail shadow-sm" />
                    <div className="media-body">
                        <h4 className="m-0">Tournoi</h4>
                        <p className="font-weight-light text-muted mb-0">Application</p>
                    </div>
                </div>
            </div>
            <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">DashBoard</p>
            <ul className="nav flex-column bg-white mb-0">
                <li className="nav-item">
                    <NavLink className="nav-link text-dark font-italic ml-3" onClick={() => modifyParentStateValue('liste')} href="#/" >
                        <FaThLarge className="mx-3 text-warning fa-lg" />Liste</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark font-italic" data-toggle="pill" onClick={() => modifyParentStateValue('tableaux')} href="#tableaux">
                        <FaCubes className="mx-3 text-warning" />Tableaux</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark font-italic" data-toggle="pill" href="#/" >
                        <FaAddressCard className="mx-3 text-warning" />Notes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark font-italic" data-toggle="pill" href="#/">
                        <FaMoneyBill className="mx-3 text-warning" />Paiement</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark font-italic" data-toggle="pill" href="#/">
                        <FaChartArea className="mx-3 text-warning" />Statistique</a>
                </li>

            </ul>
        </div>

    )
}
export default SubMenuComp;
