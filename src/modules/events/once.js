'use strict';

const EventEmitter = require('events');

class Man extends EventEmitter {}

const man = new Man();

man.on('wakeup', () => {
  console.log('man has woken up');
});
man.once('wakeup', () => {
  console.log('man has woken up once');
});

man.emit('wakeup');
man.emit('wakeup');
