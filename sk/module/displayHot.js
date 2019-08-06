define(function(){
    class Lis{
        constructor(box){
            this.box = box;
            this.init();
            // this.add();
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
                    `<li>
                        <a href="detail.html">
                            <img src="${this.res[i].url1}" index="${this.res[i].id}">
                            <p class="name">${this.res[i].name}</p>
                            <span>￥${this.res[i].price}</span>
                            <p class="comment">1554 评论 | 99% 好评</p>
                        </a>
                    </li>`;
            }
            this.box.html(str);
        }
    }
    return Lis;
})
