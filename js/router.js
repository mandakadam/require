define(['backbone','views'], function(Backbone, Views){
	
	var appRouter = Backbone.Router.extend({
		routes:{
			'': 'homeRoute',
			'home': 'homeRoute',
			'about': 'aboutRoute',
			'services': 'servicesRoute'
		},
		homeRoute: function(){
			var homeView = new Views.HomeView();
			$('#content').html(homeView.el)
		},
		aboutRoute: function(){
			var aboutView = new Views.AboutView();
			$('#content').html(aboutView.el)
		},
		servicesRoute: function(){
			var servicesView = new Views.ServicesView();
			$('#content').html(servicesView.el)
		}
	});
	
	return appRouter;
});
