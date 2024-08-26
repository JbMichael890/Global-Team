import styled from "styled-components"
import { BsLightning } from "react-icons/bs";
import Image from "../assets/sideways-shot-fashionable-attractive-young-dark-skinned-female-ripped-jeans-relaxing-couch-with-portable-computer-her-lap-drinking-coffee-wa.avif"
const Home = () => {
  return (
  <Container>
    <Wrapper>
      <TextHold>
    <main>  <button><BsLightning/>Now! Our All integration just landed</button></main>
      <nav> Everything you need <br /> to scale a global team</nav>
      <p>Our company helps thousands of companies expand <br /> globally with unmatched speed and flexibility.</p>

    <button>Get Started</button>
      </TextHold>
      <ImageHold>
        <img src={Image} alt="image" />
      </ImageHold>


    </Wrapper>

  </Container>
  )
}

export default Home
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 50px;
flex-wrap: wrap;

`
const Wrapper = styled.div`
display: flex;
align-items: center;
width: 90%;
justify-content: space-between;
@media (max-width: 1180px) {
  flex-wrap: wrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  img{
    width: 90%;
  }
}

`
const TextHold = styled.div`
nav{
  font-size: 40px;
  font-weight: 700;
  margin-top: 10px;
@media (max-width:500px) {
  font-size: 35px;
}
@media (max-width:400px) {
  font-size: 27px}
}
p{
  
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 17px;
}
main{
  button{
background-color: lightblue;
border: none;
height: 25px;
font-weight: 500;
color: blue;
cursor: pointer;
border-radius: 5px;

}
}
button{
background-color: blue;
border: none;
height: 35px;
font-weight: 500;
color: white;
cursor: pointer;
border-radius: 5px;


}

`
const ImageHold = styled.div`
img{
  border-radius: 10px;
}
@media (max-width: 1180px) {
  margin-top: 30px;
}

`
