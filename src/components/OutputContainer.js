import React from "react";
import '../styles/OutputContainer.css';

const OutputContainer = (props) => {
  return(
    <div className="OutputContainer">
      <div className='textWrapper'>

        { (typeof props.dingCount !== 'number') ?
          <React.Fragment>
            <span className="guideText">Enter two times into the towers. 24hr, HH:MM format</span>
          </React.Fragment>
          :
          <React.Fragment>
            <span className="outputText">{'The clock will chime'}&nbsp;</span>
            <span className="largeHighlighText"> {props.dingCount}&nbsp;</span>
            <span className="outputText">{' time' + (props.dingCount === 1 ? '' : 's') + ' from ' + props.towerTimes[0] + ' to ' + props.towerTimes[1]}</span>
          </React.Fragment>
        }

      </div>
    </div>
  )
}



export default OutputContainer
