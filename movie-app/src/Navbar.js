import { Component } from "react";
import "./navbar.css"
import styled from "styled-components"

const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    color: white;
    height: 70px;
    align-items: center;
	position: relative;
    color: ${(props) => props.color || "cyan"}
    `;
    
    const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    font-family: "Times New Roman", Times, Serif,
    text-transform: uppercase;
    margin-left: 20px;
    &:hover {
        color: red
    };
    visibility: ${(props) => props.show ? "visible" : "hidden"};        // dynamic styles in styled component
`;

const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    background: red;
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
`;

class Navbar extends Component {

    render() {
        // const navbarStyle = {
        //     color: "#bc16dd", 
        //     backgroundColor: "yellow",
        //     fontSize: "100%",
        // }
        // const navbarStyle = {
        //     nav: {
        //         color: "#bc16dd", 
        //         backgroundColor: "yellow",
        //         fontSize: "100%",    
        //     }
        // }

        return (
            <Nav color="yellow" >
                <Title show={true}>Movie-App</Title>
                <CartIconContainer>
                    <CartImg src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart" />
                    <CartCount>0</CartCount>
                </CartIconContainer>
            </Nav>


            // EXTERNAL STYLE-SHEET
            // <div className="navbar">
            // USING module.css
            // <div className={NavbarStyles.navbar}>
            //     <div
            //         // INLINE CSS
            //         // style={{
            //         //     color: "#bc16dd", 
            //         //     backgroundColor: "yellow",
            //         // }}
            //         // style={navbarStyle.nav}
            //         >Movie-App
            //     </div>
            //     <div>
            //         <img src="" alt="cart" />
            //         <span>0</span>
            //     </div>
            // </div>

        )
    }
}

export default Navbar;