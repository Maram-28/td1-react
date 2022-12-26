import React from "react";
import Icone from "./Icone";
import App from "../App";
class Pictogramme extends React.Component {
  render() {
    return (
      <div>
        {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
        <Icone />
        <hr />
        <div>
          <button
            onClick={this.Changement}
            type="button"
            class="btn no-outline btn-secondary"
          >
            <i
              class="fa fa-thumbs-o-up fa-4 align-middle"
              aria-hidden="true"
            ></i>
            &nbsp;
            <span class="align-middle">J'aime</span>
          </button>
        </div>
      </div>
    );
  }
}
export default Pictogramme;
