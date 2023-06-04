export default `

body{
  display: block;
  background-color: var(--poprevBlack);
  margin: 0;
  padding: 0;
  z-index: 999999999999999999;
}
#globalLoader{
  position: fixed;
  z-index: 1700;
  top: 0;
  left: 0;
  background-color: var(--poprevBlack);
  display: flex;
  left: 0,
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
}

.loader {
  width: 6em;
  height: 6em;
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader .face {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: animate023845 3s linear infinite;
}

.loader .face:nth-child(1) {
  width: 100%;
  height: 100%;
  color: gold;
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.2em 0.2em 0em 0em;
  --deg: -45deg;
  animation-direction: normal;
}

.loader .face:nth-child(2) {
  width: 70%;
  height: 70%;
  color: lime;
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.2em 0em 0em 0.2em;
  --deg: -135deg;
  animation-direction: reverse;
}

.loader .face .circle {
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;
}

.loader .face .circle::before {
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  content: '';
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em,
                0 0 4em,
                0 0 6em,
                0 0 8em,
                0 0 10em,
                0 0 0 0.5em rgba(255, 255, 0, 0.1);
}

@keyframes animate023845 {
  to {
    transform: rotate(1turn);
  }
}
`;
