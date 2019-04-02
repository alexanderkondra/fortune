$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    $(".response").hide();
    var sym = $("input:checkbox[name=stressS]:checked").length;
    var health = $("input:checkbox[name=stressH]:checked").length;
    var manage = $("input:checkbox[name=stressM]:checked").length;
    $('#transportation_survey').hide();
    if(sym + health >= 5 && manage >= 5){
      $("#managed").show();
    }else if(sym + health >=5){
      $("#stressed").show();
    }else{
      $("#notstressed").show();
    }

  });
});


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
