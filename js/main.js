require.config({
	paths: {
		jquery: '../nodeModules/jquery/dist/jquery.min',
		bootstrap: '../nodeModules/bootstrap/dist/js/bootstrap.min',
		underscore: '../nodeModules/underscore/underscore-min',
		backbone: '../nodeModules/backbone/backbone-min'
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