define(function(){
    class Page{
        constructor(options){
            this.list = options.list;
            this.left = options.left;
            this.right = options.right;
            this.pageCont = options.pageCont;
            this.url = options.url;
            this.num = options.num;
            this.index = options.index;
            this.load();
            // this.addEvent();
        }
        load(){
            var that = this;
            $.ajax({
                url:"http://localhost/prims/sk/data/goods.json",
                success:function(res){
                    that.res = res;
                    that.display();
                    // that.createPage();
                }
            })
            console.log(1)
        }
        display(){
            console.log(this.res)
        //     var str = "";
        //     for(var i=this.index*this.num;i<(this.index+1)*this.num;i++){
        //         if(i<this.res.length){
        //             str += `<li>
        //                         <a href="#">
        //                             <img src="${this.res[i].url}">
        //                             <h3>${this.res[i].name}</h3>
        //                             <h4>${this.res[i].tip}</h4>
        //                             <span>￥${this.res[i].price}</span>
        //                             <i>收藏</i>
        //                         </a>
        //                     </li>`
        //             }
        //         }
        //     this.list.innerHTML = str;
        }
        // createPage(){
        //     this.maxNum = Math.ceil(this.res.length/this.num);
        //     var str = "";
        //     for(var i=0;i<this.maxNum;i++){
        //         str += `<li>${i+1}</li>`
        //     }
        //     this.pageCont.innerHTML = str;
        // }
        // addEvent(){
        //     var that = this
        //     this.left.onclick = function(){
        //         that.changeIndex(0);
        //     }
        //     this.right.onclick = function(){
        //         that.changeIndex(1);
        //     }
        // }
        // changeIndex(type){
        //     if(type == 0){
        //         if(this.index == 0){
        //             this.index = this.maxNum-1;
        //         }else{
        //             this.index--;
        //         }
        //     }else{
        //         if(this.index == this.maxNum-1){
        //             this.index = 0;
        //         }else{
        //             this.index++;
        //         }
        //     }
        //     this.display();
        // }
    }
    return Page;
})