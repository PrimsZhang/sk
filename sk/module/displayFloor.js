class LisFloor{
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
        var classArr = [];
        for(var j = 0;j<this.res.length-1;j++){
            classArr.push(this.res[j].class)
        }
        console.log(classArr)
        // for(var i=0;i<14;i++){
        //     str+=
        //         `<div class="floor">
        //             <div class="tip">
        //                 <i>1F</i>
        //                 <h3>隐形眼镜</h3>
        //             </div>
        //             <div class="goods">
        //                 <div class="left">
        //                     <ul>
        //                         <li><a href="#">博士伦</a></li>
        //                         <li><a href="#">爱尔康视康</a></li>
        //                         <li><a href="#">库博</a></li>
        //                         <li><a href="#">强生</a></li>
        //                         <li><a href="#">海昌</a></li>
        //                         <li><a href="#">Clalen</a></li>
        //                         <li><a href="#">美若康</a></li>
        //                         <li><a href="#">实瞳</a></li>
        //                         <li><a href="#">琦芙莉</a></li>
        //                         <li><a href="#">库博光学</a></li>
        //                     </ul>
        //                     <a class="side" href="#"><img src="https://pic2.vsigo.cn/ADVP/205-250/201851410570232.jpg?v=2019080210"></a>
        //                 </div>
        //                 <div class="right">
        //                     <ul>
        //                         <li>
        //                             <a href="detail.html">
        //                                 <img src="">
        //                                 <p class="name">库博佰视明月抛3片装</p>
        //                                 <span class="price">￥79.00</span>
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>`;
        // }
        // this.box.html(str);
    }
}