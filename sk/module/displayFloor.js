class LisFloor{
    constructor(box){
        this.box = box;
        this.floor = this.box.children(".floor");
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
        var arr = [];
        for(var i = 0;i<this.res.length;i++){
            arr.push(this.res[i].class);
        }
        function unique (arr){
            return Array.from(new Set(arr));
        }
        var classArr = unique(arr);
        var o = [];
        var t = [];
        var th = [];

        for(var m = 0;m<this.res.length;m++){
            if(this.res[m].class == classArr[0]){
                o.push(this.res[m]);
            }
            if(this.res[m].class == classArr[1]){
                t.push(this.res[m]);
            }
            if(this.res[m].class == classArr[2]){
                th.push(this.res[m]);
            }
        }
        // console.log(o)
        // console.log(t)
        // console.log(th)

        var strO = "";
        for(var i=0;i<10;i++){
            strO+=
                `<li>
                    <a href="detail.html">
                        <img src="${o[i].url1}" index="${o[i].id}">
                        <p class="name">${o[i].name}</p>
                        <span class="price">￥${o[i].price}</span>
                    </a>
                </li>`;
        }
        $(this.floor[0].children[1].children[1].children).html(strO);

        var strT = "";
        for(var i=0;i<10;i++){
            strT+=
                `<li>
                    <a href="detail.html">
                        <img src="${t[i].url1}" index="${t[i].id}">
                        <p class="name">${t[i].name}</p>
                        <span class="price">￥${t[i].price}</span>
                    </a>
                </li>`;
        }
        $(this.floor[1].children[1].children[1].children).html(strT);

        var strTh = "";
        for(var i=0;i<10;i++){
            strTh+=
                `<li>
                    <a href="detail.html">
                        <img src="${th[i].url1}" index="${th[i].id}">
                        <p class="name">${th[i].name}</p>
                        <span class="price">￥${th[i].price}</span>
                    </a>
                </li>`;
        }
        $(this.floor[2].children[1].children[1].children).html(strTh);
    }
}