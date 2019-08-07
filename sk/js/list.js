require.config({
    baseUrl:"../module",
    paths:{
        tab:"tab",
        pg:"page",
        jq:"../libs/jquery",
    }
})

require(["tab","jq","pg"],function(t,_,pg){
    new t($("#banner .main .classify"));
    new pg({
        list:document.querySelector(".list"),
        left:document.querySelector(".btnL"),
        right:document.querySelector(".btnR"),
        pageCont:document.querySelector(".pageCont"),
        // url:"http://localhost/prims/sk/data/goods.json",
        num:5,
        index:0
    })
})