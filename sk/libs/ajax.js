function ajaxGet(url,callback,data){
    data = data ? data : {};
    var str = "";
    for(var i in data){
        str = str + i+"="+data[i]+"&";
    }
    var d = new Date();
    url = url + "?" + str.slice(0,str.length-1) + d.getTime();
    var ajax = new XMLHttpRequest();
    ajax.open("get",url);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            callback(ajax.responseText);
        }
    }
    ajax.send();
}

function ajaxPost(url,callback,data){
    data = data ? data : {};
    var str = "";
    for(var i in data){
        str = str + `${i}=${data[i]}&`
    }
    var ajax = new XMLHttpRequest();
    ajax.open("post",url);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            callback(ajax.responseText);
        }
    }
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send(str);
}