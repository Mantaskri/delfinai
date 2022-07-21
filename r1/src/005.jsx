import './App.css';
import Divider from './components/005/Divider';
import DogsLowerC from './components/005/DogsLowerC';
import Dogs from './components/005/Dogs';
import DogsRound from './components/005/DogsRound';
import DogsSize from './components/005/DogsSize';
import DogsSq from './components/005/DogsSq';
import Labas from './components/005/Labas';
import OneProps from './components/005/OneProps';
import TreeProps from './components/005/TreeProps';
import Texts from './components/005/Texts';
import Zebrai from './components/005/Zebrai';
import rand from './Functions/rand';
;

// const ms = { color: 'red', backgroundColor: 'white', padding: '20px'} 

const home1 = 'basic'
const home2 = 'list'

const txt1 = 'some blah'
const txt2 = 'some blah blah'

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
const kvadratas = {marginTop: '20px', width: "150px", minHeight: '150px', border: '2px solid white', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}
const apsktitimas = {marginTop: '20px', width: "200px", minHeight: '200px', border: '2px solid white', borderRadius: '50%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}

function App() { // privaloma komponento pavadinima rasyti is didziosios raides!; rekomendacija deti komponentus i atskirus tuo paciu pavadinimu!; komponentas privalo grazinti html;
  return (
    <div className="App">
      <header className="App-header">
        <Divider name={home1} nr='1'/>
        <Labas/>
        <Divider name={home1} nr='2'/>
        <OneProps text={'Bet koks tekstas'}/>
        <Divider name={home1} nr='3'/>
        <Zebrai colnr={rand(1,2)}/>
        <Divider name={home1} nr='4'/>
        <Texts t1={txt1} t2={txt2}/>
        <Divider name={home1} nr='5'/>
        <TreeProps t1={txt1} t2={txt2} col='yellow'/>
        {/* <Kosmosas spalva='pink'/>
        <Kosmosas manoStilius = {ms}/> */}
        <Divider name={home2} nr='1'/>
        {
          dogs.map((n,i) => <DogsSq key={i} name={n} stilius={kvadratas}></DogsSq>)
        }
        <Divider name={home2} nr='2'/>
        {
          [...dogs].sort((a,b) => b.length-a.length).map((n,i) => <DogsRound key={i+1} name={n} stilius={apsktitimas} nr={i+1}></DogsRound>)
        }
        <Divider name={home2} nr='3'/>
        {
          dogs.map((n,i) => <Dogs key={i} name={n} kv1={kvadratas} rn1={apsktitimas} nr={i}></Dogs>)
        }
        <Divider name={home2} nr='4'/>
        {
          dogs.map((n,i) => <DogsLowerC key={i} name={n}/>)
        }
        <Divider name={home2} nr='5'/>
        {
          dogs.map((n,i) => <DogsSize key={i} name={n}/>)
        }
      </header>
    </div>
  );
}
//<Kosmosas spalva='pink'/> atributai gali buti surasyti per tarpa pvz <Kosmosas spalva='pink' padding = '40px'/>

export default App;