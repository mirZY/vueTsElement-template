let url;
if (window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1") {
    url = "http://api.zhuge.zyuwen.cn";
} 

export const AjaxUrl = url ;