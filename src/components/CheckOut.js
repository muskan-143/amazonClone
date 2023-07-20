import { styled } from "styled-components";
import Header from "./Header";
import "../index.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CheckOut = (props) => {
  return (
    <>
      <Header />
      <Container>
        <AddedItemContainer>
          <ItemAdded>
            <div id="ItemAddedPicture">
              <img
                src="https://m.media-amazon.com/images/I/61eoCsHoJhL._AC_UY327_FMwebp_QL65_.jpg"
                alt="laptop"
              />
              <span>
                <CheckCircleIcon id="CheckCircleIcon" />
                Added to the card{" "}
              </span>{" "}
            </div>{" "}
          </ItemAdded>{" "}
          <SubTotal>
            <div id="totalCard">
              <span>
                Your order is eligible for FREE Delivery.Please Click on proceed
                to place your order.{" "}
              </span>{" "}
              <div id="line"> </div>{" "}
              <div id="totalPrice">
                <p> SubTotal Price: Rs 30, 000 </p>{" "}
                <button> Proceed To Buy It </button>{" "}
              </div>{" "}
            </div>{" "}
          </SubTotal>{" "}
        </AddedItemContainer>{" "}
        <Heading>
          <h4> Shopping Card List </h4> <div />
        </Heading>{" "}
        <ShoppingCardList>
          <SelectedItem>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/61eoCsHoJhL._AC_UY327_FMwebp_QL65_.jpg"
                alt="laptop"
              />
            </div>{" "}
            <div>
              <p id="productInfo">
                HP Pavilion 15 AMD Ryzen 5 - 5625 U 8 Gb Ram / 512 Gb Ssd 15.6
                Inches Laptop.{" "}
              </p>{" "}
              <p> 🌟🌟🌟🌟 </p> <button> Remove Item </button>
            </div>{" "}
          </SelectedItem>{" "}
        </ShoppingCardList>{" "}
        <ShoppingCardList>
          <SelectedItem>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/61eoCsHoJhL._AC_UY327_FMwebp_QL65_.jpg"
                alt="laptop"
              />
            </div>{" "}
            <div>
              <p id="productInfo">
                HP Pavilion 15 AMD Ryzen 5 - 5625 U 8 Gb Ram / 512 Gb Ssd 15.6
                Inches Laptop.{" "}
              </p>{" "}
              <p> 🌟🌟🌟🌟 </p> <button> Remove Item </button>
            </div>{" "}
          </SelectedItem>{" "}
        </ShoppingCardList>{" "}
      </Container>{" "}
    </>
  );
};

const Container = styled.div``;

const AddedItemContainer = styled.div``;

const ItemAdded = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  width: 100%;
  margin-top: 10px;

  #ItemAddedPicture {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
    height: 100px;
    background-color: #fff;
    width: 100%;
    img {
      max-width: 100px;
      max-height: 90px;
      object-fit: contain;
      background: transparent;
      margin-right: 25px;
    }
    span {
      display: flex;
      align-items: center;
      #CheckCircleIcon {
        color: green;
        margin-right: 4px;
      }
    }
  }
`;

const ShoppingCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: auto;
  background-color: white;
  padding-top: 13px;
  padding: 25px;
  /* For making center */
  margin: auto;
  margin-top: 20px;
  @media (max-width: 786px) {
    width: auto;
  }
`;

const SelectedItem = styled.div`
  width: auto;
  margin-top: 9px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  line-height: 1.2;
  img {
    max-width: 300px;
    max-height: 300px;
    padding: 8px;
  }

  #productInfo {
    margin-bottom: 9px;
  }

  button {
    border: none;
    background-color: #ffd814;
    padding: 10px;
    margin-top: 8px;
    min-width: 80px;
    border-radius: 12px;
  }

  @media (max-width: 786px) {
    flex-wrap: wrap;

    img {
      width: 200px;
      margin-bottom: 5px;
    }
  }
`;

const SubTotal = styled.div`
  #totalCard {
    margin-top: 25px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: auto;
    min-height: 100px;
    width: auto;
    background-color: #fff;
    font-weight: 400;
    padding: 20px;
    span {
      color: #067d62;
      word-wrap: break-word;
    }
    p {
      display: flex;
      font-weight: bold;
    }
    button {
      margin-top: 5px;
      border: none;
      background-color: #ffd814;
      padding: 9px;
      border-radius: 10px;
      width: 130px;
    }
    #line {
      margin-left: 20px;
      margin-right: 20px;
      width: 1px;
      height: 80px;
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    #totalPrice {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 300px;
    }
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: -20px;
  background-color: white;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  width: 800px;

  div {
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.18);
    height: 1px;
  }

  @media (max-width: 786px) {
    width: auto;
  }
`;

export default CheckOut;
