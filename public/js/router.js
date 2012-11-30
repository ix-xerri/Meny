define([
  'jquery',
  'underscore',
  'backbone',
  'meny',
  'views/menu',
  'views/index'
], function ($, _, Backbone, Meny, MenuView, IndexView) {
  	var AppRouter = Backbone.Router.extend({
    	routes: {
    		'' : 'index',
    		'helloworld': 'helloWorld',
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
    	
    	helloWorld: function(){
    		alert("helloWorld");
    	},
    	
    	notFound: function(){
    		alert("Error, Not Found");
    	}
  	});
  
	return AppRouter;
});