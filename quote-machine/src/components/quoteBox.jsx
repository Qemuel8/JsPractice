import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


class QuoteBox extends Component {
  state={
    quote: "",
  }
  renderQuotes() {
    return(
      <div id="background" className="">
        <p id="author">Lorem, ipsum.</p>
        <button id="new-quote" className="btn btn-danger">New Quote</button>
        <a href="www.twitter.com/share" id="tweet-quote" className="bi bi-twitter">tweet</a>
        
      </div>
     
    )
  }
  render() {
    return(
     <div>
      {this.renderQuotes()}
     </div>
    );
  
  }
}

export default QuoteBox;
