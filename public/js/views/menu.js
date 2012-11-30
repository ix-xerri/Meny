define([
	'backbone',
	'meny',
	'text!templates/menu.html'
],

function(Backbone, Meny, MenuTemplate) {
	var MenuView = Backbone.View.extend({
		
		template: _.template(MenuTemplate),
		render: function(){
			$(this.el).html(this.template());
			
			return this;
		}
	});
	
	return MenuView;
});