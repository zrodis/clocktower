import React from 'react';
import ClockTower from './components/ClockTower'
import OutputContainer from './components/OutputContainer'
import TowerContainer from './components/TowerContainer'
import dingCounter from './utils/dingCounter'
import {TIME_STR_VALID, validateTimes} from './utils/timeValidation'
import './styles/App.css';

class App extends React.Component {

  state = {
    towerTimes:[":", ":"],
    dingCount: '',
  }

  validateClockTowers = (inputTime, id) => {
    if( validateTimes([inputTime])){
      this.setState( (prevState) => {
        let newTimes = [...prevState.towerTimes]
            newTimes[id] = inputTime
        return {
          towerTimes: newTimes
        }
      }, () => {
        validateTimes(this.state.towerTimes) &&
          this.setState({ dingCount: dingCounter(this.state.towerTimes) })
      })
    } else{
      this.setState({ dingCount: '' })
    }
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
            return (<React.Fragment key={inx}>

                <TowerContainer currentTime={this.state.towerTimes[inx]}>
                  <ClockTower id={inx}
                    defaultTime={this.state.towerTimes[inx]}
                    validateClockTowers={this.validateClockTowers}
                  />
                </TowerContainer>

            </React.Fragment>)
          })}

        </div>
      </div>
    );
  }
}

export default App;
