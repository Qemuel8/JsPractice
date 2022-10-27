import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
            </div>

            <div className="col-3">
              <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-1"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-1"
                disabled={this.props.counter.value === 0 ? true : false}
              >
                -
              </button>
              <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-1"
              >
                x
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  buttonDisable() {
    let disabled = true;
    return disabled;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
