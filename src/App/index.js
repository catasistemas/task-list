import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
import "./App.css";

/* const defaultTodos = [
  { text: "Cortar Cebolla", completed: false},
  { text: "Comprar Cambures", completed: false},
  { text: "Traer el agua", completed: false},
  { text: "Bañar a los perros", completed: true},
  { text: "Participar en la entrevista", completed: false},
  { text: "Extraer oro", completed: false},
  { text: "Limpiar la cocina", completed: true}
] */


function App() {
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    );
}

export default App;

