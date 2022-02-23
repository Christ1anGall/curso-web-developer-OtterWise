import { ThemeProvider } from "./components/context/theme-context";
import ExemploUseState from "./components/UseState";
import ExemploUseEffect from "./components/UseEffect";
import ExercicioHooks from "./components/ExercicioHooks";
import ExemploUseRef from "./components/UseRef";
import ExemploMemoECallback from "./components/MemoeCallback";
import ExemploUseReducer from "./components/UseReducer";

import Exerciciodas21 from "./components/ExercicioDas21"

function App() {
  return (
    <ThemeProvider>
      {/*<ExemploUseState />}
      {<ExemploUseEffect userId={2} />}
      
      {<ExemploUseRef />}
  {<ExemploMemoECallback />*/}
      {/*<ExemploUseReducer />*/}

      
      {<ExercicioHooks />}
      {<Exerciciodas21 />}
    </ThemeProvider>
  );
}

export default App;