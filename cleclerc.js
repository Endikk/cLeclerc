(function() {
    //cLeclerc 
    var main = function($) { 
        var self = $.cLeclerc = new function(){};
        
        $.extend(self, {
            cLeclercImgs : [],
            loadImages: function() {
                // Liste des extensions d'images courantes
                const extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
                
                // Créer les URL des images depuis le dossier images/all
                // Cette fonction est appelée après avoir déterminé les fichiers disponibles
                function createImageUrls(fileNames) {
                    return fileNames.map(fileName => chrome.runtime.getURL(`images/all/${fileName}`));
                }
                
                // Pour Manifest V3, nous devons prédéfinir une liste d'images
                // car nous ne pouvons pas scanner dynamiquement un répertoire
                // Vous devez adapter cette liste avec vos propres noms de fichiers
                const predefinedImages = [
                    'leclerc1.jpg',
                    'leclerc2.jpg',
                    'leclerc3.jpg',
                    'leclerc4.jpg',
                    'leclerc5.jpg',
					'leclerc6.jpg',
					'leclerc7.jpg',
					'leclerc8.jpg',
					'leclerc9.jpg',
					'leclerc10.jpg',
					'leclerc11.jpg',
					'leclerc12.jpg',
					'leclerc13.jpg',
					'leclerc14.jpg',
					'leclerc15.jpg',
					'leclerc16.jpg',
					'leclerc17.jpg',
					'leclerc18.jpg',
					'leclerc19.jpg',
					'leclerc20.jpg',
                    // Ajoutez tous les noms de fichiers que vous avez dans images/all
                ];
                
                self.cLeclercImgs = createImageUrls(predefinedImages);
            },
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
            self.loadImages(); // Charger les images
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

