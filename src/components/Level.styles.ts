import styled from 'styled-components';

export const LevelSelect= styled.div`
  position: relative;
  display: flex;
  width: 5em;
  height: 1.5em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: .25em;


/* Arrow */

/* Transition */
&:hover::after {
  color: #f39c12;
}


>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}

`

// ::after {
//   content: '\25BC';
//   position: absolute;
//   top: 0;
//   right: 0;
//   padding: 0 1em;
//   background: #34495e;
//   cursor: pointer;
//   pointer-events: none;
//   -webkit-transition: .25s all ease;
//   -o-transition: .25s all ease;
//   transition: .25s all ease;
// }