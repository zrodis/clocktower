import React from 'react';
import ClockTower from './components/ClockTower'
import OutputContainer from './components/OutputContainer'
import TowerContainer from './components/TowerContainer'
import dingCounter from './utils/dingCounter'
import './styles/App.css';

class App extends React.Component {

  state = {
    towerTimes:["00:00", "12:00"],
    dingCount: 0,
  }

  validateClockTowers = (inputTime, id) => {
    const timeValid = inputTime.match(/(^[012]\d:[0-5]\d$)|(^\d:[0-5]\d$)/) ? true : false;

    if( timeValid ){
      this.setState( (prevState) => {
        let newTimes = [...prevState.towerTimes]
            newTimes[id] = inputTime
        return {
          towerTimes: newTimes
        }
      }, () => {
        this.setState({
          dingCount: dingCounter(this.state.towerTimes)
        })
      })
    } else{
      this.setState({ dingCount: '' })
    }
  }

  componentDidMount(){
    this.setState({
      dingCount: dingCounter(this.state.towerTimes)
    })
  }

  render() {
    return (
      <div className="App">
        <OutputContainer
          dingCount={this.state.dingCount}
          towerTimes={this.state.towerTimes}
        />
        <div className="mainContainer">
          {this.state.towerTimes.map( (time, inx) => {
            return (
              <React.Fragment key={inx}>
                <TowerContainer
                  currentTime={this.state.towerTimes[inx]}
                >
                  <ClockTower id={inx}
                    defaultTime={this.state.towerTimes[inx]}
                    validateClockTowers={this.validateClockTowers}
                  />
                </TowerContainer>
              </React.Fragment>
            )
          })}


        </div>


      </div>
    );
  }
}

export default App;
