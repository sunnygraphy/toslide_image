function is_mobile()
   {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                   
                 return true;
                   
      }
      
      if (typeof window.orientation !== 'undefined') 
      {
          return true;
      }
      
      var iOSios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if(iOSios)
       return true;
       
      return false;    
            
   }