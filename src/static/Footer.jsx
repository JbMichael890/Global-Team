import styled from "styled-components"

const Footer = () => {
  return (
    <Hold>
    <hr />
     <Logo>
         <h3>123done</h3>
         <h3>GitHub</h3>
         <h3>Medium</h3>
         <h3>facebook</h3>
         <h3>tumblr</h3>
         <h3>VISA</h3>
     </Logo>
     <hr />
    </Hold>
  )
}

export default Footer
const Hold = styled.div`
hr{
  border: 1px solid #ddd;
  width: 90%;

}
/* @media (max-width: 180px) {
  display: flex;
  align-items: center;
} */


`
const Logo = styled.div`
display: flex;
align-items: center;
/* width: 90%; */

h3{
  
  margin: 0px 50px;
  padding:  20px;
  font-weight: 900;
}

`
