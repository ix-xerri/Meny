define([
	'jquery',
 	'underscore',
	'backbone',
	'collections/twitter',
	'views/tweet',
  	'text!templates/twitter.html'
], function($, _, Backbone, TwitterCollection, TweetView, TwitterTemplate){
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
	        		$(that.el).append(that.template({title: title}));
	        		_.each(tweets.models, function (tweet) {
	        			var tweetView = new TweetView({model: tweet})
	        			
	        			tweetView.on('renderJson', that.displayJson);
	        			
       		            $('ul.tweets').append(tweetView.render().el);
       		        }, this);
	        	}
	     	});      
	    },
	    
	    displayTitle: function(){
	    	var title = this.options.query
	    	return title.charAt(0).toUpperCase() + title.slice(1);
	    },
	    
	    displayJson: function(model){
	    	var $json = $('.json');
	    	$json.removeAttr('style');
	    	$json.html(JSON.stringify(model.toJSON(), null, 4));
	    }
	});
  	
  	return TwitterView;
});