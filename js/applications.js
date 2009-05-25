;(function($) {


  var app = new Sammy.Application(function() { with(this) {
    // this == Sammy.Application
    
    
    get('#/', function() { with(this) {
      // this == Sammy.EventContext
      // tempate()
      // redirect()
      // partial()
      $('#app').text('Hello World!')
    }});
  
    // route(verb, path, callback)
    // post()
    // put()
    // bind()
    
  }});


  var mine = new Sammy.Application(function() { with(this) {
    get('#/', function() { with(this) {
      $('#mine').text('Mine!');
    }});
    
    post('#/hello', function(){ with(this) {
      // params
      $('#mine').text(params['name']);
      console.log(params['name']);
    }});
  }});
  
  
  $(function() {
    app.run('#/');
    mine.run('#/');
  });


})(jQuery);