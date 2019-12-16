<?php
$secret = "songyingchun";  //密钥，和 GitHub 上对应
$path = "/root/smart-yc/app/egg-service/egg";  //服务器上的项目文件目录
$signature = $_SERVER["HTTP_X_HUB_SIGNATURE"];  //获取散列字符串
if($signature) {

    $rawPost = file_get_contents("php://input");  //获取收到的数据
    list($algo, $hash) = explode("=", $signature, 2);  //获取散列算法、散列值
    if ($hash === hash_hmac($algo, $rawPost, $secret)) {  //验证
		shell_exec("cd /root/smart-yc/app/egg-service/egg && git pull 2>&1");
		echo "代码拉取成功";
	} else {
	    echo "Secret 验证失败";
	}
} else {
    echo "请输入 Secret";
}
