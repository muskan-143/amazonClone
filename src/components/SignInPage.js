import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SignInPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Amazon Sign In";
  }, []);

  const createAccount = () => {
    navigate("/register");
  };

  return (
    <>
      <Container>
        <ContainerBox>
          <Logo>
            <img src="/images/signInLogo.png" alt="signInLogo" />
          </Logo>

          <Card>
            <h3>Sign in</h3>
            <h6>Email</h6>
            <input type="email" name="email" />

            <button>Continue</button>

            <p>
              By continuing, you agree to Amazon's
              <span> Conditions of Use </span>
              and <span>Privacy Notice.</span>
            </p>

            <div>
              <PlayArrowIcon id="PlayArrowIcon" />
              <span>Need help?</span>
            </div>
            <div id="help">
              <ul>
                <li>
                  <span>Forget password</span>
                </li>
                <li>
                  <span>Other issues with Sign-In</span>
                </li>
              </ul>
            </div>
          </Card>

          <Box>
            <div></div>
            <span>New to Amazon?</span>
            <div></div>
          </Box>

          <Button>
            <button onClick={createAccount}>Create your Amazon account</button>
          </Button>
        </ContainerBox>

        <TermsAndCondition>
          <div id="div"></div>
          <div>
            <span>Conditions of Use</span>
            <span>Privacy Notice</span>
            <span>Help</span>
          </div>

          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </TermsAndCondition>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;

  @media (max-width: 786px) {
    width: 70vw;
  }
`;

const Logo = styled.div`
  img {
    width: 120px;
  }
`;

const Card = styled.form`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.11);
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  line-height: 1.4;
  font-size: 25px;
  padding: 10px 20px;
  h6 {
    margin-top: 10px;
    font-weight: bolder;
  }
  input {
    width: 100%;
    height: 30px;
    border-radius: 3px;
    border: none;
    border: 2px solid rgba(0, 0, 0, 0.15);
    outline: none;
  }

  button {
    width: 100%;
    height: 29px;
    padding: 3px;
    border-radius: 8px;
    border: none;
    background-color: #ffd814;
    margin-top: 15px;
    cursor: pointer;
  }

  button:hover {
    /* background-color: #f7e06d; */
    background-color: #f2ce16;
  }

  p {
    font-size: 12px;
    font-weight: 900;
    margin-top: 15px;
    word-wrap: break-word;
    line-height: 1.5;
  }
  span {
    color: #0066c0;
    font-size: 12px;
    font-weight: 900;
  }

  div {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    padding: 0;
  }
  #PlayArrowIcon {
    color: black;
    height: 15px;
    cursor: pointer;
  }

  #help {
    width: 100%;
    display: flex;
    flex-direction: column;
    line-height: 1.9;

    ul li {
      list-style: none;
      font-size: 12px;
      align-self: flex-start;
    }
    display: none;
  }

  span:hover {
    text-decoration: underline;
    color: #c45500;
    cursor: pointer;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 13px;
  margin-bottom: 13px;
  color: #767676;

  div {
    width: 105px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  span {
    white-space: nowrap;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Button = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;

  button {
    padding: 9px 12px;
    width: 100%;
    border-radius: 15px;
    border: none;
    background: transparent;
    background-color: white;
    border: 2px solid rgba(0, 0, 0, 0.09);
    white-space: nowrap;
    cursor: pointer;
  }
  button:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 786px) {
    width: 70vw;
  }
`;

const TermsAndCondition = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  line-height: 1.5;
  #div {
    width: 80%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    margin-bottom: 15px;
  }
  span {
    width: 100%;
    padding: 10px;
    color: #0066c0;
    font-size: 12px;
  }
  p {
    font-size: 14px;
    white-space: nowrap;
    padding: 5px;
  }
`;

export default SignInPage;
