//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; // ES6

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

// class App extends React.Component(){
//     constructor(){
//         super();
//         this.state ={time:new Date()};
//     }
// }


function FCounter(prop){
    return (<div className = "bigCounter block bg-color:black">
        <div className = "calendar"><img src="data:image/png;base64,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"/></div>
        <div className = "four">{prop.digitFour % 10}</div>
        <div className = "three">{prop.digitThree % 10}</div>
        <div className = "two">{prop.digitTwo % 10}</div>
        <div className = "one">{prop.digitOne % 10}</div>
    </div>);

}

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter ++;
    ReactDOM.render(
        <FCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>,
        document.querySelector('#app')
        );
 }, 1000);


FCounter().propTypes = {
  digitOne: PropTypes.number,
  digitTwo: PropTypes.number,
  digitThree: PropTypes.number,
  digitFour: PropTypes.number
};
