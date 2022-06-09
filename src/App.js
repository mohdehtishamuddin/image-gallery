import './App.css';
import Product from './component/Product';
function App() {
  return (
    <div>
      <Product
       img="./image/basketball.png"
       name="Product101"
       price='$150'/>
       <Product
       img="./image/football.png"
       name="Product102"
       price='$120'/>
       <Product
       img="./image/soccer.png"
       name="Product103"
       price='$90'/>
       <Product
       img="./image/table-tennis.png"
       name="Product104"
       price='$110'/>
       <Product
       img="./image/tennis.png"
       name="Product105"
       price='$80'/>
       
    </div>
  );
}

export default App;
