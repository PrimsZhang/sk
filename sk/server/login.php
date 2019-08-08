<?php
    $u = @$_REQUEST["user"];
    $p = @$_REQUEST["pass"];
    $data = array("user"=>"admin","pass"=>123456);
    if($data["user"] == $u && $data["pass"] == $p){
        echo '{"code":1,"msg":{"user":'.$u.',"pass":'.$p.'}}';
    }else{
        echo '{"code":0,"msg":"用户密码不符"}';
    }
?>