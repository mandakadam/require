define(['backbone', 'collection'], function(Backbone, Collection){
	var appView = appView || {};

	appView.HomeView = Backbone.View.extend({
		template: '<h2>Home</h2>',
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template);
			this.$el.append('<div id="selectedService"></div>');
			
			var selectedService = '';

			_.each(Collection.serviceObj.getChecked(), function(obj){
				selectedService += '<button>' +obj.get('name')+ '</button> ' ;
			}, this);

			if(selectedService!=''){
			$('#selectedService', this.$el).html('Your selected Servive: ' +selectedService);
			}
		}
	}); 

	appView.AboutView = Backbone.View.extend({
		initialize: function(){
			 this.render();
		},
		render: function(){
			var self = this;
			$.get('about.html', function(data){
				var template =  _.template(data, {});
				self.$el.html(template);
				self.$el.after("<a href='#home'>Go to home</a>");
			}, 'html');
		}
	});

	appView.ServiceList  = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'toggleService'
	},
	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},
	render: function(){
		this.$el.html('<input type="checkbox" value="1" name="'+this.model.get('name')+'"/> '+this.model.get('name')+'<span> Rs. '+this.model.get('price')+'</span>');		
		this.$('input').prop('checked', this.model.get('checked'));		

		return this;
	},
	toggleService: function(){
		this.model.toggleCheck();
	}
	});

	appView.ServicesView = Backbone.View.extend({
		template: '<h2>My Services</h2>',
		initialize: function(){
			this.listenTo(Collection.serviceObj, 'change', this.render);
			this.$el.append(this.template);
			this.$el.append('<ul id="services"></ul><div id="total">Rs. <span>0</span></div>');	
			
			Collection.serviceObj.each(function(serv){
				this.subview = new appView.ServiceList({model: serv});
				$('#services', this.$el).append(this.subview.el);
			}, this);
			this.getTotal();
		},
		render: function(){
			this.getTotal();
			return this;
		},
		getTotal: function(){
			var total = 0;
			_.each(Collection.serviceObj.getChecked(), function(obj){
					total += obj.get('price');
			});
			$('#total', this.$el).text('Rs '+ total);
		}
	});


	return appView;

});