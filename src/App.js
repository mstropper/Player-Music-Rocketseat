import Player1 from "./components/Player-1";
import Player2 from "./components/Player-2";
import Player3 from "./components/Player-3";
import './app.css'

function App() {
  return (
    <div className="background">
      <Player1/>
        <div className="align">
          <Player2/>
          <Player3/>
        </div>
    </div>
  )
}

export default App;
