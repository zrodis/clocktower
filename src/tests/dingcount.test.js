import React from 'react';
import ReactDOM from 'react-dom';

import dingCounter from '../utils/dingCounter'


it('calculates tower dings correctly', () => {
  const div = document.createElement('div');

  //original tests
  expect(dingCounter(["02:00", "3:00"])).toEqual(5)
  expect(dingCounter(["14:00", "15:00"])).toEqual(5)
  expect(dingCounter(["14:23", "15:42"])).toEqual(3)
  expect(dingCounter(["23:00", "1:00"])).toEqual(24)
  //my tests
  expect(dingCounter(["12:00", "12:00"])).toEqual(168)
  expect(dingCounter(["12:01", "12:59"])).toEqual(0)
  expect(dingCounter(["12:00", "12:10"])).toEqual(12)

  ReactDOM.unmountComponentAtNode(div);
});
