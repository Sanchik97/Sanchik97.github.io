$(window).scroll(function(){$(".price-block:nth-child(1)").each(function(){$(this).offset().top<$(window).scrollTop()+600&&$(this).addClass("fadeInLeft")})}),$(window).scroll(function(){$(".price-block:nth-child(3)").each(function(){$(this).offset().top<$(window).scrollTop()+600&&$(this).addClass("fadeInRight")})});