import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
<Countries></Countries>
    </div>
  );
}
























// const Countries = () => {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return(
// <div>
//   {
//     countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//   }
//   <h1>This is world all countries : {countries.length}</h1>
// </div>
//   )
// }


// const Country = (props) =>{
//   return(
//     <div>
//       <h1>Country name: {props.name}</h1>
//       <p>{props.capital}</p>
//     </div>
//   )
// }

export default App;
