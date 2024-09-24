import { Component } from "react";
import "./navbar.css"
import styles from "./navbar.module.css";

class Navbar extends Component {

    render() {
        const navbarStyle = {
            color: "#bc16dd", 
            backgroundColor: "yellow",
            fontSize: "100%",
        }

        return (
            // STYLE-SHEET
            // <div className="navbar">
            // USING module.css
            <div className={styles.navbar}>
                <div
                    // INLINE CSS
                    // style={{
                    //     color: "#bc16dd", 
                    //     backgroundColor: "yellow",
                    // }}
                    style={navbarStyle}
                    >Movie-App
                </div>
                <div>
                    <img src="" alt="cart" />
                    <span>0</span>
                </div>
            </div>
        )
    }
}

export default Navbar;