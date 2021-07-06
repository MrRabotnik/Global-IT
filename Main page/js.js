// Preloader
$(document).ready(function (){
	setTimeout(function(){$('.preloader').fadeOut();},1500)
})



$(window).resize(function(){
    if($(window).width() > 550){                  
        $(".dropping_menu").css("display","none")
    }
    // console.log(dropped_down_dasyntac)
    $("#searching_input").hide();
    $(".language_drop_down").hide();
    if($(".drop_down").css("display") != "none" ){
        $(".drop_down_arrow").css({transform:"rotate(360deg)"})
        // dropped_down_dasyntac = 0;
    }
    $(".drop_down").hide();
})


// Offnile Online checkbox checking
$(".offline_online_checkbox").click(function(){
    var attr = $(this).attr("src")
    if(attr != "Images/checkbox.png"){
        $(this).attr("src","Images/checkbox.png") 
        $(this).attr("width","9%")
    }else{
        $(this).attr("src","Images/checked.png")
        $(this).attr("width","12%")
    }
})

// Click to scroll to top
$(".scroll_to_top").click(function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})

// Dasacucakner Drop Down
let rotated_arrow = 0
$(".dasyntacner").click(function(){
    $("#searching_input").hide();
    $(".language_drop_down").hide();
    if(!rotated_arrow){
        $(".drop_down").slideDown();
        $(".drop_down_arrow").css({transform:"rotate(180deg)"})
        rotated_arrow = 1
    }else{
        $(".drop_down").slideUp();
        $(".drop_down_arrow").css({transform:"rotate(360deg)"})
        rotated_arrow = 0
    }
})

let dropped_down_dasyntac = 0

$(".dasyntacner_drop_menu").click(function(){
    alert(dropped_down_dasyntac)
    if(!dropped_down_dasyntac){
        $(".drop_down_menu").slideDown("slow");
        $("#moving_arrow").css({transform:"rotate(180deg)"})
        dropped_down_dasyntac = 1

    }else{
        $(".drop_down_menu").slideUp("slow")
        $("#moving_arrow").css({transform:"rotate(0deg)"})
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

// Closing Registration Zangaharel video
$(".close_registration").click(function(){
    $(".login_registration_screen").hide()
    $(".login_registration_screen2").hide()
    $(".zangaharel_screen").hide()
    $(".video_section").hide()
})
// Popping Registration block
$(".user_login").click(function(){
    $(".login_registration_screen").css("display","flex")
})
$(".arcanc").click(function(){
    $(".login_registration_screen").css("display","flex")
})
$(".grasenyakum").click(function(){
    $(".login_registration_screen").css("display","flex")
})
$(".grancvel_arcanc_btn").click(function(){
    $(".login_registration_screen").css("display","flex")
})

// Popping Calling block
$(".zangaharel_btn").click(function(){
    $(".zangaharel_screen").css("display","flex")
})
// Popping Calling block
$(".zangaharel_btn_mobile").click(function(){
    $(".zangaharel_screen").css("display","flex")
})

//Playing the video
$(".play_button").click(function(){
    $('.video_section').css("display","flex")
})

$(".zangaharel_screen").click(function(){
    $(".zangaharel_screen").css("display","none")
})


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
