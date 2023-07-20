import { useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// using the material ui fonts
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const RegisterPage = () => {
  // useEffect to show the title on the page as we click on the page.
  useEffect(() => {
    document.title = "Amazon Registeration";
  }, []);

  // using the navigation hooks so that we can go to the signIn page when click on it.
  const navigate = useNavigate();

  // sign in page if the user exits.
  const SignInPage = () => {
    navigate("/signIn");
  };

  return (
    <>
      <Container>
        <ContainerBox>
          <Logo>
            <img src="/images/signInLogo.png" alt="signInLogo" />
          </Logo>
          <Form>
            <h1>Create Account</h1>
            <div>
              <h5>Your name</h5>
              <input
                name="userName"
                type="text"
                placeholder="First and last name"
              />
            </div>
            <div>
              <h5>Mobile number (optional)</h5>
              <input type="telephone" name="phoneNumber" />
            </div>
            <div>
              <h5> Email</h5>
              <input type="email" name="email" />
            </div>
            <div>
              <h5>Password</h5>
              <input
                type="password"
                name="password"
                placeholder="At least 6 character"
              />
            </div>
            <PasswordContent id="PasswordContent">
              <PriorityHighIcon id="PriorityHighIcon" />
              <strong>Passwords must be at least 6 characters.</strong>
            </PasswordContent>
            <div>
              <p id="p">
                By enrolling your mobile phone number, you consent to receive
                automated security notifications via text message from Amazon.
                Message and data rates may apply.
              </p>
            </div>
            <div>
              <button>Continue</button>
            </div>
            <hr />
            <div>
              <p>
                Already have an account?
                <span onClick={SignInPage}>
                  Sign in <PlayArrowIcon id="PlayArrowIcon" />
                </span>
              </p>
              <p>
                By creating an account or logging in, you agree to Amazon’s
                <span>Conditions of Use </span> and
                <span>Privacy Policy.</span>
              </p>
            </div>
          </Form>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const ContainerBox = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 786px) {
    width: 70%;
  }
`;

const Logo = styled.div`
  img {
    width: 120px;
  }
`;

const Form = styled.form`
  margin-top: -10px;
  flex-wrap: nowrap;
  white-space: break-spaces;
  /* font-family: "Lato", sans-serif; */
  font-family: "Roboto", sans-serif;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding-top: 10px;
  padding-left: 18px;
  padding-right: 18px;

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
    margin-top: 12px;
    margin-bottom: 12px;
    h1 {
      font-weight: bolder;
      color: black;
    }
    h5 {
      font-size: 14px;
      margin-bottom: 4px;
    }

    input {
      height: 35px;
      padding: 5px;
      border-radius: 8px;
      border: none;
      border: 2px solid rgba(0, 0, 0, 0.15);
    }

    p {
      font-size: 14px;
      font-weight: 600;
      /* text-align: justify; */
      padding: 5px;
      line-height: 1.5;
    }
  }
  button {
    width: 100%;
    height: 29px;
    padding: 3px;
    border-radius: 8px;
    border: none;
    background-color: #ffd814;
    cursor: pointer;
  }
  span {
    color: #0066c0;
    font-weight: 900;
    padding: 5px;
  }
  span:hover {
    text-decoration: underline;
    color: #c45500;
    cursor: pointer;
  }
  #PlayArrowIcon {
    font-size: 13px;
    padding-top: 4px;
    margin-left: -3px;
  }

  @media (max-width: 786px) {
    margin-left: 12px;
    margin-right: 12px;
    font-size: 12px;
    h5 {
      font-weight: 900;
      font-size: 16px;
    }
  }
`;

const PasswordContent = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  #PriorityHighIcon {
    width: 15px;
    color: blue;
  }
`;

const TermsAndCondition = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
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

export default RegisterPage;
