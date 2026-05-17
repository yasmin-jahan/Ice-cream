$(document).ready(function () {

    
  // menu
  $(".hamburger").click(function () {
    $(".header_nav").addClass("header_mobile_nav_active")
    $(".black_overlay").fadeIn();
  });

  $(".close_btn").click(function () {
    $(".header_nav").removeClass("header_mobile_nav_active")
    $(".black_overlay").fadeOut();
  });

  $(".black_overlay").click(function () {
    $(".header_nav").removeClass('header_mobile_nav_active');
    $(".black_overlay").fadeOut();
  });
  //menu




    
$(document).ready(function () {
  $('.main_header_nav ul li:has(ul) > a').each(function () {
    $(this).append('<span class="mean-expand"> <i class="fa-solid fa-angle-down"></i></span>')
  });

  if ($(window).width() <= 991) {
    $(".main_header_nav ul li:has(ul) > a .mean-expand").on("click", function (e) {
      e.preventDefault();
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
        $(this).parent()
          .siblings("ul")
          .slideUp(200);
      } else {
        $(".main_header_nav ul li:has(ul) > a").removeClass("active");
        $(".main_header_nav li ul").slideUp(200);
        $(this).parent().addClass("active");
        $(this).parent()
          .siblings("ul")
          .slideDown(200);
      }
    });
  }
});

//card-match-height
function MatchHeight() {
    $('.card_text h4').matchHeight({});
  }
  MatchHeight(); 

  //experience-slider-match-height
function MatchHeight() {
    $('.experience_pagination_content h3 ').matchHeight({});
    $('.experience_pagination_content p ').matchHeight({});
  }
  MatchHeight();

  

  const sliderContent = [
  {
    title: "dive into pure joy",
    desc: "Swim in the millions of sprinkles in our world-famous Sprinkles pool."
  },

  {
    title: "sweet adventures await",
    desc: "Enjoy magical spaces filled with fun and creativity."
  },

  {
    title: "discover new flavors",
    desc: "Taste delicious ice creams inspired by global desserts."
  },

  {
    title: "play beyond imagination",
    desc: "Explore colorful interactive experiences for everyone."
  },

  {
    title: "create joyful memories",
    desc: "Capture unforgettable moments with friends and family."
  }
];

const title = document.querySelector(".experience_pagination_content h3");

const desc = document.querySelector(".experience_pagination_content p");

var swiper = new Swiper(".mySwiper", {

  loop: true,
  

  navigation: {
    nextEl: ".experience_next_btn",
    prevEl: ".experience_prev_btn",
  },

  pagination: {
    el: ".experience_pagination",
    clickable: true,
  },

  mousewheel: true,
  keyboard: true,

  on: {

    init: function () {

      title.innerText =
        sliderContent[this.realIndex].title;

      desc.innerText =
        sliderContent[this.realIndex].desc;
    },

    slideChange: function () {

      title.innerText =
        sliderContent[this.realIndex].title;

      desc.innerText =
        sliderContent[this.realIndex].desc;
    }
  }
});

    // reserve-section-match-height
function MatchHeight() {
     $('.ticket_small_title p').matchHeight({});
     $('.ticket_main_title h4').matchHeight({});
     $('.ticket_main_title p').matchHeight({});
     $('.ticket_price h5').matchHeight({});
    $('.ticket_listing ul').matchHeight({});
  }
  MatchHeight(); 
  

  //faq
  $(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('×');
        }
    });
});

});