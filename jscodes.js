$(document).ready(function(){$("a[href='#top']").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1})}),$(window).load(function(){$(".ty-loader").fadeOut("slow")}),function(t){t.fn.viewportChecker=function(o){var e={classToAdd:"visible",offset:100,callbackFunction:function(t){}};t.extend(e,o);var i=this,a=t(window).height();this.checkElements=function(){var o=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")?"body":"html",s=t(o).scrollTop(),n=s+a;i.each(function(){var o=t(this);if(!o.hasClass(e.classToAdd)){var i=Math.round(o.offset().top)+e.offset,a=i+o.height();n>i&&a>s&&(o.addClass(e.classToAdd),e.callbackFunction(o))}})},t(window).scroll(this.checkElements),this.checkElements(),t(window).resize(function(t){a=t.currentTarget.innerHeight})}}(jQuery),jQuery(document).ready(function(){jQuery(".ty4-sintro-box").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated swing",offset:100}),jQuery(".ty4-ofc-box").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated rollIn",offset:100}),jQuery(".ty-offers-pages:not(.ty-designoffers,.ty-supportoffers)").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated flipInX",offset:100}),jQuery(".tybnks-table").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated rollIn",offset:100}),jQuery(".tyofp-column").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated rollIn",offset:100}),jQuery(".ty2-ourclient").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated bounceInLeft",offset:100}),jQuery(".ty2-stats").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated bounceInUp",offset:100}),jQuery(".ty5-febaco-box").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated wobble",offset:100}),jQuery(".ty2-oneoffer").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated lightSpeedIn",offset:100}),jQuery(".ty2-paypic").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated flipInX",offset:100}),jQuery(".ty4-tofoo-contact").addClass("ty-hidden").viewportChecker({classToAdd:"ty-visible animated tada",offset:100})}),$(document).ready(function(){$("body").prepend('<a href="#top" class="ty0-backtotop"><i class="fa fa-angle-up"></i></a>');var t;$(window).load(function(){t=$("html").detach()});var o=300;$(window).scroll(function(){$(window).scrollTop()>o?$(".ty0-backtotop").fadeIn("slow"):$(".ty0-backtotop").fadeOut("slow")})}),$(document).ready(function(){$(".ty0-backtotop").click(function(){return $("html, body").animate({scrollTop:0},700),!1})}),$(document).ready(function(){$(".ty6-thlgotx-adrs a,.ty4-onofco-butt a,.tyclicon-slide,.ty5-seinbo-icon,.ty3-paypic-cont img,.ty5-febaco-box,.ty5-tofooco-adrs i,.ty6-tfcc-phone,.ty5-obt-list li,.ty4-slide-icon i,.ty4-onofco-icon,.ty4-onofco-txt div,.ty5-thlgo-img").hover(function(){$(this).stop().animate({opacity:"0.70",opacity:"0.7",filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0.7)",filter:"alpha(opacity=70)","-ms-filter":"alpha(opacity=70)","-moz-opacity":"0.70","-khtml-opacity":"0.70"},"fast")},function(){$(this).stop().animate({opacity:"1.00",opacity:"1.0",filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=1.0)",filter:"alpha(opacity=100)","-ms-filter":"alpha(opacity=100)","-moz-opacity":"1.00","-khtml-opacity":"1.00"},"fast")})}),$(document).ready(function(){$(".ty4-tophead-menu li").hover(function(){$(this).addClass("selected"),$(this).find("ol:first").slideDown()},function(){$(this).removeClass("selected"),$(this).find("ol.ty6-thmu-slide").hide()}),$(".ty6-thmu-slide li").hover(function(){$(this).find("ol:first").show("slide",{direction:"right"},1e4)},function(){$(this).find("ol").hide()})}),$(document).ready(function(){$(".ty5-thsmlics-memarea > a").click(function(){$(".ty6-memac-members,.ty6-memac-guests").is(":visible")?$(".ty1-all-content > *:not(.ty2-top-header),.ty3-top-header-cont > *:not(.ty4-th-smallicons),.ty4-th-smallicons > *:not(.ty5-thsmlics-memarea)").animate({opacity:"1.00",opacity:"1.0",filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=1.0)",filter:"alpha(opacity=100)","-ms-filter":"alpha(opacity=100)","-moz-opacity":"1.00","-khtml-opacity":"1.00"},"fast"):$(".ty1-all-content > *:not(.ty2-top-header),.ty2-top-header:after,.ty3-top-header-cont > *:not(.ty4-th-smallicons),.ty4-th-smallicons > *:not(.ty5-thsmlics-memarea)").animate({opacity:"0.30",opacity:"0.3",filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0.3)",filter:"alpha(opacity=30)","-ms-filter":"alpha(opacity=30)","-moz-opacity":"0.30","-khtml-opacity":"0.30"},"fast"),$(".ty6-memac-members,.ty6-memac-guests").slideToggle()})}),$(document).ready(function(){$(".ty5-thsmlics-socarea > a").click(function(){$(".ty3-hdnrc-socicons").is(":visible")?$(".ty1-all-content > *:not(.ty2-top-header),.ty3-top-header-cont > *:not(.ty4-th-smallicons),.ty4-th-smallicons > *:not(.ty5-thsmlics-socarea)").animate({opacity:"1.00",opacity:"1.0",filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=1.0)",filter:"alpha(opacity=100)","-ms-filter":"alpha(opacity=100)","-moz-opacity":"1.00","-khtml-opacity":"1.00"},"fast"):$(".ty1-all-content > *:not(.ty2-top-header),.ty3-top-header-cont > *:not(.ty4-th-smallicons),.ty4-th-smallicons > *:not(.ty5-thsmlics-socarea)").animate({opacity:"0.30",opacity:"0.3",filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0.3)",filter:"alpha(opacity=30)","-ms-filter":"alpha(opacity=30)","-moz-opacity":"0.30","-khtml-opacity":"0.30"},"fast"),$(".ty3-hdnrc-socicons").slideToggle()})}),$(document).ready(function(){$(".ty3-hdnrc-socicons li").hover(function(){$(this).addClass("selected"),$(this).find("ol:first").slideDown()},function(){$(this).removeClass("selected"),$(this).find("ol.ty5-hdnrcso-slide").hide()}),$(".ty5-hdnrcso-slide li").hover(function(){$(this).find("ol:first").show("slide",{direction:"right"},1e4)},function(){$(this).find("ol").hide()})}),$(document).ready(function(){$(".ty5-thsmlics-searcharea > a").click(function(){$(".ty5-thsrch-box").is(":visible")?$(".ty1-all-content > *:not(.ty2-top-header),.ty3-top-header-cont > *:not(.ty4-th-smallicons),.ty4-th-smallicons > *:not(.ty5-thsmlics-searcharea)").animate({opacity:"1.00",opacity:"1.0",filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=1.0)",filter:"alpha(opacity=100)","-ms-filter":"alpha(opacity=100)","-moz-opacity":"1.00","-khtml-opacity":"1.00"},"fast"):$(".ty1-all-content > *:not(.ty2-top-header),.ty3-top-header-cont > *:not(.ty4-th-smallicons),.ty4-th-smallicons > *:not(.ty5-thsmlics-searcharea)").animate({opacity:"0.30",opacity:"0.3",filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0.3)",filter:"alpha(opacity=30)","-ms-filter":"alpha(opacity=30)","-moz-opacity":"0.30","-khtml-opacity":"0.30"},"fast"),$(".ty5-thsrch-box").slideToggle()})}),$(window).load(function(){$(".h-slider").fractionSlider({fullWidth:!0,controls:!0,pager:!0,responsive:!0,dimensions:"1200,318",increase:!1,pauseOnHover:!1,slideEndAnimation:!0})}),$(document).ready(function(){jQuery(function(t){function o(){var o,e,i;for(o=t("#carousel").rcarousel("getTotalPages"),e=0;o>e;e++)i=t("<a href='#'></a>"),t(i).bind("click",{page:e},function(o){t("#carousel").rcarousel("goToPage",o.data.page),o.preventDefault()}).addClass("bullet off").appendTo("#pages");t("a:eq(0)","#pages").removeClass("off").addClass("on").addClass("bullet-js-on")}function e(o,e){t("a.on","#pages").removeClass("on").removeClass("bullet-js-on"),t("a","#pages").eq(e.page).addClass("on").addClass("bullet-js-on")}t(".lb_gallery").rlightbox(),t("#carousel").rcarousel({visible:4,step:4,speed:700,auto:{enabled:!0},width:230,height:80,start:o,pageLoaded:e}),t("#ui-carousel-next").add("#ui-carousel-prev").add(".bullet").hover(function(){t(this).css("opacity",.7)},function(){t(this).css("opacity",1)})})}),$(document).ready(function(){$(".ty6-tfcc-soc li").hover(function(){$(this).addClass("selected"),$(this).find("ol:first").slideDown()},function(){$(this).removeClass("selected"),$(this).find("ol.ty8-tfccsi-slide").hide()}),$(".ty8-tfccsi-slide li").hover(function(){$(this).find("ol:first").show("slide",{direction:"right"},1e4)},function(){$(this).find("ol").hide()})});
