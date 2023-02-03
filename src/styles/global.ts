import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
   margin : 0;
   padding: 0;
   box-sizing:border-box;
}

#root{
   margin:0 auto;
}

:focus{
   outline: 0;
}

body, input, textarea, button{
   font-family: 'Roboto', sans-serif;
}

`
