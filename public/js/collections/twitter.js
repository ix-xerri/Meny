define([
	'jquery',
	'underscore',
 	'backbone',
 	'lib/twitterify/twitterify'
], function($, _, Backbone, twitterIfy){
	var TweetsCollection = Backbone.Collection.extend({
 		url: function () {
      		return 'http://search.twitter.com/search.json?q=' + this.query + '&page=' + this.page + '&callback=?'
    	},
    	
    	page: 1,
    	
    	parse: function(resp, xhr) {
    		var count = resp.results.length;
    		for (var i = 0; i < count; i++) {
    			resp.results[i].text = twitterIfy.clean(resp.results[i].text);
    		}
      		return resp.results;
		},
		
  	});

	return TweetsCollection;
});