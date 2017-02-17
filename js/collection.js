define(['backbone'], function(Backbone){

	var appCl = appCl || {};

	appCl.ServiceModel = Backbone.Model.extend({
		default: {
			name: 'My Service',
			price: 200,
			checked:false
		},
		toggleCheck: function(){
			this.set('checked', !this.get('checked'));
		}
	});

	appCl.ServicesCollection = Backbone.Collection.extend({
		model: appCl.ServiceModel,
		getChecked: function(){
			return this.where({checked:true});
		}
	});

	appCl.serviceObj = new appCl.ServicesCollection([
		new appCl.ServiceModel({name: 'Web', price: 200, checked:true}),
		new appCl.ServiceModel({name: 'Graphic', price: 150, checked:true}),
		new appCl.ServiceModel({name: 'Social Media', price: 100, checked:false}),
	]);
	return appCl;
});