define(function(){
    class Floor{
        constructor(options){
            this.btn = options.btn;
            this.f = options.floor;
            this.addEvent();
        }
        addEvent(){
            var that = this;
            $(this.btn).on("click","li",function(e){
                var index = $(this).index();
                var t = that.f.eq(index);
                $("html").stop().animate({
                    scrollTop:t.offset().top
                });
                $(e.target).css()
            })
        }
    }
    return Floor;
})