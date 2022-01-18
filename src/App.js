import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Estado from './components/Estado'
import TarjetaFruta from './components/TarjetaFruta'
import ImagenesAleatorias from './components/ImagenesAleatorias'

const nombre = "Alberto";
const id = 23;
const meses = ["enero", "febrero", "marzo", "abril"];
const objeto = {correo: "alberto@gmail.com", nombre: "Alberto" };

function App() {
  return (
    <div className="App">
      {/* <Componente nombre={nombre} id={id} meses={meses} objeto={objeto} /> */}
      {/* <Estado /> */}
      <TarjetaFruta nombre="Fresa" precio={3.45}/>
      <ImagenesAleatorias nombre="Luisa" size="small" numero="5"/>
    </div>
  );
}

export default App;
