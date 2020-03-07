$(document).ready(function () {


    $('#showmore').click(function (e) { 
        $('.more-benefits').addClass('more-benefits-new')
     });
     $('#close').click(function (e) { 
         $('.more-benefits').removeClass('more-benefits-new')
     });




    $('.month').click(function (e) {
        $(this).css('color', 'white');
        $('.yearly').css('color', '#686868');
        $('header .plan-duration').removeClass('plan-duration-new');
        $('.plan .duration').html('/month');
        var one = +$('.plan-basic .price span').html();
        var two = +$('.plan-plus .price span').html();
        var three = +$('.plan-premium .price span').html();
        var animate1 = setInterval(() => {
            one-=9
            if (one<14){clearInterval(animate1)}
            else $('.plan-basic .price span').html(one);
        },80);

        var animate2 = setInterval(() => {
            two-=50
            if (two<74){clearInterval(animate2)}
            else $('.plan-plus .price span').html(two);
        },80);
        var animate3 = setInterval(() => {
            three-=75
            if (three<140){clearInterval(animate3)}
            else $('.plan-premium .price span').html(three);
        }, 80);
    });


    $('.yearly').click(function (e) {
        $(this).css('color', 'white');
        $('.month').css('color', '#686868');
        $('header .plan-duration').addClass('plan-duration-new');
        $('.plan .duration').html('/year');

        var one = +$('.plan-basic .price span').html();
        var two = +$('.plan-plus .price span').html();
        var three = +$('.plan-premium .price span').html();
        var animate1 = setInterval(() => {
            one+=9
            if (one>140){clearInterval(animate1)}
            else $('.plan-basic .price span').html(one);
        },80);

        var animate2 = setInterval(() => {
            two+=100
            if (two>774){clearInterval(animate2)}
            else $('.plan-plus .price span').html(two);
        },80);
        var animate3 = setInterval(() => {
            three+=100
            if (three>1540){clearInterval(animate3)}
            else $('.plan-premium .price span').html(three);
        }, 80);

    });
}); 
 