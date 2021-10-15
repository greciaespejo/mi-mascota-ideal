import './App.css';
import Mascotas from './components/Mascotas'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListaDePerros from './components/ListaDePerros';

function App() {
  return (
    <div className="App">

      {/* COMPONENTE DE FUNCION */}
      {/* <ComponenteDeFuncion nombre="Mundo" edad={26}/> */}

      {/* COMPONENTE DE CLASE */}
      {/* <ComponenteDeClase nombre="Universo"/> */}

      <div className="App-header">
      <h2>BIENVENIDO A TU MASCOTA IDEAL</h2>
      <br/>
        <Router>
          <Switch>
            <Route exact path="/" component={Mascotas}/>
            <Route exact path="/ListaDePerros" component={ListaDePerros}/>
          </Switch>
        </Router> 
      </div>

      {/* Agregar Componente Donar que me permita ingresar una donacion de dinero
      luego, tiene que aparecer un alert con el monto de donacion que hice
      y que, abajo se vea un span con el total recaudado de donaciones  */}
    </div>
  );
}

export default App;
