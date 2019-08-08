define(function(){
    class Lis{
        constructor(box){
            this.box = box;
            this.init();
            
        }
        init(){
            var that = this;
            $.ajax({
                url:"http://localhost/prims/sk/data/goods.json",
                success:function(res){
                    that.res = res;
                    that.display();
                }
            })
        }
        display(){
            var str = "";
            for(var i=0;i<14;i++){
                str+=
                    `<li prims="${this.res[i].id}">
                        <a href="detail.html" target="blank">
                            <img src="${this.res[i].url1}" index="${this.res[i].id}"  class="shop">
                            <p class="name">${this.res[i].name}</p>
                            <span>￥${this.res[i].price}</span>
                            <p class="comment">1554 评论 | 99% 好评</p>
                        </a>
                    </li>`;
            }
            this.box.html(str);
            var hotFloor = document.querySelectorAll("#main .hot  .goods")
            this.add(hotFloor);
        }
        add(hotFloor){
            var that = $(hotFloor);
            that.on("click",function(e){
                if(e.target.className == "shop"){
                    that.id = e.target.getAttribute("index");
                    localStorage.setItem("sk",that.id)
                }
            })
        }

    }
    return Lis;
})
