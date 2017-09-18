
/**
 * Created by JZG on 2017-09-18.
 * 获取页面请求url中的参数
 */
(function($) {
    $.extend({
        getParameters:function(){
            var url = window.location.href;
            var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
            var paraObj = {}
            for(i = 0; j = paraString[i]; i++) {
                paraObj[j.substring(0, j.indexOf("="))] = j.substring(j.indexOf("=") + 1, j.length);
            }
            return paraObj;
        }
    });

})(jQuery);

