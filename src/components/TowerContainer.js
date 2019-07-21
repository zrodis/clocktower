import React from "react";

import getSkyColorFromTime from '../utils/getSkyColorFromTime'

import '../styles/TowerContainer.css'


class TowerContainer extends React.Component {

  state = {
    bgColor: 'rgb(110, 110, 241)'
  }

  changeTowerSky = () => {
    this.setState({
      bgColor: getSkyColorFromTime(this.props.currentTime)
    })
  }

  componentDidMount(){
    this.changeTowerSky()
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentTime !== this.props.currentTime){
      this.changeTowerSky()
    }
  }

  render(){
    return (
      <div className="TowerContainer">
        <div className="background"
          style={{background: this.state.bgColor}}
        ></div>
        <div className="foreground">
          {this.props.children}

        </div>

      </div>
    )
  }
}

export default TowerContainer
