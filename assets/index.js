$(document).ready(function () {
  
    if ($(window).width() < 800){
        $("header .nav-part").toggle()


        $("header .nav-part ul").toggle()
        $("header .nav-part ul li").toggle()
        $("header .nav-part .connect").toggle()
        $("footer").toggle()

        
    }
       
})

$("header .bar").click(function () {

    $("header .nav-part").toggle()
    $("header .nav-part ul").toggle()
    $("header .nav-part ul li").toggle()
    $("header .nav-part .connect").toggle()
    $("footer").toggle()
})

$(".connect").click(function () {
    alert("Cette fonction n'est pas encore implémentée")
    
})