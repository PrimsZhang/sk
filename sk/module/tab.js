define(function(){
    class Tab{
        constructor(box){
            this.box = box;
            this.slide = box.find("ul li");
            this.slideBox = box.find("div>div");
            this.addEvent();
        }
        addEvent(){
            var that = this;
            this.slide.mouseover(function(){
                var _index = $(this).index();
                that.slideBox.eq(_index).show().siblings().hide();
            $(this).addClass("change").siblings().removeClass("change");
            });
            this.box.on("mouseleave",function(){
                that.slideBox.css({
                    "display":"none",
                })
            })
        }
    }
    return Tab;
})


