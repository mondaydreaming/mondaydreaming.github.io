$(document).ready(function() {
  $('#fullpage').fullpage({
      //Navigation
      menu: false,
      anchors:['firstSlide', 'secondSlide','thirdSlide','fourthSlide'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
      showActiveTooltips: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      resize : false,
      sectionsColor : ['#ccc', '#fff','#ccc','#fff'],
      paddingTop: '3em',
      paddingBottom: '10px',
      fixedElements: '#header, .footer',
      responsive: 0,

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction){}
  });
  // $('.autoplay').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });
  // $('.single-item').slick();

  $('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});