(function() {
    //cLeclerc 
    var main = function($) { 
        var self = $.cLeclerc = new function(){};
        
        $.extend(self, {
            cLeclercImgs : [
            'https://ih1.redbubble.net/image.5212908017.4148/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
            'https://amp.nextgen-auto.com/IMG/logo/arton146049.jpg',
            'https://www.rds.ca/content/dam/rds/fr/home/images/2024/10/20/charles-leclerc-1-19395473-1729458525718.jpg',
			'https://media.ouest-france.fr/v1/pictures/MjAyMjA3ODBjZmMzODkwYTVlOTczNzBhOTc1MDhiYTBiMDlmY2U?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=e4263402acf439e921f2361c41668a2d707fa51ee633d450bf1e61cf32d30dbc',
			'https://www.lequipe.fr/_medias/img-photo-jpg/charles-leclerc/1500000000738487/0:22,1200:627-828-416-75/10ae9.jpg',
			'https://www.autohebdo.fr/app/uploads/2025/03/DPPI_00125005_1319-753x494.jpg',
			'https://static.wikia.nocookie.net/gp2/images/3/39/Charles_Leclerc.jpg/revision/latest?cb=20180904105319',
			'https://sportal.fr/wp-content/uploads/2023/08/leclerc_12192881190x786.jpg',
			'https://www.leparisien.fr/resizer/YG3olxuahszxlJdOoZ9KooxF42Y=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/G5ALGZNGOZG47F4BNB3CMFVAC4.jpg',
			'https://s.yimg.com/ny/api/res/1.2/Osa2UziBMHB3vRZKRD7JqA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTE0NDE-/https://media.zenfs.com/en/the_manual_309/2355fa3f3d42356d9479315e22e004c8',
			'https://pbs.twimg.com/media/FlaP9TMXkAg51Rz.jpg',
			'https://i.pinimg.com/564x/6d/73/29/6d73292fbcb4a38bd0c71fafcf3fec60.jpg',
			'https://media.tenor.com/F2qHlbWqdu0AAAAe/charles-leclerc-f1.png',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoJtRe_CdgJEHGeu0aySwFYLijq9eql1BIA&s',
			'https://www.sport.fr/wp-content/uploads/2019/03/charles-leclerc-insatisfait-de-sa-cinquieme-place-sur-la-grille.jpg',
			'https://i.pinimg.com/736x/a4/29/5d/a4295de4bccf390502981f4cc4770e5e.jpg',
			'https://www.grandprix247.com/wp-content/uploads/2019/04/leclerc.jpg',
			'https://sportsbase.io/images/gpfans/copy_620x348/b5a7f2e6995976f4166e077cac0ec94ae4c5e53c.jpg',
			'https://media.tenor.com/D0w06EbuF7EAAAAe/charles-leclerc-formula-1.png',
			'https://64.media.tumblr.com/d4a8b82f49955fd1feb58222940c5c24/06d44c13837e3919-74/s1280x1920/7f074abec03f2b56692600e97cb48ac47dc328e7.jpg',
            ],
            handleImages : function (lstImgs, time)
            {
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

        //Run on jQuery ready
        $(function(){
            self.handleImages(self.cLeclercImgs, 3000);
        });
    };

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 
		  'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
		  jQuery.noConflict();
		  main(jQuery);
		});
	  }else {
		main(jQuery);
	}
})();

