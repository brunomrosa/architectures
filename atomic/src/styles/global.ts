import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }
  
  html, body, #root  {
    width: 100%;
    height: 100%;
    
    > div {
      height: 100%;
      width: 100%;
    }
    a, h1, h2, h3, h4, h5, h6, p, label, span, input, img{
      text-decoration: none;
    }
  }
  button {
    cursor: pointer;
  }

  [disabled]{
   opacity: 0.4;
   cursor: not-allowed;
  }
  //remove after migration
  :root {
    --primary: #8C1F28;
    --primary-alt: #591C21;
    --secondary: #044040;
    --attention: #D92525;
    --background: #F2F2F2;
    --text: #f3f3f3;
  }

`;
