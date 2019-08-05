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

    new Tab($("#banner .bannerTop .classify"));
    new Lis($("#main .hot .goods"));
    new LisFloor($("#main .floorBox"));
})();

