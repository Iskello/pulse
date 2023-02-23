$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
        responsive: [
            {
            breakpoint: 991,
            settings: {
                arrows: false,
                dots: true
                }
            },
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                dots: true
              }
            }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      
      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      // Modal
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
      });
      /* $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
      }); */
      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });


      /* $('#consultation form').validate({
        rules:{
          name: {
            required: true,
            minlength: 2
          },
          phone: {
            required: true,
            number: true
          },
          email: {
            required: true,
            minlength: 2,
            email: true
          }
        },
        messages: {
          name: {
            required: "Будь-ласка, введіть ім'я",
            minlength: jQuery.validator.format("Ім'я повинно містити мінімум {0} символи")
          },
          phone: {
            required: "Будь-ласка, введіть номер телефону",
            number: "Введіть актуальний номер"
          },
          email : {
            required: "Будь-ласка, введіть імейл",
            email: "Поштова адреса повинна бути у форматі name@domain.com"
          }
        }
      });

      $('#order form').validate();
      $('#consultation-form').validate(); */
      
      function validateForms(form) {
        $(form).validate({
          rules:{
            name: {
              required: true,
              minlength: 2
            },
            phone: {
              required: true
            },
            email: {
              required: true,
              minlength: 2,
              email: true
            }
          },
          messages: {
            name: {
              required: "Будь-ласка, введіть ім'я",
              minlength: jQuery.validator.format("Ім'я повинно містити мінімум {0} символи")
            },
            phone: {
              required: "Будь-ласка, введіть номер телефону"
            },
            email : {
              required: "Будь-ласка, введіть імейл",
              email: "Поштова адреса повинна бути у форматі name@domain.com"
            }
          }
        });
      };

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');

      $('input[name=phone]').mask("+38 (999) 999-99-99");
      
  });


  