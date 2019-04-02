$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    $(".response").hide();
    var luck =  $("input:checkbox[name=lucky]:checked").length;
    luck = parseInt(luck) - parseInt($("input:checkbox[name=unlucky]:checked").length);


    $('#transportation_survey').hide();

    if(luck <-1){
      $("#bluck").show();
    }else if(luck < 1){
      $("#nluck").show();
    }else{
      $("#gluck").show();
    }

  });
});

//-3 -2 | -1 0 | 1 2 3 4

var factorial = function (x){
  if(x <= 1){
    return 1;
  }else{
    return x + factorial(x-1);
  }
}

var pailindrome = function(str){
  var pal = true;
for(var i = 0; i > (str.len - str.len % 2)/2;i++){
  if(str[i] != str[str.len-i]){
    pal = false;
  }
}
  return pal;
}

var prime = function(x){

}
