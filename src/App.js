import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { useState } from 'react';
import { DISHES } from './share/dishes';


function App() {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
