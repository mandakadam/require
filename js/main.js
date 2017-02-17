require.config({
	paths: {
		jquery: '../lib/jquery/dist/jquery.min',
		bootstrap: '../lib/bootstrap/dist/js/bootstrap.min',
		underscore: '../lib/underscore/underscore-min',
		backbone: '../lib/backbone/backbone-min'
	},
	shim: {
		bootstrap:{
			deps: ['jquery']
		},
		underscore: {
			exports: '_'
		},
		backbone:{
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		}
	}
});

require(['backbone', 'router'], function(Backbone, Router){
	new Router();
	Backbone.history.start();
});