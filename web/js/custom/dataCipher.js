/**
 * Created by JZG on 2017-09-06.
 */
(function($) {
    $.extend({

        secretKey:"ylx9572cipher",
        /**
         * 加密
         * @param str
         * @returns 加密后的值
         */
        dataEncrypt : function(str){
            if(str == '') {
                return '';
            }
            str = encodeURIComponent(str);
            var pwd = this.secretKey;
            pwd = encodeURIComponent(pwd);
            var prand = '';
            for(var i = 0, len = pwd.length; i < len; i += 1) {
                prand += pwd.charCodeAt(i).toString();
            }
            var sPos = Math.floor(prand.length / 5);
            var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) +
                prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
            var incr = Math.ceil(pwd.length / 2);
            var modu = Math.pow(2, 31) - 1;
            if(mult < 2) {
                return '';
            }
            var salt = Math.round(Math.random() * 1000000000) % 100000000;
            prand += salt;
            while(prand.length > 10) {
                prand = (parseInt(prand.substring(0, 10)) +
                parseInt(prand.substring(10, prand.length))).toString();
            }
            prand = (mult * prand + incr) % modu;
            var encChr = '';
            var encStr = '';
            for(var i = 0, len = str.length; i < len; i += 1) {
                encChr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
                if(encChr < 16) {
                    encStr += '0' + encChr.toString(16);
                }else{
                    encStr += encChr.toString(16);
                }
                prand = (mult * prand + incr) % modu;
            }
            salt = salt.toString(16);
            while(salt.length < 8) {
                salt = "0" + salt;
            }
            encStr += salt;
            return encStr;
        }
        /**
         * 解密
         * @param str
         * @returns 解密后的值
         */
        ,dataDecrypt : function(str){
            if(str == ''){
                return '';
            }
            var pwd = this.secretKey;
            pwd = encodeURIComponent(pwd);
            if(str == undefined || str.length < 8) {
                return '';
            }
            var prand = '';
            for(var i = 0, len = pwd.length; i < len; i += 1) {
                prand += pwd.charCodeAt(i).toString();
            }
            var sPos = Math.floor(prand.length / 5);
            var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) +
                prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
            var incr = Math.round(pwd.length / 2);
            var modu = Math.pow(2, 31) - 1;
            var salt = parseInt(str.substring(str.length - 8, str.length), 16);
            str = str.substring(0, str.length - 8);
            prand += salt;
            while(prand.length > 10) {
                prand = (parseInt(prand.substring(0, 10)) +
                parseInt(prand.substring(10, prand.length))).toString();
            }
            prand = (mult * prand + incr) % modu;
            var encChr = '';
            var encStr = '';
            for(var i = 0, len = str.length; i < len; i += 2) {
                encChr = parseInt(parseInt(str.substring(i, i + 2), 16) ^ Math.floor((prand / modu) * 255));
                encStr += String.fromCharCode(encChr);
                prand = (mult * prand + incr) % modu;
            }
            return decodeURIComponent(encStr);
        }
        ,setUuuAuth:function(u,k){
            localStorage.clear();
            var curTime=new Date().getTime();
            localStorage.setItem("_uu",JSON.stringify({_d:this.dataEncrypt(u),_p:this.dataEncrypt(k),time:curTime}))
            /*minutes=parseInt(minutes);
            var   interTimes=minutes*60*1000;
            interTimes=parseInt(interTimes);
            return   new   Date(Date.parse(date)-interTimes);*/
        }
        ,getuuuAuth:function () {
            var data=localStorage.getItem("_uu");
            var uu=JSON.parse(data);
            //设置过期时间为30分钟
            var exp = 30*60*1000;
            if(new Date().getTime()-uu.time>exp){
                console.log("session已过期")
                return undefined;
            }else{
                uu._d = this.dataDecrypt(uu._d);
                uu._p = this.dataDecrypt(uu._p);
                return uu;
            }
        }
    });

})(jQuery);