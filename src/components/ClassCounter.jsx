import React from "react";н
// устаревшее кароче но мб тоже пригодится
class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }

    Increment(){
        this.setState({count: this.state.count + 1})
    }
    Decrement(){
        this.setState({count: this.state.count - 1})
    }

    render() {
    return(
        <div>
            <h1 className="countzag">{this.state.count}</h1>
            <button onClick={this.Increment}> +1 </button>
            <button onClick={this.Decrement}> -1 </button>
        </div>
    )
    }
}

export default ClassCounter