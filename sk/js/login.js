class Log{
    constructor(){
        this.user = document.querySelector(".user input");
        this.pass = document.querySelector(".pass input");
        this.btn = document.querySelector(".btn-login");
        this.state = document.querySelector(".state");
        this.init();
    }
    init(){
        var that = this;
        this.btn.onclick = function(){
            var myobj = {
                url:"http://localhost/prims/sk/server/login.php",
                data:{},
                success:function(res){
                    that.res = res; 
                    console.log(JSON.parse(res))
                }
            }
            myobj.data.user = that.user.value;
            myobj.data.pass = that.pass.value;
            $.ajax(myobj)

            


        }
    }
}
new Log;