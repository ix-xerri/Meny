define([
	'jquery',
 	'underscore',
	'backbone',
	'collections/twitter',
  	'text!templates/twitter.html'
], function($, _, Backbone, TwitterCollection, TwitterTemplate){
	var TwitterView = Backbone.View.extend({
    	initialize: function () {
      		this.isLoading = false;
      		this.twitterCollection = new TwitterCollection();
      		this.twitterCollection.query = 'football';
    	},
    
		render: function () {
	    	this.loadResults();
	    	return this;
	    },
	    
	    loadResults: function () {
	    	var that = this;
	      	
	      	this.twitterCollection.fetch({ 
	        	success: function (tweets) {
	          		$(that.el).append(_.template(TwitterTemplate, {tweets: tweets.models, _:_}));
	        	}
	     	});      
	    }
	});
  	
  	return TwitterView;
});