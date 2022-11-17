import SuperHero from './../Superheroes_card/Superheroes_card.jsx';
import datas from "./../../data/data.json";
import './../../style/App.css';

function App() {
  return (
    <div className="App"> {
      datas.map((data) =>
        <SuperHero name={data.name} univers={data.univers} alter_ego={data.alter_ego} career={data.career} friend={data.friend} superpower={data.superpower} img={data.img} />
      )
    }
    </div>
  )
}
export default App;
