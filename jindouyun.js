/*
软件地址 http://jdytv.cn/app/index/qudao.html?uid=Mjk5NjE=
[rewrite_local]
#筋斗云
^http:\/\/jdytv\.cn\/login\/login\/veifys\.html url script-response-body js/jindouyu1n.js
[mitm]
hostname = jdytv.cn
 */



//const path = "/api/public/";

//const url = $request.url;
var body = $response.body;


    var obj = JSON.parse(body);
    obj.msg.time = 1896192000;

body = JSON.stringify(obj);


$done({body});

