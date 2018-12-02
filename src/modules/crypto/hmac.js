'use strict';

const crypto = require('crypto');
const fs = require('fs');

const secret = 'secret';
const hmac = crypto.createHmac('sha256', secret);
