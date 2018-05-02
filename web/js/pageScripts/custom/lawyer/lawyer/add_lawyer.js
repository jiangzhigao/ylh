jQuery(function(){
    'use strict';
    var $form_add = $('#form_add');
    var ajaxdata = {};
    $form_add.validate({
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
            licenseid:{
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
                required:"律师姓名不能为空"
            },
            licenseid:{
                required:"执照编号不能为空"
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

    _init();

    _bind();

    _render();

    /** 渲染 **/
    function _render() {
        _renderSelect2();
    }

    /** 初始化 **/
    function _init(){
        _initProvince();
    }

    /** 绑定事件 **/
    function _bind() {
        //保存
        $('#btnSave').on('click', function () {
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/lawyers');
        });
        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });
        $('#province').change('click', function () {
            _initProvinceCity($(this));
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
                $("#imgBox").hide();
                /*$processBar.addClass('hide');*/
                return false;
            }

            //图片大小判断
            var imgSize = document.getElementById("lcimage_upload").files[0].size;
            if(imgSize>1024*1000){
                FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于100k');
                $("#lcimage_upload").val("");
                $("#imgBox").hide();
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
                FOXKEEPER_UTILS.alert('warning', '上传出错，请重试');l
            }
        });
        return false;
    }

    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_add.validate().form();
        if (formValid) {
            _setAjaxData();
            if (_verifyAjaxData()) {
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        var recUrl,data = result.lawyers;
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success',result.message);
                            setTimeout(function(){
                                location.replace("/view/customercenter/lawyermanagement/lawyer/lawyerManagementList.jsp");
                            }, 1000);
                        } else
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
        ajaxdata.userName = $("#userName").val();
        ajaxdata.userPassword = hex_md5($("#userPassword").val());
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
        ajaxdata.account = $("#account").val();
        ajaxdata.level = $("#level").val();
        ajaxdata.professionalField = $("#professionalField").val().toString();//select2获取值
        ajaxdata.account = 0;
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        if (!ajaxdata.picture) {
            FOXKEEPER_UTILS.alert('warning', '请上传律师头像');
            return false;
        }
        return true;
    }

    function _initProvince(){
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
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            $("#province").append('<option value="'+dataId+'">'+obj.name+'</option>');
                        }
                    }

                }
            }
        });
    }
    //根据省份获取市区信息
    function _initProvinceCity(ele){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        queryInfoData.pageNo = 1;
        queryInfoData.pageSize = 1000;
        queryInfoData.provinceId  = ele.val();
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
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            $("#city").append('<option value="'+dataId+'">'+obj.name+'</option>');
                        }
                    }
                }
            }
        });
    }



    //专业领域
    function _renderSelect2(){
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
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            $("#professionalField").append('<option value="'+dataId+'">'+obj.name+'</option>');
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
});
