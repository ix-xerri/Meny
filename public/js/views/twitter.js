define([
	'jquery',
 	'underscore',
	'backbone',
	'collections/twitter',
  	'text!templates/twitter.html'
], function($, _, Backbone, TwitterCollection, TwitterTemplate){
	var TwitterView = Backbone.View.extend({
		template: _.template(TwitterTemplate),
    	initialize: function () {
      		this.isLoading = false;
      		this.twitterCollection = new TwitterCollection();
      		this.twitterCollection.query = this.options.query || 'sports';
    	},
    
		render: function () {
	    	this.loadResults();
	    	return this;
	    },
	    
	    loadResults: function () {
	    	var that = this;
	    	var title = this.displayTitle();
	      	
	      	this.twitterCollection.fetch({
	        	success: function (tweets) {
	          		$(that.el).append(that.template({title: title, tweets: tweets.models, _:_}));
	        	}
	     	});      
	    },
	    
	    displayTitle: function(){
	    	var title = this.options.query
	    	return title.charAt(0).toUpperCase() + title.slice(1);
	    }
	});
  	
  	return TwitterView;
});