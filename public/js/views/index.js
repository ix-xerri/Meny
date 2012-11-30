define([
	'backbone',
	'meny',
	'text!templates/index.html'
],

function(Backbone, Meny, IndexTemplate) {
	var IndexView = Backbone.View.extend({
		
		template: _.template(IndexTemplate),
		render: function(){
			$(this.el).html(this.template());
			
			return this;
		}
	});
	
	return IndexView;
});