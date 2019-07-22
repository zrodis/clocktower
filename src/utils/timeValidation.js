const formatZeroString = (n) => n.toString().length === 1 ? "0" + n : n;
const limitTo = (n, l) => n > l ? l : n;
const TIME_STR_VALID = /(^[012]\d:[0-5]\d$)|(^\d:[0-5]\d$)/

function timeStrToObj (timeStr = "00:00") {
  let hour = parseInt(timeStr.split(":")[0])
  let min = parseInt(timeStr.split(":")[1])
  return {hour, min}
}

function restrictCharacters (timeInput) {
  timeInput = timeInput.replace(/[^0-9|:]/g, '')
  timeInput = timeInput.replace('::', ':')
  return timeInput
}

function placeColon (timeInput) {
  const colon = timeInput.search(':')
  if(colon >= 3 || (colon === -1 && timeInput.length >= 3) ) {
    timeInput = timeInput.replace(":", '')
    timeInput = timeInput.slice(0, 2) + ":" + timeInput.slice(2)
  }

  if(colon === 0 && timeInput.length >= 3) {
    timeInput = timeInput.slice(1, 2) + ":" + timeInput.slice(1)
  }
  if(colon > -1 && timeInput.length === 5){
    timeInput = timeInput.split(':').join('')
    timeInput = timeInput.slice(0,2) +':' + timeInput.slice(2)
  }
  return timeInput
}

function restrictLength (timeInput) {
  if(timeInput.length === 5 ){
    let hr = parseInt(timeInput.split(':')[0]) || 0
    let min = parseInt(timeInput.split(':')[1].slice(0, 2)) || 0

    hr = limitTo(hr, 23)
    hr = formatZeroString(hr)

    min = limitTo(min, 59)
    min = formatZeroString(min)

    timeInput = hr + ':' + min
  }
  return timeInput
}

function timeInputFormat (timeInput) {
  timeInput = restrictCharacters(timeInput)
  timeInput = placeColon (timeInput)
  timeInput = restrictLength(timeInput)
  return timeInput
}

function validateTimes(times){
  return times.every( (item) => item.match(TIME_STR_VALID))
}

export {
  timeStrToObj,
  timeInputFormat,
  TIME_STR_VALID,
  validateTimes
}
