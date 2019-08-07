class Shop{
    constructor(){
        this.tbody = document.querySelector("tbody");
        this.totalPrice = document.querySelector(".totalPrice")
        this.load();
        this.addEvent();
    }

    addEvent(){
        var that = this;
        this.tbody.addEventListener("click",function(eve){
            if(eve.target.className == "del"){
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                event.target.parentNode.parentNode.remove();
                that.num = eve.target.value;
                that.delete();
            }
        })
        this.tbody.addEventListener("input",function(eve){
            if(eve.target.className == "num"){
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                that.num = eve.target.value;
                that.updateCookie();
            }
        })
        this.tbody.addEventListener("click",function(eve){
            that.upDown(eve);
            that.display();
        })                                                                              
    }


    upDown(eve){
        this.id = eve.target.parentNode.parentNode.getAttribute("index");
        var i = 0;
        this.goods.some((val,index)=>{
            i = index;
            return val.id == this.id;
        })
        if(eve.target.className == "up"){
            this.goods[i].num++;
            
        }else if(eve.target.className == "down"){
            if(this.goods[i].num--<=1){
                this.goods[i].num = 1;
            }else{
                this.goods[i].num--;
            }
        }
        eve.target.parentNode.childNodes[3].value = this.goods[i].num;
        setCookie("goods",JSON.stringify(this.goods));
    }


    updateCookie(){
        var i = 0;
        this.goods.some((val,index)=>{
            i = index;
            return val.id == this.id;
        })
        this.goods[i].num = this.num;   
        setCookie("goods",JSON.stringify(this.goods));
    }

    delete(){
        var i = 0;
        this.goods.some((val,index)=>{
            i = index;
            return val.id == this.id
        })
        this.goods.splice(i,1)
        setCookie("goods",JSON.stringify(this.goods));
    }

    load(){
        var that = this;
        $.ajax({
            url:"http://localhost/prims/sk/data/goods.json",
            success:function(res){
                that.res = res;
                that.getCookie();
            }
        })
    }

    getCookie(){
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        this.display();
    }

    display(){
        var str = "";
        var price = 0;
        this.res.forEach((resval)=>{
            this.goods.forEach((goodsval)=>{
                if(resval.id == goodsval.id){
                    price += goodsval.num * resval.price
                    str += `<tr index="${resval.id}">
                        <td><img src="${resval.url1}"></td>      
                        <td>${resval.name}</td>
                        <td>${resval.price}</td>
                        <td>
                            <span class="down">-</span>
                            <input type="text" value="${goodsval.num}" class="num">
                            <span class="up">+</span>
                            </td>
                            <td>${goodsval.num * resval.price}</td>
                            <td><span class="del">删除</span></td>
                            </tr>`
                        }
                this.totalPrice.innerHTML = price;
                this.tbody.innerHTML = str;
            })
        })
    }
}
new Shop;