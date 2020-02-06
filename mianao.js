/*
Weibo remove start up ads

[rewrite_local]
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|\!/photos/pic_recommend_status) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wb_ad.js
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wb_launch.js
[mitm]
hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
 */

/*
aiyue remove start up ads

[rewrite_local]
^https:\/\/api\.g1e\.xyz\/api\/public\/?service=Live\.checkLive url script-response-body zhuzhou.js
[mitm]
hostname = api.g1e.xyz
 */
//https://sf3-ttcdn-tos.pstatp.com/obj/ad-pattern/renderer/package.json

//const path = "/api/public/";

//const url = $request.url;
//www.hz01.app
var body = $response.body;

/*if (url.indexOf(path1) != -1) {
    let re = /\{.*\}/;
    body = body.match(re);
    var obj = JSON.parse(body);
    if (obj.background_delay_display_time) obj.background_delay_display_time = 60*60*24*365;
    if (obj.show_push_splash_ad) obj.show_push_splash_ad = false;
    if (obj.ads) obj.ads = [];
    body = JSON.stringify(obj) + 'OK';
}*/
             $notify("获取地点信息","",body );
    var obj = JSON.parse(body);
    arr = obj.info[0];
    obj.info[0].type_val = "0";
    obj.info[0].type = "0";
    obj.info[0].is_vip = "1";
    obj.info[0].type_msg = ""

body = JSON.stringify(obj);


$done({body});

// by yichahucha