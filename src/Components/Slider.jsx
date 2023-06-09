import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';
import { useState } from 'react';
import { sliderItems } from '../data';
import { Link } from '@mui/material';

const Container = styled.div`
width: 100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
border-radius:50%;
background-color:#F5FEFD;
display:flex;
align-items:center;
justify-content: center;
position:absolute;
top:0;
bottom:0;
left:${props=> props.direction === "left" && "10px"};
right:${props=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`;
const Wrapper = styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
aligned-items:center;
background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
height:100%;
flex:1;
`;
const Image = styled.img`
height:80%;
width:80%;
`;
const InfoContainer = styled.div`
padding:50px;
flex:1;
`;

const Title = styled.h1`
font-size:60px;
word-spacing:8px;
font-weight: 800;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing:3px;
`;

const Name = styled.p`
font-size:80px;
word-spacing:8px;
color:#a9740e;
font-weight: 1000;
`;

const Logo = styled.img`
margin-left:27%;
height:40%;
width:40%;
`;
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction)=>{

    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
          {sliderItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
            <Image src={item.img}/>
           </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Name>{item.name}</Name>
            <Logo src={item.logo}></Logo>
          </InfoContainer>
          </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  );
};

export default Slider;
