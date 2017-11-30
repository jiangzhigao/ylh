function FOXKEEPER_UTILS() {
 
}
   

/**
 * 提示框
 * @param {[string]} type [提示框类型] success  info  warning danger
 * @param {[string]} info [提示内容]   
 */
FOXKEEPER_UTILS.alert = function(type, info) { 

 
    type =type.toLowerCase(); 
    var _html = '';
    var _code ='';
    if (type== 'success') {
        _code='成功'; 
    } else if (type == 'warning') {    
        _code='警告';
    } else if (type == 'info') {
         _code='提醒';
        
    } else if (type == 'danger') {
        _code='严重';
       
    }

    var _html = '<div style="line-height: 23px;" class="alert alert-'+type+' alert-dismissible fade in">'+
                                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'+
                                            '<strong>'+_code+'：</strong> '+info+'</div>';
    $('#page_alert_container').html(_html);
    //内部跳转到错误信息显示位置
    window.scrollTo(0, 0);
    setTimeout(function() {
        $('#page_alert_container').html('');
    }, 5000);

};
