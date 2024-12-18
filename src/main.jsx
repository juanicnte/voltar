import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  config: {
    initialColorMode: "",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        fontFamily: "'Montserrat', sans-serif", // Usa la fuente del navegador o la definida en tus propios estilos
        color: "inherit",
        background: "#eeeeee",
        transitionProperty: "none", // Elimina las transiciones globales
        // lineHeight: "inherit",
      },
    },
  },
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <App />
    </ChakraProvider >
  </StrictMode>,
)
