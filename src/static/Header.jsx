import styled from "styled-components";
import SideBar from "./SideBar";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const getToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <h3>123done</h3>

          <Hold>
            <p>Platform ⅴ</p>
            <p>Use Cases ⅴ</p>
            <p>Pricing ⅴ</p>
            <p>Resources ⅴ</p>
          </Hold>
          <ButtonHoldf>
            <nav>
              <button>Login</button>
            </nav>
            <main>
              <button>Request a Demo</button>
            </main>
          </ButtonHoldf>

          <Sidenav onClick={getToggle}>
            <MdOutlineMenu />
          </Sidenav>
        </Wrapper>
      </Container>
      {toggle ? <SideBar /> : null}
    </div>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 10px;
    font-weight: 500;
  }
  @media (max-width: 810px) {
    display: none;
  }
`;
const ButtonHoldf = styled.div`
  display: flex;
  align-items: center;

  nav {
    margin: 0px 10px;
    font-weight: 800;

    button {
      height: 30px;
      border-radius: 5px;
      
      border: 2px solid #ddd;
      cursor: pointer;
      font-family: Montserrat;
      font-weight: 700;
    }
  }
  main {
    button {
      background-color: blue;
      border: none;
      color: white;
      height: 30px;
      width: 130px;
      border-radius: 5px;
      cursor: pointer;
      font-family: Montserrat;
      font-weight: 700;
    }
  }
  @media (max-width: 810px) {
    display: none;
  }
`;
const Sidenav = styled.div`
  display: none;
  @media (max-width: 810px) {
    display: flex;
    font-size: 25px;
    cursor: pointer;
  }
`;
