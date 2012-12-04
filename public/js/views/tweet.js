define([
	'jquery',
 	'underscore',
	'backbone',
	'text!templates/tweet.html'
], function($, _, Backbone, TweetTemplate){
	var TweetView = Backbone.View.extend({ 
		tagName: 'li',
		className: 'clearfix',  
		template: _.template(TweetTemplate),	
    	events: {
    		'click li': 'onTweetClick'
    	},
    
		render: function () {
	    	$(this.el).html(this.template(this.model.toJSON()));
	    	return this;
	    },
	    
	    onTweetClick: function(){
	    	this.trigger('renderJson', this.model);
	    }
	});
  	
  	return TweetView;
});