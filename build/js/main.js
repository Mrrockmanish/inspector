"use strict";$(document).ready(function(){var e;(e=document.getElementById("range-slider"))&&noUiSlider.create(e,{start:[0,500],connect:!0,range:{min:0,max:500}}),$(".left-panel").on("click",".left-panel__open",function(){$(this).closest(".left-panel").addClass("open"),$(this).hide(),$(this).next(".left-panel__close").show(),$(".top-panel__logo").hide(),$(".top-panel__logo-full").show()}),$(".left-panel").on("click",".left-panel__close",function(){$(this).closest(".left-panel").removeClass("open"),$(this).hide(),$(this).prev(".left-panel__open").show(),$(".top-panel__logo-full").hide(),$(".top-panel__logo").show()}),$(".lists-block-tools").on("click",".lists-block-tools__tool:not(.active)",function(){$(this).closest(".lists-block-tools").find(".lists-block-tools__tool.active").removeClass("active"),$(this).addClass("active")}),$(".top-panel-exit").on("click",function(){$(".lists-block").toggleClass("hidden"),$(this).toggleClass("close"),$(this).find("svg").toggleClass("text-blue")}),$(".tooltip").tooltipster({animation:"fade",delay:100}),$(".filter-drop").on("click",".filter-drop__title",function(){$(this).next(".filter-drop__content").slideToggle(),$(this).find(".filter-drop__dropdown").toggleClass("close")}),$('input[type="file"]').change(function(){var e=$(this).val().split("\\").pop(),t=$(this).closest(".upload-item");e?(t.find(".upload-item__file-icon").removeClass("text-b9").addClass("text-green"),t.find(".upload-item__download-icon").hide(),t.find(".upload-item__clear-icon").show()):(t.find(".upload-item__file-icon").removeClass("text-green").addClass("text-b9"),t.find(".upload-item__download-icon").show(),t.find(".upload-item__clear-icon").hide()),e?t.find(".upload-item__file-name").text(e):t.find(".upload-item__file-name").text("Загрузить файл")}),$(".info-fields__item").on("click",function(){$(this).closest(".info-fields").fadeOut()}),$(".information-dots").on("click",function(){var t=$(".information-dots"),o=$(".information-dots").find(".info-fields");o.hasClass("show")?o.fadeOut().removeClass("show"):o.fadeIn().addClass("show"),$(document).mouseup(function(e){o.hasClass("show")&&!t.is(e.target)&&0===t.has(e.target).length&&t.find(".info-fields").fadeOut().removeClass("show")})}),$(".connections-circle").each(function(e){var t=$(this),o=t.offset().left,i=t.offset().top,l=t.parent().prev().prev(),s=l.offset().left,n=l.offset().top,a=t.parent().next().next(),f=a.offset().left,c=a.offset().top,d=o-s-l.outerWidth()+32,r=i-n,p=f-o-t.outerWidth()+32,h=i-c;t.find(".circle-arrow-left").css({width:d}),t.find(".circle-arrow-left__vertical").css({height:r}),t.find(".circle-arrow-right").css({width:p}),t.find(".circle-arrow-right__vertical").css({height:h})})});