import styled from "styled-components";
export const StyledDetailsWrapper = styled.div `
  margin:1rem;
  padding:1rem;
  width:60%;
  border:1px solid grey;
  box-shadow: 15px 5px 50px #fff;
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:0.5rem;
  backdrop-filter: blur(5px);

`
export const StyledImage = styled.img `
width:50%;
height:80%;
`

export const StyledText = styled.p `
font-weight: bold;
`