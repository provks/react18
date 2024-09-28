import { Component } from "react";
import styles from "./navbar.module.css";

class NavbarModule extends Component {

    render() {
        console.log("NavbarModule: ", this.props.cartCount);
        return (
            <>
                <div className={styles.nav}>
                    
                <div className={styles.title}>MOVIE APP</div>
                    
                    <div className={styles.cartIconContainer}>
                        <img className={styles.cartIcon} 
                            alt="Cart-Icon" 
                            src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"    
                        />
                        <span className ={styles.cartCount}>{this.props.cartCount}</span>
                    </div>  
                </div>
            </>
        )
    }
}

export default NavbarModule;