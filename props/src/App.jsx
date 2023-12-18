import './App.css';
import pic from "./images/elephant.jpeg"
import Image from "./components/DataComponent"

function App() {
  return (
    <div>
      <h1>Kalvium Gallery 2.0</h1>
      <div className='images'>
        <Image img ={pic} />
        <Image img ={pic} />
        <Image img ={pic} />
        <Image img ={pic} />
      </div>
    </div>
  );
};


export default App;
