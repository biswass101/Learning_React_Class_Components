import { Component } from "react";
// ***** first constructor method will be called and then render ******
class OldCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 0,
        }
    }

  render() {
    const { name } = this.props
    return (
      <>
        <h1>{name}</h1>
        <div className="counter-container flex gap-4 items-center mt-6">
          <button
            className="bg-blue-300 px-4 py-1 rounded"
            onClick={() => this.setState({count: this.state.count - 1})}
          >
            -
          </button>
          <h2>{this.state.count}</h2>
          <button
            className="bg-blue-300 px-4 py-1 rounded"
            onClick={() => this.setState({count: this.state.count + 1})}
          >
            +
          </button>
        </div>

        <div className="counter-container2 flex gap-4 items-center mt-6">
          <button
            className="bg-blue-300 px-4 py-1 rounded"
            onClick={() => this.setState({count2: this.state.count2 - 1})}
          >
            -
          </button>
          <h2>{this.state.count2}</h2>
          <button
            className="bg-blue-300 px-4 py-1 rounded"
            onClick={() => this.setState({count2: this.state.count2 + 1})}
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
