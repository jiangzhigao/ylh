jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            userName:{
                required:true,
            },
            userPassword:{
                required:true,
            },
            name:{
                required:true,
            },
            nickname:{
                required:true,
            },
            mobile:{
                required:true,
            },
            email:{
                required:true,
            },
            idcard:{
                required:true,
            }
        },
        messages:{
            commisionName:{
                required:"手机号或账户名不能为空"
            },
            userPassword:{
                required:"密码不能为空"
            },
            name:{
                required:"真实姓名不能为空"
            },
            nickname:{
                required:"昵称不能为空"
            },
            mobile:{
                required:"备用手机号码不能为空"
            },
            email:{
                required:"电子邮箱不能为空"
            },
            idcard:{
                required:"身份证号不能为空"
            }
        }
    });

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
        }

    }

    function _bind () {
        //保存
        $('#btnSave').on('click', function () {
            var id = $("#dataId").val();
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _ajax($this, '保存',webBasePath+'/lawyers/'+id);
            }
        });

        //律师审核
        $('#btnApprove').on('click', function () {
            var id = $("#dataId").val();
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _updateStatus(id);
            }
        });

        $('#province').change('click', function () {
            var province = $('#province').val();
            _initCities(province);
        });
        //图片上传
        $('body').on('change', 'input[name$="_upload"]', function(e) {
            var _this = $(this);
            var fileName = $(this).val();
            /*var $processBar = _this.parent().parent().prev('div');*/
            /*$processBar.removeClass('hide');*/
            if (!fileName.match('\\.(gif|png|jpe?g)$')) {
                FOXKEEPER_UTILS.alert('warning', '只能上传图片格式，如：gif,png,jpg,jpeg!');
                _this.val("");
                $('#' + _this.attr("mid")).attr("src", "/images/nopica.png");
                $('#' + _this.attr("uid")).val("");
                $("#imgBox").show();
                /*$processBar.addClass('hide');*/
                return false;
            }

            //图片大小判断
            var imgSize = document.getElementById("lcimage_upload").files[0].size;
            if(imgSize>1024*1024){
                FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于1M');
                $("#lcimage_upload").val("");
                $("#imgBox").show();
                return false;
            }

            if (fileName != "") {
                return ajaxFileUpload(_this, _this.attr("id"), null);
            }
        });
    }

    function ajaxFileUpload($file, fileId, $processBar) {
        var user = $.getuuuAuth();
        var fileName = $file.val();
        var fileSuffix = fileName.substring(fileName.indexOf(".") + 1, fileName.length);
        var data = new FormData($("#formTimeLine")[0]);
        var formData = new FormData($form_add[0]);
        formData.append("username", user._d);
        formData.append("password", user._p);
        formData.append("userType", "2");
        formData.append("fileext", fileSuffix);
        formData.append("filetype", "1");
        $.ajax({
            type: 'POST',
            url: webBasePath+'/uploadFileMultipart',
            dataType: 'json',
            cache: false,
            processData: false,    //需要正确设置此项
            contentType: false,
            enctype: 'multipart/form-data',    //需要正确设置此项
            data: formData,
            success: function (data) {
                if (data.success) {
                    var url = data.url;
                    $('#' + $file.attr("mid")).attr("src", url);
                    $('#' + $file.attr("uid")).val(url);
                    $("#imgBox").show();
                } else {
                    FOXKEEPER_UTILS.alert('warning', data.message);
                }
            },
            error: function (xhr, status, e) {
                FOXKEEPER_UTILS.alert('warning', '上传出错，请重试');
            }
        });
        return false;
    }
    /** 请求参数验证 */
    function _verifyAjaxData () {
        if (!ajaxdata.picture) {
            FOXKEEPER_UTILS.alert('warning', '请上传律师头像');
            return false;
        }
        return true;
    }

    //加载编辑数据
    function _initData (id) {
        // _initProvince();
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/lawyers/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var lawyer = result.lawyer;
                    if(lawyer){
                        $("#dataId").val(lawyer.id);
                        $("#userName").text(lawyer.userName);
                        $("#account").text($.moneyToDecimal(lawyer.account));
                        /*$("#userPassword").val(lawyer.userPassword);*/
                        $("#name").val(lawyer.name);
                        $("#idcard").val(lawyer.idcard);
                        $("#licenseid").val(lawyer.licenseid);
                        $("#mobile").val(lawyer.mobile);
                        $("#email").val(lawyer.email);
                        $("#level").val(lawyer.level);
                        _initProvince(lawyer.province);
                        _initCities(lawyer.province,lawyer.city);
                        $("#lawUserName").val(lawyer.userName);
                        $("#lawPwd").val(lawyer.password);
                        /*$("#province").val(lawyer.province);*/
                        //$("#city option [value='"+lawyer.city+"']").attr("selected",true);
                        $("#employmentTime").val(lawyer.employmentTime);
                        $("#lastLoginIp").val(lawyer.loginIP);
                        $("#registerTime").text(lawyer.createdTime);
                        $("#lastLoginTime").text(lawyer.lastLoginTime);
                        $("#score").val(lawyer.score);
                        $("input[name='status'][value='"+lawyer.status+"']").attr("checked",true);
                        $("#coverImage").attr("src",homePath+lawyer.picture);
                        $("#coverUrl").val(homePath+lawyer.picture);
                        $("#imgBox").show();
                        var professionalField = lawyer.professionalField;
                        _renderSelect2(lawyer.fieldVal);//专业领域
                        var isVerified = lawyer.isVerified;
                        if(!isVerified){
                            $("#btnApprove").show();
                        }
                        isVerified = isVerified == true?"审核通过":"未审核";
                        $("#isVerified").text(isVerified);
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setQueryAjaxData () {
        var user = $.getuuuAuth();
        queryParam.username = user._d;
        queryParam.password = user._p;
        queryParam.userType = 2;
    }

    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_edit.validate().form();
        if (formValid) {
            _setAjaxData();
            if (_verifyAjaxData()) {
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success',result.message);
                            setTimeout(function(){

                                location.replace("/view/customercenter/lawyermanagement/lawyer/lawyerManagementList.jsp");
                            }, 1000);
                        }else
                        {
                            FOXKEEPER_UTILS.alert('warning',result.message);
                            $this.html(buttonText).attr("disabled", false);
                        }
                    },
                    beforeSend: function () {// 设置表单提交前方法    
                        $this.html('<i class=\"fa fa-spinner\"></i>&nbsp;正在' + buttonText).attr("disabled", "disabled");
                    }
                });

            }  else {
                return false;
            }
        }
        return false;
    }

    function _setAjaxData () {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.userName = $("#userName").text();
        ajaxdata.account = $.moneyToMul100($("#account").text());
        ajaxdata.name = $("#name").val();
        ajaxdata.licenseid = $("#licenseid").val();
        ajaxdata.idcard = $("#idcard").val();
        ajaxdata.picture = $("#coverUrl").val();
        ajaxdata.mobile = $("#mobile").val();
        ajaxdata.email = $("#email").val();
        ajaxdata.status = $("input[name='status']:checked").val();
        ajaxdata.company = $("#company").val();
        ajaxdata.province = $("#province").val();
        ajaxdata.city = $("#city").val();
        ajaxdata.employmentTime = $("#employmentTime").val();
        ajaxdata.level = $("#level").val();
        ajaxdata.professionalField = $("#professionalField").val().toString();//select2获取值
        ajaxdata.userPassword = $("#lawNewUPwd").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        if (!ajaxdata.picture) {
            FOXKEEPER_UTILS.alert('warning', '请上传律师头像');
            return false;
        }
        return true;
    }

    /** 加载省份信息*/
    function _initProvince(refId){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        queryInfoData.pageNo = 1;
        queryInfoData.pageSize = 1000;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/provinces',
            data: queryInfoData,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    if (result.provinces != null && result.provinces.length > 0) {
                        var data = result.provinces;
                        $("#province").find("option:not(:first)").remove()
                        var slt = '';
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            if(null != refId && refId!=''){
                                if(dataId == refId){
                                    slt = 'selected';
                                }
                            }
                            $("#province").append('<option value="'+dataId+'" '+slt+'>'+obj.name+'</option>');
                            slt = '';
                        }
                    }

                }
            }
        });
    }
    /** 加载省份对应的市信息*/
    function _initCities(provinceId,refId){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        queryInfoData.pageNo = 1;
        queryInfoData.pageSize = 1000;
        queryInfoData.provinceId  = provinceId;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/citys',
            data: queryInfoData,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    if (result.citys != null && result.citys.length > 0) {
                        var data = result.citys;
                        $("#city").find("option:not(:first)").remove();
                        var slt = '';
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            if(null != refId && refId!=''){
                                if(dataId == refId){
                                    slt = 'selected';
                                }
                            }
                            $("#city").append('<option value="'+dataId+'"  '+slt+'>'+obj.name+'</option>');
                        }
                    }

                }
            }
        });
    }


    //专业领域
    function _renderSelect2(professionalFields){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/professionalFields',
            data: queryInfoData,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    if (result.professionalFields != null && result.professionalFields.length > 0) {
                        var data = result.professionalFields;
                        /*$("#professionalField").find("option:not(:first)").remove();*/
                        var fields = professionalFields.split(',');
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            $("#professionalField").append('<option value="'+dataId+'">'+obj.name+'</option>');
                        }
                        if(null != professionalFields && professionalFields != ''){
                            var fields = professionalFields.split(',');
                            for(var j = 0; j < fields.length; j++){
                                var id = fields[j];
                                id = parseInt(id);
                                $("#professionalField").find("option[value='"+id+"']").attr("selected",true);
                            }
                        }
                        $("#professionalField").select2({
                            placeholder: '点击选择专业领域',
                            allowClear: true,
                            maximumSelectionLength: 1
                        });
                    }
                }
            }
        });
    }


    /**
     * 律师审核
     * @param id
     * @private
     */
    function _updateStatus(id) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData.id = id;
        delData.isVerified = 1;
        bootbox.dialog({
            title: "",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '请确认是否审核通过此律师？' +
            '</div></div>',
            buttons: {
                cancel: {
                    label: "取消操作",
                    className: "btn-cancel",
                    callback: $.noop
                },
                confirm: {
                    label: "确定审核",
                    className: "btn-info",
                    callback: function () {
                        jQuery.ajax({
                            dataType: "json",
                            url: webBasePath+'/lawyers/'+id,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    $("#btnApprove").hide();
                                    $("#isVerified").text("审核通过");
                                    FOXKEEPER_UTILS.alert('success', result.message);
                                }
                                else
                                {
                                    FOXKEEPER_UTILS.alert('warning', result.message);
                                }
                            }
                        });
                        return true;
                    }
                }
            }
        })
    }

});
