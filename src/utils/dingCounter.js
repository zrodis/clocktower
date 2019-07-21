import {timeStrToObj} from './timeValidation'


function remainder12 (time){
  time = time % 12;
  return time === 0 ? 12 : time
}

let countWithRecursion = ( tower1, tower2,  dingCount, firstPass=true ) => {
  let nextTower1 = {
    ...tower1,
    hour: tower1.hour + 1,
  }

  if( !firstPass || tower1.min === 0 )
    dingCount = dingCount + remainder12(tower1.hour);

  if( nextTower1.hour > 23 )
    nextTower1.hour = 0

  const nextHourMatch = nextTower1.hour === tower2.hour
  const thisHourMatch = tower1.hour === tower2.hour
  const thisMinuteIsGreater = tower1.min >= tower2.min

  if( !nextHourMatch && (!thisHourMatch || thisMinuteIsGreater)){
    firstPass = false;
    return countWithRecursion(nextTower1, tower2,  dingCount, firstPass)
  }

  if(!thisHourMatch || thisMinuteIsGreater)
    dingCount = dingCount + remainder12(nextTower1.hour)

  return dingCount
}


function dingCounter(towerTimes) {
  let time0 = timeStrToObj(towerTimes[0])
  let time1 = timeStrToObj(towerTimes[1])
  let dingCount = countWithRecursion(time0, time1, 0)
  return dingCount
}


export default dingCounter
