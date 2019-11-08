import React from "react";
import ImageRender from "./ImageRender";
import tarots from "./imageSeed.json";

tarots.forEach(tarot => {
  tarot.image = "./img/" + tarot.image;
})

function shuffle(array) {
  console.log(array);
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


class TheGame extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    message: "Click to Begin!",
    tarots,
    unclickedIds: []
  };

  imgClick = (id) => {
    if (!this.state.unclickedIds.includes(id)) {

      this.state.unclickedIds.push(id);
      this.setState({
        score: this.state.score + 1,
        message: "Good! Keep it going!"
      });
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 });
      }
    }
    else {
      this.setState({
        score: 0,
        message: "You chose poorly...",
        unclickedIds: []
      });
    }
  };

  buttonShuffle = () => {
    shuffle(this.state.tarots);
    return (
      this.state.tarots.map(tarot => (
        <div className="col text-center">
          <ImageRender
            key={tarot.id}
            id={tarot.id}
            image={tarot.image}
            imgClick={this.imgClick}
          />
        </div>
      )));
  };

  render() {
    return (
      <div>
        <div className="container-fluid scoreboard">
          <div className="container">
            <div className="row">
              <div className="col-4 current-score"><p>Current Score: {this.state.score}</p></div>
              <div className="col-4 instructions"><p>{this.state.message}</p></div>
              <div className="col-4 high-score"><p>High Score: {this.state.highScore}</p></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.buttonShuffle()}
          </div>
        </div>
      </div>
    );
  }
}

export default TheGame;