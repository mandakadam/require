require.config({
	paths: {
		jquery: '../node_modules/jquery/dist/jquery.min',
		bootstrap: '../node_modules/bootstrap/dist/js/bootstrap.min',
		underscore: '../node_modules/underscore/underscore-min',
		backbone: '../node_modules/backbone/backbone-min'
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