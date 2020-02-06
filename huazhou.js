

/*

[rewrite_local]
^https:\/\/api\.g1e\.xyz\/api\/public\/?service=Live\.checkLive url script-response-body zhuzhou.js
[mitm]
hostname = api.g1e.xyz
 */
//https://sf3-ttcdn-tos.pstatp.com/obj/ad-pattern/renderer/package.json


//www.hz01.app
var body = $response.body;
var obj = JSON.parse(body);
arr = obj.info[0];
obj.info[0].type_val = "0";
obj.info[0].type = "0";
obj.info[0].is_vip = "1";
obj.info[0].type_msg = ""

body = JSON.stringify(obj);

$done({body});
