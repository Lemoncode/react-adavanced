import React from "react";
import "./App.css";

function App() {
  const [contador, setContador] = React.useState(0);

  React.useEffect(() => {
    setContador(1);
    setTimeout(() => {
      setContador((contadorActual) => contadorActual + 1);
    }, 500);
  }, []);

  return (
    <div>
      <h1>Valor: {contador}</h1>
    </div>
  );
}

export default App;
