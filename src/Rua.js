import React, { Component } from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>hot</p>;
    }
    return <p>cool</p>;
}
const scalName = {
    c: 'fg',
    f: 'xg'
}
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' }
    }
    handleChange(e) {
        this.setState({ temperature: e.target.value })
    }
    render() {
        const temperature = this.state.temperature;
        const scal = this.props.scal;
        return (<div>
            <legend>输入温度{scalName[scal]}</legend>

            <input
                value={temperature}
                onChange={this.handleChange}
            />
            <BoilingVerdict
                celsius={parseFloat(temperature)}
            />
        </div>

        )
    }
}
class Calculator extends Component {

    render() {

        return (
            <div>
                <TemperatureInput scal='c'/>
                <TemperatureInput scal='f'/>
            </div>
        )
    }
}
export default Calculator;