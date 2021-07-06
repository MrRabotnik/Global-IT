$(document).ready(function (){
	setTimeout(function(){$('.preloader').fadeOut();},1000)
})
// Dasacucakner Drop Down
$(".dasyntacner").click(function(){
    $(".drop_down").toggle()
    $("#searching_input").hide()
    $(".language_drop_down").hide()
    $(".drop_down_arrow").toggle()
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


// Closing Registration
$(".close_registration").click(function(){
    $(".login_registration_screen").hide()
    $(".zangaharel_screen").hide()
})



// Popping Registration block
$(".grancvel_btn").click(function(){
    $(".login_registration_screen").css("display","flex")
})
$(".online_usucum_btn").click(function(){
    $(".login_registration_screen").css("display","flex")
})


// Description Names
var description  = "lorm adbka asdbajksd asdbakusdbkasd a akdka a shdahsashhh asdujasb;;d ausdhausdaksdada asldakjsbdasd asu;bdd dmas asuichasbasa scasuicasbcaskc  nor old. Happen people things oh is oppose up parish effect. Law handsome old outweigh humoured far appetit"
var description2  = "Get dissimilar not introduced day her apartments. Fully as taste he mr do smile abode every. Luckily offered article led lasting country minutes nor old. Happen people things oh is oppose up parish effect. Law handsome old outweigh humoured far appetite."
var description3  = " Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on. "
var description4  = "Interested has all devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arise along to. Parlors waiting so against me no. Wishing calling are warrant settled was luckily. Express besides it present if at an opinion visitor. "
var description5  = "In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing. "
var description6  = "Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. "



//Changing Class 
$(".dasyntac_anun1").click(function(){
    $(".class_description").html(description)
})
$(".dasyntac_anun2").click(function(){
    $(".class_description").html(description2)
})
$(".dasyntac_anun3").click(function(){
    $(".class_description").html(description3)
})
$(".dasyntac_anun4").click(function(){
    $(".class_description").html(description4)
})
$(".dasyntac_anun5").click(function(){
    $(".class_description").html(description5)
})
$(".dasyntac_anun6").click(function(){
    $(".class_description").html(description6)
})