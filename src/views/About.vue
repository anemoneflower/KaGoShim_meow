<template>
    <div id="fullpage">
        <section class="section">
        <div class="container">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
            <p class="text-center">Scroll down to trigger the animations</p>
            </div>
            </div>
        </div>
        </section>
        <section class="section second">
        <div class="container">
            <div class="row">
            <div class="col-sm-4 is-animated">
                <img class="img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nature.jpeg">
            </div>
            <div class="col-sm-4 is-animated">
                <img class="img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/people.png">
            </div>
            <div class="col-sm-4 is-animated">
                <img class="img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/tech.jpeg">
            </div>
            <div class="col-xs-12 text-center is-animated__single">
                <button type="button" class="btn btn-lg">A Simple Button</button>
            </div>
            </div><!--end of row-->
        </div><!--end of container-->
        </section>
        <section class="section third">
        <div class="container">
            <div class="row">
            <div class="col-sm-3 col-sm-offset-3 is-animated">
                <img class="img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/tech_(1).jpeg">
            </div>
            <div class="col-sm-3 is-animated">
                <img class="img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/any.jpeg">
            </div>
            <div class="col-xs-12 text-center is-animated__single">
                <button type="button" class="btn btn-lg">A Simple Button</button>
            </div>
            </div><!--end of row-->
        </div><!--end of container-->
        </section>
        <section class="section fourth">
        <div class="container">
            <div class="row">
            <div class="col-xs-12 is-animated">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <div class="col-xs-12 is-animated">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <div class="col-xs-12 text-center is-animated__single">
                <button type="button" class="btn btn-lg">Thank You!</button>
            </div>
            </div><!--end of row-->
        </div><!--end of container-->
        </section>
    </div>
</template>

<script>
import JQuery from 'jquery'
import VueFullPage from 'vue-fullpage.js'
let $ = JQuery
(function($) {
  
  'use strict';

  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');

  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: true,
    onLeave: function(index, nextIndex, direction) {
    
      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */
      
      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInUpBig'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }

    /**
      * use the following condition: 
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) from the first section to the third one 
      */
      
      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s'); 
        $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
        $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
      }

      
     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first or second section to the fourth one 
      */
      
      // third animation
      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
        $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
        $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        });
      }
    }

  });
  
})(jQuery);

</script>


<style lang="scss" scoped>

$main-color: #fff;
$highlight-color: #66bb6a;
$section-bgcolor__dark: #424242;
$section-bgcolor__light: #a5d6a7;

body {
  font: normal 2em/1.5em "Helvetica Neue", Arial, sans-serif;
  color: $main-color;
}

button.btn {
  margin-top: 40px;
  background: $highlight-color;
  border-radius: 4px;
}

section {
  &:nth-child(1) {
    background-color: $highlight-color;
  }
  &:nth-child(2), &:nth-child(4) {
    background-color: $section-bgcolor__dark;
  }
  &:nth-child(3) {
    background-color: $section-bgcolor__light;
  }
}

.fourth button {
  margin-top: 20px;
}

p {
  margin-bottom: 30px;
}

#fp-nav ul li a span {
  background: $main-color;
}

img {
  margin: 0 auto;
}

</style>
