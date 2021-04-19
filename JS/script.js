$(document).ready(function () {

 $(".click1").click(function() {
    $(".hide1").toggle();
    $(".show1").toggle();
  });
 $(".click2").click(function() {
    $(".hide2").toggle();
    $(".show2").toggle();
  });
 $(".click3").click(function(){
    $(".hide3").toggle();
    $(".show3").toggle();
  });
})
$(document).ready(function(){
    $("#mzone").mouseover(function(){
      $("#mzone1").show();
    }).mouseout(function(){
      $("#mzone1").hide();
    });
    $("#yellow").mouseover(function(){
      $("#yellow1").show();
    }).mouseout(function(){
      $("#yellow1").hide();
    });
    $("#ontario").mouseover(function(){
      $("#ontario1").show();
    }).mouseout(function(){
      $("#ontario1").hide();
    });
    $("#grey").mouseover(function(){
      $("#grey1").show();
    }).mouseout(function(){
      $("#grey1").hide();
    });
    $("#socials").mouseover(function(){
      $("#socials1").show();
    }).mouseout(function(){
      $("#socials1").hide();
    });
    $("#forms").mouseover(function(){
      $("#forms1").show();
    }).mouseout(function(){
      $("#forms1").hide();
    });
    $("#burned").mouseover(function(){
      $("#burned1").show();
    }).mouseout(function(){
      $("#burned1").hide();
    });
    $("#giraffe").mouseover(function(){
      $("#giraffe1").show();
    }).mouseout(function(){
      $("#giraffe1").hide();
    });
});
$(document).ready(function(){
  $("form#contactUs").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});