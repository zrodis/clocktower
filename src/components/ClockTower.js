import React from "react";
import { timeValidation } from '../utils/timeValidation'
import '../styles/ClockTower.css'


class ClockTower extends React.Component {

  state = {
    timeStr: '00:00',
    inputIsValid: true,
  }

  handleChange = (evt) => {
    let timeInput = timeValidation(evt.target.value)
    let timeValid = timeInput.match(/(^[012]\d:[0-5]\d$) | (^\d:[0-5]\d$)/) ? true : false;

    this.setState({
      timeStr: timeInput,
      inputIsValid: timeValid,
    })
  }

  componentDidMount(){
    this.setState({
      timeStr:this.props.defaultTime
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.timeStr !== this.state.timeStr) {
      this.props.validateClockTowers(this.state.timeStr, this.props.id)
    }
  }

  render() {
    return(
      <div className="ClockTower">
        <div className="clockInputWrapper">
          <input
            className="clockInput"
            type="text"
            pattern="[0-9]*"
            maxLength="5"
            autoFocus
            value={this.state.timeStr}
            onChange={this.handleChange}
          />
        </div>

      </div>
    )
  }

}

export default ClockTower
