import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <p>Platform</p>
        <p>Use Cases</p>
        <p>Pricing</p>
        <p>Resourses</p>
      </Wrapper>
    </Container>
  );
};

export default SideBar;
const Container = styled.div`
display:flex;
justify-content: flex-end;


`;
const Wrapper = styled.div`
background-color: blue;
height: 50vh;
width: 200px;
color: indigo;
font-weight: 800;
`;
