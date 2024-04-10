import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Product from "./Product";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Product />
      </div>
    </ChakraProvider>
  );
}

export default App;
