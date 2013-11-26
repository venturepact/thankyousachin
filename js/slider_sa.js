// JavaScript Document
var images=new Array('img/1g.png','img/2g.png','img/3g.png','img/4g.png','img/5g.png','img/6g.png','img/7g.png','img/8g.png','img/9g.png','img/10g.png','img/11g.png');
var nextimage=0;

doSlideshow();

function doSlideshow()
{
    if($('.slideshowimage').length!=0)
    {
        $('.slideshowimage').fadeOut(1300,function(){slideshowFadeIn();$(this).remove()});
    }
    else
    {
        slideshowFadeIn();
    }
}
function slideshowFadeIn()
{
    $('.slideshow').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(1500,function(){setTimeout(doSlideshow,1500);}));
    if(nextimage>=images.length)
        nextimage=0;
}