
import {timeStrToObj} from './timeValidation'

function timeValueToLightRatio (time) {
  const fullTime = timeStrToObj(time)

  let hour = fullTime.hour
      hour = (hour > 12) ? Math.abs(hour - 24) : hour

  let lightRatio = hour / 12 + (fullTime.min / 600)

  return lightRatio
}

function getSkyColorFromTime (time) {

  const bgColorBright = [97, 144, 241] //rgb
  const bgColorDark = [5, 12, 30] //rgb
  let bgColorDiff = []

  let lightRatio = ((timeValueToLightRatio(time) - 0.5) * 2.5) + 0.5;
      lightRatio = (lightRatio > 1) ? 1 : lightRatio;
      lightRatio = (lightRatio < 0) ? 0 : lightRatio;

  for ( let i = 2; i >= 0; i--){
    bgColorDiff[i] = lightRatio * (bgColorBright[i] - bgColorDark[i])
    bgColorDiff[i] = Math.round(bgColorDiff[i] + bgColorDark[i])
  }

  // console.log('new color', bgColorDiff)
  return `rgba(${bgColorDiff[0]}, ${bgColorDiff[1]}, ${bgColorDiff[2]})`

}

export default getSkyColorFromTime
