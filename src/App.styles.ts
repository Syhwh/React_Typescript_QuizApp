import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html {
	height:100%
}

body {
	background: linear-gradient(90deg,
	rgba(2,0,.6,1) 0%,
	rgba(9,9,121,1) 35%,
	rgba(0,212,255,1) 100%);
	margin:0;
	padding: 0 20px;
	display:flex;
	justify-content:center
}
* {
	box-sizing: border-box;
	font-family: Arial, Helvetica, sans-serif;
}
`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items: center;
> p {
	color:#fff;
}
.score {
	color:#fff;
	font-size:2rem;
	margin:0;
}

h1 {
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size:70px;
text-align:center;
color:#fff;
text-transform:uppercase;

}
.start, .next {
cursor:pointer;
background: linear-gradient(180deg, #fff, #ddcc91);
border: 2px solid #d38558;
box-shadow:0px 5px 10px  rgba(0,0,0,0.25);
border-radius:10px;
height:40px;
margin:20px 0;
padding:0 40px;
}

.start{
	max-width:200px;
}

`

export const SettingWrapper = styled.div`
display:flex;
 form{
color:red;
}

`