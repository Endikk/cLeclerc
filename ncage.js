(function() {
	//cLeclerc 
	var main = function($) { 
		
		var self = $.cLeclerc = new function(){};
		
		$.extend(self, {
			cLeclercImgs : [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Charles_Leclerc_2022_S%C3%A3o_Paulo_Grand_Prix_%2852498120773%29_%28cropped%29.jpg/220px-Charles_Leclerc_2022_S%C3%A3o_Paulo_Grand_Prix_%2852498120773%29_%28cropped%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Charles_Leclerc_2019_%28cropped%29.jpg/220px-Charles_Leclerc_2019_%28cropped%29.jpg',
			'https://cdn-1.motorsport.com/images/amp/Y99JQRbY/s6/charles-leclerc-ferrari-1.jpg',
			'https://cdn-1.motorsport.com/images/mgl/YMdyVRx0/s8/charles-leclerc-ferrari-on-the-1.jpg',
			'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Md9KpWOTJUkMHSlRE3UrqZwWYT-hCt7Wxw&usqp=CAU',
			'https://e0.365dm.com/23/08/2048x1152/skysports-charles-leclerc-ferrari_6258190.jpg',
			'https://hips.hearstapps.com/hmg-prod/images/charles-leclerc-of-monaco-driving-the-scuderia-ferrari-sf-23-news-photo-1683495330.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2019_Formula_One_tests_Barcelona%2C_Leclerc_%2847251966381%29.jpg/1200px-2019_Formula_One_tests_Barcelona%2C_Leclerc_%2847251966381%29.jpg',
			'https://static.independent.co.uk/2022/09/11/17/GettyImages-1418851482.jpg',
			'https://photo-assets.formula1.com/content/dam/fom-website/manual/Misc/2023manual/2023Races/AustralianGP/Saturday/GettyImages-1476538696.jpg',
			'https://cdn-1.motorsport.com/images/mgl/2y3n5rn0/s8/charles-leclerc-ferrari-1.jpg',
			'https://cdn-1.motorsport.com/images/amp/YMdwjmK0/s1000/charles-leclerc-ferrari-f1-75-.jpg',
			'https://cdn-1.motorsport.com/images/mgl/Y99dN3XY/s8/charles-leclerc-ferrari-sf-23-.jpg',
			'https://cdn-1.motorsport.com/images/amp/0L1nwAg2/s1000/charles-leclerc-ferrari-sf-23-.jpg',
			'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NDcxMDUzOTMwNDkyNzc1/leclerc-p.jpg',
			'https://cdn-1.motorsport.com/images/amp/6VRWXKA0/s1000/charles-leclerc-ferrari-sf-23-.jpg',
			'https://media.formula1.com/image/upload/f_auto/q_auto/v1683237779/fom-website/2023/Races/Miami%20Grand%20Prix/Thursday/FORMULA_1_MIAMI_GRAND_PRIX_PRESENTED_BY_CRYPTO.COM_Race.jpg',
			'https://static.independent.co.uk/2023/05/30/15/Monaco-Grand-Prix-Auto-Ra-20.jpg',
			'https://cdn-1.motorsport.com/images/amp/YXRrELm0/s1000/charles-leclerc-ferrari-sf-23-.jpg',
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
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();

