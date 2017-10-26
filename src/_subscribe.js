import {binder} from './_binder.js'; 
import {eventEmmiter} from './event-emmiter.js';
const on = function (event_name , event_handler , handler_type , callback){
    if(this.events.hasOwnProperty(event_name)){
        this.binder(event_name , event_handler , handler_type);
        return callback({ stat : 'done' , note :'Event Regstierd Before ,, but We Assign handler to it anyWay'});
    }
    this.events[event_name] = [];     
    this.binder(event_name , event_handler , handler_type);
    return callback({stat : 'done' , note :  null})        
}.bind(eventEmmiter);


export {on};