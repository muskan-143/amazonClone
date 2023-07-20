import styled from "styled-components";

const ProductItem = (props) => {
  return (
    <Container>
      <ProductInfo> Lorem Ipsum is simply dummy text of the Lorem </ProductInfo>
      <ProductPrice>
        <small> &#8377;</small>
        <strong> {props.price} </strong>
      </ProductPrice>
      <ProductRating> 🌟🌟🌟🌟 </ProductRating>
      <ProductImage>
        <img src={props.srcValue} alt={props.altValue} />
      </ProductImage>
      <AddButton>
        <button> Add to the card </button>
      </AddButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 70%;
  margin: 50px;
  margin-left: 50px;
  border-radius: 10px;
  max-height: 600px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 2px;
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductPrice = styled.div`
  margin-left: 15px;
`;

const ProductRating = styled.div`
  margin-left: 15px;
`;
const ProductImage = styled.div`
  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  button {
    background-color: #cd9042;
    padding: 9px;
    border: none;
    border-radius: 5px;
  }
`;

export default ProductItem;
