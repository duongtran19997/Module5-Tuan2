import ButtonClick from "./component/clickAddDecrease";
import ChangeBackground from "./component/changeBackgroundColor";
import './App.css';
import MountElement from "./component/unmountElement";
import LoginLogout from "./component/login&logout";
import CRUDstudent from "./component/CRUDstudent";

function App() {
    return (
        <div className="App">
            <ButtonClick/>
            <ChangeBackground/>
            <MountElement/>
            <LoginLogout/>
            <CRUDstudent/>
        </div>
    );
}

export default App;
