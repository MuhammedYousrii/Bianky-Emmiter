const expect = require('expect.js');
const {
    eventEmmiter
} = require('../src/modules/libs/event-emmiter.js');



describe('Event_emmiter binding process', () => {
    it('if enterd event is added before donot override itis handlres ', () => {
        let emmiter = new eventEmmiter();
        emmiter.on('event1', function () {
            console.log('handler1')
        }, 'func', emmiterResponse => expect(emmiterResponse.note).to.be(null));
        emmiter.on('event1', function () {
            console.log('handler1')
        }, 'func', emmiterResponse => {
            expect(emmiterResponse.note)
                .to
                .be('Event Regstierd Before ,, but We Assign handler to it anyWay')
        });
    })
})


describe('Event_emmiter Deleting Process' , ()=> {
    it('Should return Null When Search On Event i have deleted' , ()=> {
        let emmitertwo = new eventEmmiter();
        emmitertwo.on('eventone' ,
        function(){console.log('hello wrold')}, 
        'func',
        emmiterResponse => {
            expect(emmiterResponse.note).to.be(null)
        });

        emmitertwo.off('eventone');
        expect(emmitertwo.events['eventone']).to.be(undefined);
    })
}) 