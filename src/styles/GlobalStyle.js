import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    :root{
        &, &.light-mode{

            --color-gray-0: #FFFFFF;
            --color-gray-20: #6110ad;
            --color-gray-30: #666666;
            --color-gray-700: #000000;


            --color-pink-200: #e14a13;
            --color-blue-200: #137de1;
            --color-yellow-200: #dee113;
            --color-blue-200: #06acf4;


            --red: #FFFFFF;
        }

        &.dark-mode{

          --red: black;

    --color-gray-0: #FFFFFF;
    --color-gray-20: #6110ad;
    --color-gray-30: #666666;
    --color-gray-700:#e14a13;


    --color-pink-200: #e14a13;
    --color-blue-200: #137de1;
    --color-yellow-200: #dee113;
    --color-blue-200: #06acf4;
    }
      
}


   
      

        *,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

li{
  list-style: none;
}

body {
  font-family:  "DM Sans" ,sans-serif;
  color: var(--color-grey-700);
  background-color: var(--red);
  /* width: 100vw; */
  /* border: 1px solid red; */
  /* &::-webkit-scrollbar{
    display: none;
  } */  

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  /* margin: 40px 0; */
}

#root{
    max-width: 80%;
    /* border: 1px solid green; */
    margin: 0 auto;
  padding: 30px;

}


        &, &.dark{
            
        }
`;

export default globalStyle;
