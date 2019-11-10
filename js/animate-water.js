var homepage = $('#homePage'),
    error    = $('.error');
try {
    homepage.ripples({
        resolution : 500,
        dropRadius : 20,
        perturbance : 0.04,
        imageUrl	: 'https://images.unsplash.com/photo-1504480848728-5b43fa9ad455?ixlib=rb-0.3.5&s=dd6899b840780137dd772da9a9421126&auto=format&fit=crop&w=1048&q=80',
 //imageUrl : 'https://www.wallpapermania.eu/images/lthumbs/2016-08/9045_Sunrises-under-the-water-Wonderful-summer-wallpaper.jpg',
    }); 
    homepage.ripples('play');    
    homepage.ripples('updateSize');
}
catch (e) {
    error.show().text(e);
}