'use strict';

const EventEmitter = require('events');

class Man extends EventEmitter {}

const man = new Man();

man.on('wakeup', () => {
  console.log('man has woken up');
});

man.emit('wakeup');
