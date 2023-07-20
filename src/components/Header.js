import React from "react";
import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  // Redirection to the page of the product added in the card.
  const addToCard = () => {
    navigate("/checkOut");
  };

  // Redirecting to the home page when click on the amazon logo.
  const homePage = () => {
    navigate("/");
  };

  const signInPage = () => {
    navigate("/signIn");
  };

  return (
    <Container>
      <Logo>
        <img src="./images/logo.png" alt="" onClick={homePage} />
      </Logo>
      <SearchBar>
        <input type="text" placeholder="Search Amazon.in" alt="" />
        <SearchIcon id="SearchIcon" />
      </SearchBar>
      <NavBarContainer>
        <SignIn>
          <span> Hello, Guest </span>
          <button className="signInBtn" onClick={signInPage}>
            {" "}
            Sign In{" "}
          </button>
        </SignIn>
        <Orders>
          <span id="returnsFont"> Returns </span> <span> & Order </span>
        </Orders>
        <Prime>
          <span id="yourFont"> Your </span> <span> Prime </span>
        </Prime>
        <Basket>
          <span>
            <ShoppingCartIcon onClick={addToCard} />
          </span>
          <span id="count"> 0 </span>
        </Basket>
      </NavBarContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
  flex-wrap: nowrap;
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  img {
    width: 5vw;
    object-fit: contain;
    margin: 0 8px;
  }
  @media (max-width: 786px) {
    img {
      width: 10vw;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  input {
    width: 100%;
    height: 29px;
    padding: 7px;
    border: none;
    outline: none;
    border-radius: 2px;
  }

  #SearchIcon {
    height: 29px !important;
    width: 30px;
    background-color: #cd9042;
    color: #131921;
  }

  @media (max-width: 450px) {
    input {
      font-size: 8px;
      height: 14px;
      padding: 4px;
    }

    #SearchIcon {
      height: 22px !important;
      width: 20px;
    }
  }
`;

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  margin-right: 14px;
  span {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.6);
  }

  button {
    font-size: 15px;
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
  }
`;

const Orders = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  line-height: 1.2;
  span {
    font-size: 15px;
  }
  #returnsFont {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Prime = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  line-height: 1.2;
  padding-left: 5px;
  padding-right: 5px;
  #yourFont {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Basket = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  padding: 3px;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 2px solid white;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  padding: 20px;
`;
export default Header;
