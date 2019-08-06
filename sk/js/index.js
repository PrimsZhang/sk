require.config({
    baseUrl:"../module",
    paths:{
        displayHot:"displayHot",
        displayFloor:"displayFloor",
        tab:"tab",
        floor:"floor",
        jq:"../libs/jquery"
    }
})

require(["displayHot","displayFloor","tab","floor","jq"],function(h,f,t,fl,_){
    new h($("#main .hot .goods"));
    new f($("#main .floorBox"));
    new t($("#banner .bannerTop .classify"));
    new fl({
        btn:document.querySelector("#aside ul"),
        floor:$(".floor")
    })
})
(function(){
    $("#main .hot ul").find("li").on("mouseover",function(){
        $(this).css({
            "boxShadow":"3px 3px 3px #ddd",
        })
    }).on("");
    $("#main .hot ul").find("li").on("mouseout",function(){
        $(this).css({
            "boxShadow":"none"
        })
    }).on("");
    
    $(document).ready(function(){
        $("#banner .bannerTop .ad").banner({
            aimg:$("#banner .bannerTop .ad").find("img"),
            islist:false,
            autoPlay:true,
            delayTime:3000,
            moveTime:1000,
            photoWidth:780,
            index:0,
        })
    });

})();


