require.config({
    baseUrl:"../module",
    paths:{
        tab:"tab",
        jq:"../libs/jquery",
    }
})

require(["tab","jq"],function(t,_,pg){
    new t($("#banner .main .classify"));
})


class Page{
    constructor(options){
        this.cont = options.cont;
        this.list = options.list;
        this.left = options.left;
        this.right = options.right;
        this.pageCont = options.pageCont;
        this.url = options.url;
        this.num = options.num;
        this.index = options.index;
        this.load();
        this.addEvent();
        this.getCookie();
    }
    load(){
        var that = this;
        $.ajax({
            url:"http://localhost/prims/sk/data/goods.json",
            success:function(res){
                that.res = res;
                that.display();
                that.createPage();
            }
        })
    }
    display(){
        var str = "";
        for(var i=this.index*this.num;i<(this.index+1)*this.num;i++){
            if(i<this.res.length){
                str += `<li prims="${this.res[i].id}">
                            <a href="detail.html">
                                <img src="${this.res[i].url1}">
                                <h3>${this.res[i].name}</h3>
                                <h4>${this.res[i].des}</h4>
                                <span>￥${this.res[i].price}</span>
                                <i>收藏</i>
                                </a>
                            <em class="btn">购买</em>
                        </li>`
                }
            }
        this.list.innerHTML = str;
    }
    createPage(){
        this.maxNum = Math.ceil(this.res.length/this.num);
        var str = "";
        for(var i=0;i<this.maxNum;i++){
            str += `<li class=active>${i+1}</li>`
        }
        this.pageCont.innerHTML = str;
    }
    addEvent(){
        var that = this
        this.left.onclick = function(){
            that.changeIndex(0);
        }
        this.right.onclick = function(){
            that.changeIndex(1);
        }
    }
    changeIndex(type){
        if(type == 0){
            if(this.index == 0){
                this.index = this.maxNum-1;
            }else{
                this.index--;
            }
        }else{
            if(this.index == this.maxNum-1){
                this.index = 0;
            }else{
                this.index++;
            }
        }
        this.display();
    }

    getCookie(){
        var that = this;
        this.cont.addEventListener("click",function(eve){
            if(eve.target.className == "btn"){
                that.id = eve.target.parentNode.getAttribute("prims");
                that.setCookie();
            }
        })
    }
    setCookie(){
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        if(this.goods.length == 0){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var i = 0;
            var onoff = this.goods.some((val,index)=>{
                i = index;
                return val.id == this.id;
            })
            if(onoff){
                this.goods[i].num++;
            }else{
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        setCookie("goods",JSON.stringify(this.goods));
    }
}


new Page({
    cont:document.querySelector(".cont"),
    list:document.querySelector("#goods-menu .list"),
    left:document.querySelector("#goods-menu .btnL"),
    right:document.querySelector("#goods-menu .btnR"),
    pageCont:document.querySelector("#goods-menu .pageCont"),
    num:20,
    index:0
})