;(function($) {


  // var app = new Sammy.Application(function() { with(this) {
  //   // this == Sammy.Application
  //   
  //   get('#/', function() { with(this) {
  //     // this == Sammy.EventContext
  //     // tempate()
  //     // redirect()
  //     // partial()
  //     $('#app').text('Hello World!')
  //   }});
  // 
  //   // route(verb, path, callback)
  //   // post()
  //   // put()
  //   // bind()
  //   
  // }});


  var mine = new Sammy.Application(function() { with(this) {
    debug = true;
    
    // get('#/', function() { with(this) {
    //   $('#mine').text('Mine!');
    // }});
    

    get('#/', function() { with (this) {
      partial('templates/test.html.erb', function(html) {
        console.log(html);
        $('#test').html(html);
      });
    }});
    
    post('#/hello', function(){ with(this) {
      // params
      $('#mine').text(params['name']);
      console.log(params['name']);
    }});
  }});
  
  
  $(function() {
    // app.run('#/');
    // mine.addLogger(function(e, data) { $('#debug').append("x"); });
    
    mine.addLogger(function(e, data) {
      $('#debug').append([mine.toString(), mine.namespace, e.cleaned_type, data, '<br />'].join(' '));
    });
    
    mine.run('#/');
  });


})(jQuery);