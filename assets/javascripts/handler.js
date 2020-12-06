$(document).ready(function(){
  $('a[href^="http"]').each(function(){
    $(this).attr("target", "_blank")
    const rel = $(this).attr("rel")
    if( rel === undefined ){
      $(this).attr("rel", "noopener")
    }
    else{
      $(this).attr("rel", ["noopener", rel].join(" "))
    }
  });
})