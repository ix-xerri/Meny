define([
	'jquery',
	'underscore',
 	'backbone'
], function($, _, Backbone){
	var TweetsCollection = Backbone.Collection.extend({
 		url: function () {
      		return 'http://search.twitter.com/search.json?q=' + this.query + '&page=' + this.page + '&callback=?'
    	},
    	parse: function(resp, xhr) {
      		return resp.results;
		},
    	page: 1,
    	query: 'everest'
	});

	return TweetsCollection;
});