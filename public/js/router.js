define([
	'jquery',
	'underscore',
	'backbone',
	'meny',
	'views/menu',
	'views/index',
	'views/twitter'
], function ($, _, Backbone, Meny, MenuView, IndexView, TwitterView) {
  	var AppRouter = Backbone.Router.extend({
    	routes: {
    		'' : 'index',
    		'football': 'football',
    		'basketball': 'basketball',
    		'rugby': 'rugby',
      		'*error' : 'notFound'
    	},
    	
    	initialize:function(){
    		$('.meny').html(new MenuView().render().el);
    		
    		// Create an instance of Meny
			var meny = Meny.create({
				menuElement: document.querySelector( '.meny' ),
				contentsElement: document.querySelector( '.contents' ),
				position: 'left',
				height: 200,
				width: 260,
				threshold: 40
			});
    	},
    	
    	index: function(){
    		$('.contents').html(new IndexView().render().el);
    	},
    	
    	football: function(){
    		$('.contents').html(new TwitterView({query: "football"}).render().el);
    	},
    	
    	basketball: function(){
    		$('.contents').html(new TwitterView({query: "basketball"}).render().el);
    	},
    	
    	rugby: function(){
    		$('.contents').html(new TwitterView({query: "rugby"}).render().el);
    	},
    	
    	notFound: function(){
    		alert("Error, Not Found");
    	}
  	});
  
	return AppRouter;
});