require.config({
  	paths: {
		jquery: 'lib/jquery/jquery-1.8.3.min',
		underscore: 'lib/underscore/underscore-min',
		backbone: 'lib/backbone/backbone-min',
		text: 'lib/require/text',
		meny: 'lib/meny/meny',
	},
	shim: {
		'underscore': {
			'exports': '_'
		},
		'backbone': {
	     	'deps': ['underscore', 'jquery'],
	        	'exports': 'Backbone'  
		}
	}
});

require([
	'router',
	'backbone'
], function(Router, Backbone) {
	var router = new Router();
	Backbone.history.start();
});