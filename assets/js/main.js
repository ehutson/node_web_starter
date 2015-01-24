var myModule = (function(jQuery) {
  
  var myPrivateMethod = function(a, b) {
    console.log("adding " + a + " and " + b);
    return a + b;
  };

  return {
    init: function() {
      console.log("myModule::init");
    },
    add: function(a, b) {
       console.log(myPrivateMethod(a, b));
    }
  };

})(jQuery);


myModule.init();
myModule.add(1,2);

