class Clitab{
    constructor(box){
        this.menu = box.children("div").children("ul").children("li");
        this.list = box.children("div").children("div");
        this.event();
    }
    event(){
        var that = this;
        this.menu.on("click",function(){
                $(this).css({
            "background":"rgba(204,204,204,.4)",
        }).siblings().css({
            "background":"#fff"
        });
        that.list.eq($(this).index()).show().siblings().hide();
        $(this).addClass("change").siblings().removeClass("change");
        });

    }
}

new Clitab($("#detail .tab"));
new Clitab($("#product .picBox"));

$(function(){
    class Pics{
        constructor(){
            var that =this;
            $.ajax({
                url:"http://localhost/prims/sk/data/goods.json",
                success:function(res){
                    that.res = res;
                    that.display();
                }
            })
        }
        
        display(){
            this.id=localStorage.getItem("sk");
            var picm = document.querySelectorAll(".pic");

            var mypic0 = picm[0].querySelectorAll("img");
            for(var m = 0;m<mypic0.length;m++){
                for(var i=0;i<this.res.length;i++){
                    if(this.id == this.res[i].id){
                        mypic0[m].src = this.res[i].url1;
                    }
                }
            }
            var mypic0 = picm[1].querySelectorAll("img");
            for(var m = 0;m<mypic0.length;m++){
                for(var i=0;i<this.res.length;i++){
                    if(this.id == this.res[i].id){
                        mypic0[m].src = this.res[i].url2;
                    }
                }
            }
            var mypic0 = picm[2].querySelectorAll("img");
            for(var m = 0;m<mypic0.length;m++){
                for(var i=0;i<this.res.length;i++){
                    if(this.id == this.res[i].id){
                        mypic0[m].src = this.res[i].url3;
                    }
                }
            }
            var mypic0 = picm[3].querySelectorAll("img");
            for(var m = 0;m<mypic0.length;m++){
                for(var i=0;i<this.res.length;i++){
                    if(this.id == this.res[i].id){
                        mypic0[m].src = this.res[i].url4;
                    }
                }
            }

            var imgbox2 = document.querySelectorAll(".photoS img");
            for(var i=0;i<this.res.length;i++){
                if(this.id == this.res[i].id){
                    imgbox2[0].src = this.res[i].url1;
                }
            }
            for(var i=0;i<this.res.length;i++){
                if(this.id == this.res[i].id){
                    imgbox2[1].src = this.res[i].url2;
                }
            }
            for(var i=0;i<this.res.length;i++){
                if(this.id == this.res[i].id){
                    imgbox2[2].src = this.res[i].url3;
                }
            }
            for(var i=0;i<this.res.length;i++){
                if(this.id == this.res[i].id){
                    imgbox2[3].src = this.res[i].url4;
                }
            }

            var str2="";
            var intru = document.querySelector(".intru");
            for(var m = 0;m<mypic0.length;m++){
                for(var i=0;i<this.res.length;i++){
                    if(this.id == this.res[i].id){
                        str2 = `<h3>${this.res[i].name}</h3>
                                <h4>${this.res[i].des}</h4>
                                <div class="buyNum">
                                    <span>品牌：${this.res[i].tm}</span>
                                </div>
                                <div class="price">
                                    <div class="p1">
                                        <span>市场价 ： </span>
                                        <i>¥${this.res[i].price*1.8}</i>
                                    </div>
                                    <div class="p2">
                                        <span>促销价 ： </span>
                                        <i>￥${this.res[i].price}</i>
                                    </div>
                                </div>
                                <div class="sale">
                                    <p>正在促销：</p>
                                    <a href="#">
                                        <em>集体买赠</em>
                                        <p>两件商品一件价，丰富商品随便选</p>
                                    </a>
                                </div>
                                <div class="saleNum">
                                    <p>已售：<span>1444</span>件</p>
                                    <p>评价：<span>14256</span>条</p>
                                </div>
                                <p class="explain">15点前下单，其他快递16点前下单，当天发货。</p>
                                <a href="#" class="buy">加入购物车</a>`
                    }
                }
            }
            intru.innerHTML = str2;
        }        
    }
    new Pics();
})


$("#product #pictive1").magi({
    magfBox:document.querySelector("#pictive1"),
    picWidth:280,      //图片宽度
    picHeight:280,     //图片高度
    scale:5,           //缩放比例
    showScale:2,     //放大显示图片比例，可以是小数，大于0
    showTop:300,       //放大显示区位置调整
    showLeft:700,     
})

$("#product #pictive2").magi({
    magfBox:document.querySelector("#pictive2"),
    picWidth:280,      //图片宽度
    picHeight:280,     //图片高度
    scale:5,           //缩放比例
    showScale:2,     //放大显示图片比例，可以是小数，大于0
    showTop:300,       //放大显示区位置调整
    showLeft:700,     
})

$("#product #pictive3").magi({
    magfBox:document.querySelector("#pictive3"),
    picWidth:280,      //图片宽度
    picHeight:280,     //图片高度
    scale:5,           //缩放比例
    showScale:2,     //放大显示图片比例，可以是小数，大于0
    showTop:300,       //放大显示区位置调整
    showLeft:700,     
})

$("#product #pictive4").magi({
    magfBox:document.querySelector("#pictive4"),
    picWidth:280,      //图片宽度
    picHeight:280,     //图片高度
    scale:5,           //缩放比例
    showScale:2,     //放大显示图片比例，可以是小数，大于0
    showTop:300,       //放大显示区位置调整
    showLeft:700,     
})

