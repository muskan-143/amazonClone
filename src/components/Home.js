import { styled } from "styled-components";
import ProductItem from "./ProductItem";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Image>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="The prime value"
          />
        </Image>

        <ProductContainer>
          <ProductItem
            altValue="Watch"
            srcValue="https://m.media-amazon.com/images/I/61xR03kVmWL._AC_UL400_.jpg"
            price="799"
          />

          <ProductItem
            altValue="Alex"
            srcValue="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
            price="3000"
          />
        </ProductContainer>

        <ProductContainer>
          <ProductItem
            altValue="sila machine"
            srcValue="https://m.media-amazon.com/images/I/61vG0Y7MiVL._AC_UY327_FMwebp_QL65_.jpg"
            price="8000"
          />
          <ProductItem
            altValue="laptop"
            srcValue="https://m.media-amazon.com/images/I/61eoCsHoJhL._AC_UY327_FMwebp_QL65_.jpg"
            price="30000"
          />
          <ProductItem
            altValue="phone"
            srcValue="https://m.media-amazon.com/images/I/61cEdrNEmaL._AC_SR270,180_QL70_.jpg"
            price="17000"
          />
        </ProductContainer>
      </Container>
    </>
  );
};
const Container = styled.div``;

const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  /* max-width: 1500px; */
  img {
    width: 100%;
    z-index: -1;
    margin-bottom: -250px;
    /* similar to the linear-gradient in background  it is not working in chrome*/
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
  @media (max-width: 780px) {
    img {
      margin-bottom: -100px;
    }
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
  @media (max-width: 780px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export default Home;
