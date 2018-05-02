jQuery(function(){
    'use strict';

    var ajaxdata = {} ,queryParams = {};

    //渲染
    _init();
    //绑定
    _bind();

    function _init(){
        //初始化列表
        var parameter = $.getParameters();
        var id = parameter.dataId;
        if(id){
            _initData(id);
            _update(id);
        }
    }

    function _bind () {
        //保存
        $('#sendBtn').on('click', function () {
            var cnt = $("#cnt").val().trim();
            if(typeof (cnt) !='undefined'){
                cnt = cnt.trim();
                if( cnt!='' && cnt != null){
                     _addMessage(webBasePath+'/conversationDetails');
                }
            }
        });
    }

    /**
     * 发送留言显示src="'+message.user.picture+'"
     * @param message 留言信息
     * @returns {string}
     * @private
     */
    function _toMsgHtml(message,i){
        var _fromHtml = [];
        var c = '';
        if(i == 0){
            c = 'margin-top: 35px;';
        }
        ///images/user.png
        _fromHtml.push('<div class="msg-from" style="'+c+'">');
        _fromHtml.push('<div class="col-xs-12" style="text-align: center;line-height: 16px;font-size: 14px;">'+message.createdTime+'</div>');
        _fromHtml.push('<div class="comment comment-input" style="margin-top: 10px">');
        _fromHtml.push('<div class="pic-wrapper text-center" style="width: 28px;height: 28px;float: left;background-color: #ffffff;">');
        _fromHtml.push('<img data-src-retina="/images/user.png" data-src="/images/user.png" src="/images/user.png" alt="">');
        _fromHtml.push('</div>');
        _fromHtml.push('<div class="info-wrapper" style="margin-left: 5px;float: left;width: 10%">');
        _fromHtml.push('<span>'+message.user.nickname+'</span>');
        _fromHtml.push('</div>');
        _fromHtml.push('<div class="info-wrapper" style="float: right;width: 86.5%;">');
        _fromHtml.push('<div class="input-group primary" style="width: 100%;">');
        _fromHtml.push('<input type="text" class="form-control" style="border: none;" value="'+message.content+'">');
        _fromHtml.push('</div></div></div></div>');

        return  _fromHtml.join('');
    }

    /**
     * 回复留言显示
     * @param message 留言信息
     * @returns {string}
     * @private
     */
    function _fromMsgHtml(message,i){
        var _toHtml = [];
        var c = '';
        if(i == 0){
            c = 'margin-top: 35px;';
        }
        _toHtml.push('<div class="msg-to" style="'+c+'">');
        _toHtml.push('<div class="col-xs-12" style="text-align: center;line-height: 16px;font-size: 14px;">'+message.createdTime+'</div>');
        _toHtml.push('<div class="comment comment-input">');
        _toHtml.push('<div class="info-wrapper" style="float: left;width: 86.5%;">');
        _toHtml.push('<div class="input-group primary" style="width: 100%;">');
        _toHtml.push('<input type="text" class="form-control" style="border: none;" value="'+message.content+'">');
        _toHtml.push('</div></div>');
        _toHtml.push('<div class="pic-wrapper text-center" style="width: 28px;height: 28px;float: right;background-color: #ffffff;">');
        _toHtml.push('<img data-src-retina="/images/user.png" data-src="/images/user.png" src="'+message.user.picture+'">');
        _toHtml.push('</div>');
        _toHtml.push('<div class="info-wrapper" style="margin-right: 5px;float: right;width: 10%;text-align: right;">');
        _toHtml.push('<span>Tim</span>');
        _toHtml.push('</div></div></div>');

        return  _toHtml.join('');
    }

    function _initData (id) {
        _setQueryData(id);
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/conversationDetails',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var user = $.getuuuAuth();
                    var toUserId = user._g;
                    var $msgContent = $('#messageContent');
                    if (result.conversationDetails != null && result.conversationDetails.length > 0) {
                        var data = result.conversationDetails;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var userId = obj.managerId
                            if(typeof(toUserId) != 'undefined'){
                                if(toUserId == userId){//为发送方
                                    $msgContent.append(_toMsgHtml(obj,i));
                                }else{//回复方
                                    $msgContent.append(_fromMsgHtml(obj,i));
                                }
                            }else{//session过期
                                $.reqHomeUrl();
                            }
                        }
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', "系统出错");
                }
            }
        });
    }

    function _addMessage(reUrl) {
        _setAjaxData();
        if (_verifyAjaxData()) {
            jQuery.ajax({
                dataType: "json",
                url: reUrl,
                data: ajaxdata,
                type: "POST",
                success: function (result) {
                    if (!result.success) {
                        FOXKEEPER_UTILS.alert('warning',"发送失败");
                    }else{
                        var $msgContent = $('#messageContent');
                        $msgContent.append(_toMsgHtml(result.conversationDetail));
                        $("#cnt").val("")
                    }
                }
            });
        }
    }

    function _update(id) {
        var data = {};
        var user = $.getuuuAuth();
        data.username = user._d;
        data.password = user._p;
        data.userType = 2;
        data.isRead = 1;
        if (_verifyAjaxData()) {
            jQuery.ajax({
                dataType: "json",
                url: webBasePath + '/conversations/'+id,
                data: data,
                type: "POST",
                success: function (result) {}
            });
        }
    }

    //封装ajax提交数据
    function _setQueryData (id) {
        queryParams.pageNo = 1;
        queryParams.pageSize = 100;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
        queryParams.conversationId = id;
    }

    //
    function _setAjaxData(){
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.managerId = user._g;
        ajaxdata.userType = 2
        var parameter = $.getParameters();
        ajaxdata.conversationId = parameter.dataId;
        ajaxdata.content = $("#cnt").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }
});
