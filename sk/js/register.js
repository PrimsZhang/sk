class Login{
    constructor(){
        this.url = "http://api.icodeilife.cn:81/user";
        this.user = $("#user");
        this.pass = $("#pass");
        this.tel = $("#tel");
        this.email = $("#email");
        this.btn = $("#btn");
        this.state = $("p span");
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.btn.click(function(){
            that.load()
        })
    }
    load(){
        $.ajax({
            url:this.url,
            data:{
                type:"register",
                user:this.user.val(),
                pass:this.pass.val(),
                tel:this.tel.val(),
                email:this.email.val()
            },
            success:(res)=>{
                res = JSON.parse(res);
                if(res.code == 0){
                    
                    this.state.html("注册失败，请重新注册");
                }else if(res.code == 1){
                    
                    this.state.html("注册成功，5秒后跳转到<a href='login.html'>登录</a>");
                    setTimeout(() => {
                        location.href = "login.html"
                    }, 5000);
                }
            }
        })
    }
}

new Login();