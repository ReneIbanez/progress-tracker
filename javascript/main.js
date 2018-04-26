$("#react-button").on("click" ,function(){
  $(".php , .js, .python").hide();
    $(".react").show();
})

$("#php-button").on("click" ,function(){
  $(".react , .js, .python").hide();
  $(".php").show();
})

$("#js-button").on("click" ,function(){
  $(".react , .php, .python").hide();
  $(".js").show();
})

$("#python-button").on("click" ,function(){
  $(".react , .php, .js").hide();
  $(".python").show();
})

$("#all-button").on("click", function(){
  $(".project-section li").show()

})
