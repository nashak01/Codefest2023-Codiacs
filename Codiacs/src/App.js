import LandingPage from './landing';
import Canvas from './canvas';
import './App.css';
import VolcanoApp from "./volcano-app/VolcanoApp";

function App() {
  return (
    <div className="App">
      <LandingPage></LandingPage>
      <Canvas></Canvas>
      <VolcanoApp />
    </div>
  );
}

export default App;
