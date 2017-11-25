jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            title:{
                required:true,
            },
            content:{
                required:true,
            }
        },
        messages:{
            title:{
                required:"标题不能为空"
            },
            content:{
                required:"内容不能为空"
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
        // var id = parameter.dataId;
        var id = 1;
        // if(id){
        _initData(id);
        // }
    }

    function _bind () {
        //保存
        $('#btnSave').on('click', function () {
            var parameter = $.getParameters();
            var id = parameter.dataId;
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/loopImages/'+id);
        });

        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });
        //图片上传
        $('body').on('change', 'input[name$="_upload"]', function() {
            var _this = $(this);
            var nameIndex = _this.attr("name").substring(0,1);
            nameIndex = nameIndex-1;
            var files = ['1_upload','2_upload','3_upload'];
            files.splice(nameIndex,1);
            alert(files);
            $.each(files,function (i,v) {
                $('#' +v ).val("");
            });
            var fileName = $(this).val();
            /*var $processBar = _this.parent().parent().prev('div');*/
            /*$processBar.removeClass('hide');*/
            if (!fileName.match('\\.(gif|png|jpe?g)$')) {
                FOXKEEPER_UTILS.alert('warning', '只能上传图片格式，如：gif,png,jpg,jpeg!');
                _this.val("");
                $('#' + _this.attr("mid")).attr("src", "/images/nopica.png");
                $('#' + _this.attr("uid")).val("");
                /*$processBar.addClass('hide');*/
                return false;
            }

            //图片大小判断
            /*if(document.getElementById("lcimage_upload").files[0]) {
                var imgSize = document.getElementById("lcimage_upload").files[0].size;
                if(imgSize>1024*1000){
                    FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于100k');
                    $("#lcimage_upload").val("");
                    $("#imgBox").hide();
                    return false;
                }
            }
            if(document.getElementById("lcimage_upload1").files[1]) {
                var imgSize1 = document.getElementById("lcimage_upload1").files[0].size;
                if(imgSize1>1024*1000){
                    FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于100k');
                    $("#lcimage_upload1").val("");
                    $("#imgBox1").hide();
                    return false;
                }
            }
            if(document.getElementById("lcimage_upload2").files[2]) {
                var imgSize2 = document.getElementById("lcimage_upload2").files[0].size;
                if(imgSize2>1024*1000){
                    FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于100k');
                    $("#lcimage_upload2").val("");
                    $("#imgBox2").hide();
                    return false;
                }
            }*/
            if (fileName != "") {
                return ajaxFileUpload(_this, _this.attr("id"), null);
            }
        });
    }

    function ajaxFileUpload($file, fileId, $processBar) {
        var user = $.getuuuAuth();
        var fileName = $file.val();
        var fileSuffix = fileName.substring(fileName.indexOf(".") + 1, fileName.length);
        var formData = new FormData();
        formData.append('file', $file[0].files[0]);
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
            processData: false,      //需要正确设置此项
            contentType: false,
            enctype: 'multipart/form-data', //需要正确设置此项
            data: formData,
            success: function (data) {
                if (data.success) {
                    var url = data.url;
                    $('#' + $file.attr("mid")).attr("src", url);
                    $('#' + $file.attr("uid")).val(url);
                    $('#' + $file.attr("mid")).parent().show();
                    // $("#imgBox1").show();
                    // $("#imgBox2").show();
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

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/loopImages/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var loopImage = result.loopImage;
                    if(loopImage){
                        $("#dataId").val(loopImage.id);
                        $("#coverImage").attr("src",homePath + loopImage.image1);
                        $("#coverUrl").val(homePath + loopImage.picture);
                        $("#coverImage1").attr("src",homePath + loopImage.image2);
                        $("#coverUrl1").val(homePath + loopImage.picture);
                        $("#coverImage2").attr("src",homePath + loopImage.image3);
                        $("#coverUrl2").val(homePath + loopImage.picture);

                        $("#imgBox").show();
                        $("#imgBox1").show();
                        $("#imgBox2").show();
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setQueryAjaxData () {
        var agreementHelps = $.getuuuAuth();
        queryParam.username = agreementHelps._d;
        queryParam.password = agreementHelps._p;
        queryParam.userType = 2;
    }

    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_edit.validate().form();
        if (formValid) {
            _setAjaxData();
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success',result.message);
                            setTimeout(function(){
                                // location.replace("/view/internet/lawfirm/lawFirmList.jsp");
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
            }

        return false;
    }

    function _setAjaxData () {
        var professionalField = $.reqHomeUrl();
        ajaxdata.username = professionalField._d;
        ajaxdata.password = professionalField._p;
        ajaxdata.userType = 2;
        ajaxdata.id = 1;
        ajaxdata.image1 = $("#coverUrl").val();
        ajaxdata.image2 = $("#coverUrl1").val();
        ajaxdata.image3 = $("#coverUrl2").val();
    }
});
