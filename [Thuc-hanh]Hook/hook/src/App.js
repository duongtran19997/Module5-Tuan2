import './App.css';
import ComponentCounter from "./component/ComponentCounter";
import Counter from "./component/useState";
import Select from "./component/useEffect";
import Clock from "./component/hookCustom";
import SelectCar from "./component/carOption";
import CountDown from "./component/countDown";

function App() {
    return (
        <div className="App">
            <Counter/>
            <Select/>
            <Clock/>
            <SelectCar/>
            <CountDown/>
            <ComponentCounter/>
        </div>
    );
}

export default App;
