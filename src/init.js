$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    // console.log(dancers);
  });


  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.interact').on('click', function(event) {
    var min, current1, current2, dancer1, dancer2, top, left, distance;
    for (var i = 0; i < window.dancers.length; i++) {
      current1 = window.dancers[i];
      for (var j = 0; j < window.dancers.length; j++) {
        if (i !== j) {
          current2 = window.dancers[j];
          top = Math.abs(current1.top - current2.top);
          left = Math.abs(current1.left - current2.left);
          distance = Math.sqrt(Math.pow(top, 2) + Math.pow(left, 2));
          if (min === undefined || distance < min) {
            min = distance;
            dancer1 = current1;
            dancer2 = current2;
          }
        }
      }
    }

    var style1 = {
      top: '49%',
      left: '49%'
    };
    dancer1.$node.css(style1);
    var style2 = {
      top: '51%',
      left: '51%'
    };
    dancer2.$node.css(style2);
  });
      
});

