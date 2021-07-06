
$(window).resize(function(){
    if($(window).width() > 550){                  
        $(".dropping_menu").css("display","none")
    }
    $("#searching_input").hide();
    $(".language_drop_down").hide();
    $(".drop_down").hide();

})

// Click to scroll to top
$(".scroll_to_top").click(function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})
// Dasacucakner Drop Down
$(".dasyntacner").click(function(){
    $(".drop_down").toggle()
    $("#searching_input").hide()
    $(".language_drop_down").hide()
    $(".drop_down_arrow").toggle()
})


let dropped_down_dasyntac = 0
$(".dasyntacner_drop_menu").click(function(){
    if(!dropped_down_dasyntac){
        $(".drop_down_menu").slideDown("slow");
        $("#moving_arrow").css({transform:"rotate(180deg)"})
        dropped_down_dasyntac = 1
    }else{
        $(".drop_down_menu").slideUp("slow")
        $("#moving_arrow").css({transform:"rotate(360deg)"})
        dropped_down_dasyntac = 0
    }
})


// Search Input Apearing
$(".search_icon").click(function(){
    $("#searching_input").toggle()
    $(".language_drop_down").hide()
    $(".drop_down").hide()
    if($(".drop_down_arrow").css('display') != "block"){
        $(".drop_down_arrow").toggle()
    }

})
//Language Drop Down
$(".language_icon").click(function(){
    $(".language_drop_down").toggle()
    $(".drop_down").hide()
    $("#searching_input").hide()
    if($(".drop_down_arrow").css('display') != "block"){
        $(".drop_down_arrow").toggle()
    }
})
// Chosing Language
function changing_language(thisone){
    if($('.current_language').attr("src") != $(thisone).attr('src')){
        $('.current_language').attr("src",$(thisone).attr('src'))
    }
    $(".language_drop_down").toggle()
}






///////////////////////////////// QUESTION CHANGING ALGORITM//////////////////////////////

if($(window).width() > 600){
    let count = 1
    $(".answer_container").click(function(){
        $("#box" + (count - 1)).animate({
            left:"-50%"
        },"3s");
        $("#box" + count).css("display","block");
        $("#box" + count).animate({
            top:"35%",
            opacity:"1"
        },"slow");
        count++;
    })
}else{
    let count = 1
    $(".answer_container").click(function(){
        $("#box" + (count - 1)).animate({
            left:"-100%"
        },"3s");
        $("#box" + count).css("display","block");
        $("#box" + count).animate({
            top:"20%",
            opacity:"1"
        },"slow");
        count++;
    })
}


///////////////////////////////// QUESTION CHANGING ALGORITM//////////////////////////////
if($(window).width() > 600){
    $(".naxord_container").click(function(){
        $("#box" + (count - 2)).animate({
            left:"0%"
        },"3s");
        $("#box" + (count - 1)).animate({top:"55%",},"3s");
        $("#box" + (count - 1)).css("display","none");
        count--;
    })
}else{
    $(".naxord_container").click(function(){
        $("#box" + (count - 2)).animate({
            left:"7%"
        },"3s");
        $("#box" + (count - 1)).animate({top:"55%",},"3s");
        $("#box" + (count - 1)).css("display","none");
        count--;
    })
}





//Droping Hambourger div
let menu_droped = 0
$(".mobile_menu").click(function(){
    if(!menu_droped){
        $(".dropping_menu").slideDown("slow")
        menu_droped = 1
    }else{
        $(".dropping_menu").slideUp("slow")
        menu_droped = 0

    }
})
