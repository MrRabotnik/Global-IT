//Preloader
$(document).ready(function (){
	setTimeout(function(){$('.preloader').fadeOut();},1500)
})
$(".aside_menu_icon").click(function(){
	$("aside").toggle("slow")
	$('.aside_menu_icon2').show()
	$('.content_section').css("width","100%")
	$(".big_lessons").css("height","70%")
	$(".big_lessons").css("width","22%")
})
$('.aside_menu_icon2').click(function(){
	$("aside").toggle("slow")
	$('.aside_menu_icon2').hide()
	$('.content_section').css("width","calc(78% - 2px)")
})
// Dasacucakner Drop Down
$(".dasyntacner").click(function(){
    $(".drop_down").toggle()

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

//Popping Registration
$(".dasyntaci_grancvel").click(function(){
    $(".login_registration_screen").css("display","flex")
})
