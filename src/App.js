import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Pictogramme from "./Composants/Pictogramme";
import Commentaire from "./Composants/Commentaire";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Bonne découverte des composants React Components!!!",
    };
  }
  Changement = () => {
    this.setState({
      msg: "Premier defi reussi",
    });
  };
  render() {
    return (
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-block">
            <div class="row">
              <div class="col-2">
                <img
                  src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"
                  class="rounded float-left"
                  id="img-thumbnail"
                  width="80"
                  height="70"
                />
              </div>
              <div class="col-10 profile-row">
                <div class="row">
                  <a href="#">
                    <h1> Débuter avec React </h1>
                  </a>
                </div>
              </div>
            </div>

            <p>{this.state.msg}</p>

            <div>
              <Pictogramme />
            </div>
          </div>

          <div class="card-footer text-muted">
            <Commentaire />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
