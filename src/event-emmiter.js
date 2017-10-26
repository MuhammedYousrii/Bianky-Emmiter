import {on} from './_subscribe.js';
import {off} from './_unsubscribe';
import {emit} from './_publish.js';


/**
 * @class eventEmmiter
 * @author Muhammed Yousrii <muhammed.yuosry@gmail.com>
 * @version 1.0.1
 */

class eventEmmiter {
    constructor(){
        this.events  = {};
        this.subscribe = on ;
        this.unsubscribe = off ;
        this.publish = emit ;
    }
}


export {eventEmmiter};