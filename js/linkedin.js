(function($){
    
    
    var sharecountfb = [];
  
  function ajaxGetFacebookCurrentCount(url, index)
  {
//    // check if it exists already as an answer
//    for(i=0;i<sharecountfb.length;i++){
//        if(sharecountfb[i].url === url){
//          addShareCountToLink("facebook",sharecountfb[i].count , index);  
//          return;
//        }
//    }
   
    fburl = "https://www.linkedin.com/countserv/count/share?format=json&url="+url;
    $.ajax({
      dataType: "json",
      url : fburl,
      success: 
        function( result ) {
          totalshares = 0;
          for(var url in result) {                                   
            if(result[url].total_count !== undefined && parseInt(result[url].total_count) !== totalshares){
                totalshares = totalshares + parseInt(result[url].total_count);
            }
          }           
//          obj = {"url":url,"count":totalshares}
//          sharecountfb.push(obj);
          addShareCountToLink("facebook",totalshares , index);
      }                       
    });                   
  } 
  
  if($(".show-count .net-facebook").length){ 
    $(".show-count .net-facebook").each(function(index){
      if(!$(this).closest("div").hasClass("dont-show-count")){
          url = $(this).attr("data-link");
          ajaxGetFacebookCurrentCount(url, index);                                      
      }  
    }); 
  }
  
  
    
    
    
})(jQuery);