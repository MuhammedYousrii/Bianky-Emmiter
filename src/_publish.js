import {eventEmmiter} from './event-emmiter.js';

const emit = function(event_name , ...argu){
    let x = 0 ;
    this.events[event_name].forEach(function(func) {
        func(argu[x]);
        x++
    }, this);
}.bind(eventEmmiter);


export {emit};