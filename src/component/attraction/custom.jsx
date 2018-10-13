import $ from "jquery"
export default function(){
$(window).on("scroll",()=>{
    console.log()
    if($(window).scrollTop() >1300 && $(window).innerWidth() > 1000 && $(window).scrollTop() < $("#footer").position().top-1000){
        $('.booking-widget').addClass("fixbook")
    }else $('.booking-widget').removeClass("fixbook")
    if($(window).scrollTop() >1150 && $(window).innerWidth() > 1000) {
        $('#listing-nav').addClass("fixjumper")
    }else{
        $('#listing-nav').removeClass("fixjumper")
    }

    
})
    var aChildren = $(".listing-nav li").children();
    var aArray = [];
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop();
        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top - 150;
            var divHeight = $(theID).height();
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("active");
            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }
    });

    
}

}