import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  const msg = 'Aquí van a ir los productos destacados'

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={msg}>
        
      </ItemListContainer>
    </div>
  );
}

export default App;
