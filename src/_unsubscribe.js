import {eventEmmiter} from './event-emmiter.js';
/**
* @function off
* @since 1.0.1
* @param {string} event_name - event-name that registerd before 
* @version 1.0.0
*/
const off = function(event_name){
    delete this.events[event_name];
}.bind(eventEmmiter);



export {off};