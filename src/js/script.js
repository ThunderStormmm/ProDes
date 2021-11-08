import $ from 'jquery';
window.$ = window.jQuery = $;

import 'slick-slider';

$(document).ready(function(){

  $("a[href^='#up']").on('click', function(e){
    e.preventDefault();
    const _href = $(this).attr("href");
    console.log(_href);
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 2000);
    // $('.header').removeClass('m-sticky')
    // $('.header').addClass('m-normal')
    return false;
  });
    $('.carousel__inner').slick({   
        speed: 1500,
        adaptiveHeight: false,
        // autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron-right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false,
                arrows: false,
              }
            },
          ]
        });
      $('.js-catalog').on('click', 'li:not(.catalog__item-active)', function() {
      $(this)
        .addClass('catalog__item-active').siblings().removeClass('catalog__item-active')
        .closest('div.wrapper').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
    });
    $('.catalog-card__wrapper').on('click', function(e) {
      e.preventDefault();
      $(this)
        .toggleClass('m-active');
    });
           $('.catalog-card__link').each(function(i){
           $(this).on('click', function(e){
           e.preventDefault();
           $('.catalog-card__content').eq(i).toggleClass('catalog-card__content-active');
           $('.catalog-card__list').eq(i).toggleClass('catalog-card__list-active');  
         })
       });

           $('.catalog-card__back').each(function(i){
           $(this).on('click', function(e){
           e.preventDefault();
           $('.catalog-card__content').eq(i).toggleClass('catalog-card__content-active');
           $('.catalog-card__list').eq(i).toggleClass('catalog-card__list-active');  
         })
       });
      //  burger-menu
      $('.js-nav-button').on('click', function() {
        $('.js-nav').toggleClass('m-show');
      })
      //modal
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn(1000); 
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut(1000);
      });

      $('.overlay').on('click', function(event) {
        console.log(event.target)
        $('.overlay, #consultation, #order, #thanks').fadeOut(1000);
      });
      // $('.catalog-card__btn').on('click', function() {
      //   $('.overlay, #order').fadeIn(1000);
      // });
      $('.catalog-card__btn').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-card__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn(1000);
        });
      });
      function valideForms(form){
        $(form).validate({
          rules:{

            name: {
              required: true,
              minlength: 2
            },
            phon: "required",

            email: {
              required: true,
              email:true
            }
          },
          messages: {
            name: {
              required: "Будь, ласка введіть своє ім'я",
              minlength: jQuery.validator.format("Введіть {0} символів!")
            },
            phon: "Будь, ласка введіть свій номер телефону",
            email: {
              required: "Будь, ласка введіть свій поштовий адрес",
              email: "Не правильно введена пошта"
            }
          }
        });
      };

      valideForms("#consultation-form");
      valideForms("#consultation form");
      valideForms("#order form");

      $('form').submit(function(e) {
         e.preventDefault();
         $.ajax({
           type:"POST",
           url:"../send.php",
           data: $(this).serialize()
         }).done(function(){
          
           $(this).find("inpute").val("");

           $('form').trigger('reset');
         });
         return false;
       });


      $(window).scroll(function() {
        if ($(this).scrollTop() >1600) {
        $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }  
      });


      $(window).scroll(function() {
        if($(window).width() > 767) {
          if ($(this).scrollTop() < 100) {
            $('.header').removeClass('m-normal');
          } 
          else if ($(this).scrollTop() >300) {
          $('.header').addClass('m-sticky').removeClass('m-normal');
          } 
          else if ($(this).scrollTop() >100 && $(this).scrollTop() < 300 && $('.header').hasClass('m-sticky')){
            $('.header').removeClass('m-sticky').addClass('m-normal');
          } 
        }
      });


      $('.js-catalog').on('click', 'li:not(.header__item-active)', function() {
        $(this)
          .addClass('header__item-active').siblings().removeClass('header__item-active')
          .closest('div.wrapper').find('div.header__menu-content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
      });
      $('.catalog-card__wrapper').on('click', function(e) {
        e.preventDefault();
        $(this)
          .toggleClass('m-active');
      });
      // $(window).scroll(function() {
      //   if ($(this).scrollTop() >550) {
      //   $('.header__top-line').addClass('m-sticky').css('position', 'fixed');

      //   } else {
      //     $('.header__top-line').removeClass('m-sticky');
      //     setTimeout(function(){
      //       $('.header__top-line').css('position', 'static');
      //     },1000);
      //   }
      // });

   

      // animation
      // const benefitsList = document.querySelector('.js-benefits');
      // const benefitsItems = document.querySelectorAll('.js-benefits li');
      // console.log(benefitsList);
      // const benefitsListTop = benefitsList.getBoundingClientRect().top;
      // console.log(benefitsListTop);
      // document.addEventListener('scroll', getElementScrollTop);

      const animatedSections = document.querySelectorAll('.js-animated');
    if($('.js-animated').length) {
      for(let i = 0; i < animatedSections.length; i++) {
        let animatedElement = animatedSections[i];
        let animatedSectionTop = animatedSections[i].getBoundingClientRect().top;
        console.log(animatedSectionTop);
        document.addEventListener('scroll', () => getElementScrollTop(animatedElement, animatedSectionTop));
      }
    }
      
      

      function getElementScrollTop (element, elementTop) {
        if(elementTop < window.pageYOffset + 100) {
          
          element.classList.add('animated');
          console.log('done');
        } 
        else {
            element.classList.remove('animated');
        }
      }


      // function getElementScrollTop () {
      //   if(benefitsListTop < window.pageYOffset + 300) {
      //     for(let i = 0; i < benefitsItems.length; i++) {
      //       benefitsItems[i].classList.add('animated');
      //     }
      //     console.log('done');
      //   } else {
      //     for(let i = 0; i < benefitsItems.length; i++) {
      //       benefitsItems[i].classList.remove('animated');
      //     }
      //   }
      //   console.log(window.pageYOffset);
      // }
  });
  