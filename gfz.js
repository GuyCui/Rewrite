/*

功夫者试看

[rewrite_local]

^https:\/\/mp\.gongfuzhe\.com\/api\/(course\/courseDetail) url script-response-body https://raw.githubusercontent.com/GuyCui/Rewrite/main/gfz.js

[mitm]
hostname = mp.gongfuzhe.com
*/

let body = $response.body;
let url = $request.url;

if (url.indexOf("http://mp.gongfuzhe.com/api/course/courseDetail") !== -1) {
    let data = JSON.parse(body);

    // 修改lesson数组中的free字段
    if (data.data && data.data.lesson) {
        data.data.lesson.forEach(lesson => {
            lesson.free = 1;
        });
    }

    body = JSON.stringify(data);
}

$done({ body: body });
