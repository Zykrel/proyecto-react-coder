import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ContadorPractica } from './components/Contador/ContadorPractica';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from './components/NavBar/NavBar';
import SobreNosotros from './SobreNosotros/SobreNosotros';
import Error from './components/ErrorNavegacion/Error';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    {/* {<ContadorPractica/>} */}
    <Routes>

    <Route path='/Proyecto-ReactJS-coderhouse/' element={ <ItemListContainer /> } />

    <Route path="/Proyecto-ReactJS-coderhouse/productos/:categoryId" element={ <ItemListContainer/> }/>

    <Route path='/detalles/:itemId' element={<ItemDetailContainer/>}/>  

    <Route path='/Proyecto-ReactJS-coderhouse/sobre-nosotros' element={<SobreNosotros />} />

    <Route path='*' element={ <Navigate to={'/Proyecto-ReactJS-coderhouse/'} />}/>

    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
