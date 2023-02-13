
  $(function(){

    $(window).scroll(function(){
      var scrolling = $(window).scrollTop();

      if(scrolling > 20){
        $('.header').addClass('manu-bg')
      }
      else{
        $('.header').removeClass('manu-bg')
      }
    })


    // banner slide
    $('.banner-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:'.previous',
      nextArrow:'.next',
      autoplay: true,
      autoplaySpeed: 2000,
    });
    // lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
   // service slide
    $('.service-slide').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical:true,
      prevArrow:'.ser-previous',
      nextArrow:'.ser-next',
    });

    // testimonial slide
    $('.test-item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.test-inner'
    });
    $('.test-inner').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.test-item',
      centerMode: true,
      focusOnSelect: true,
      vertical:true,
      centerPadding: '0',
      prevArrow:'.test-previous',
      nextArrow:'.test-next',
    });

  })