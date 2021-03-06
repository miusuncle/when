/** @license MIT License (c) copyright 2010-2014 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function(require) {

//	require('../../monitor/console');
	var Promise = require('../../when').Promise;

	Promise.resolve(123)
		.then(function(x) {
//			throw x;
			throw new Error(x);
//			return Promise.reject(x);
//			foo();
//			throw new TypeError(x);
		})
//		.then(void 0, function() { console.log(123);})
		.done(console.log);

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));


