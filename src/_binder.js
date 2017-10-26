import {eventEmmiter} from './event-emmiter.js';
/**
 * @function <binder>
 * @param {string} eventName - eventname you wanna register 
 * @param {funtion} eventHandler - handler for this event when fire
 * @param {string} handlerType - handler type if func or array or object
 * @return viod
 * @since 1.0.0
 */
const binder = function(eventName, eventHandler, handlerType) {
    if (typeof eventHandler == 'function') {
        this.events[eventName].push(eventHandler);
    }
    if (handlerType == "object") {
        for (var indexer in eventHandler) {
            if (eventHandler.hasOwnProperty(indexer)) {
                const handler = eventHandler[indexer];
                this.events[eventName].push(handler);
            }
        }
    }
    if (handlerType == "array") {
        for (let index = 0; index < eventHandler.length; index++) {
            let func = eventHandler[index];
            this.events[eventName].push(func);
        }
    }
}.bind(eventEmmiter);


export {binder};