// Code DigitalClicker Component Here
import React from 'react' 

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    increase = () => {
        this.setState(previousState => {
            return { timesClicked: previousState.timesClicked + 1 }
        })
    }

    render() {
        return <button onClick={this.increase}>{this.state.timesClicked}</button>
    }
}

export default DigitalClicker