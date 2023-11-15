import * as React from "react";
import "./App.css";
import { InputInfo } from "./components/input-info.component";

function App() {
  const [value, setValue] = React.useState("");
  const [myNumber, setMyNumber] = React.useState(0);

  return (
    <div>
      <InputInfo
        value={myNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMyNumber(+e.target.value)
        }
        label="Campo numérico"
      />

      <InputInfo
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        label="El campo es obligatorio"
        type="password"
      />
    </div>
  );
}

export default App;
