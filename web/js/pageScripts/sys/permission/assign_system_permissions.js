/**
 * 权限模块
 * 角色-资源分配
**/
jQuery(function(){
    'use strict';
    var $form_assign_permissions = $('#form_assign_permissions');
    var ajaxdata = {};
    var nodes = [];
    $form_assign_permissions.validate({
        /*rules: {
        	adverName: {
                required: true,
                minlength: 2,
                maxlength: 36
            },
            adverBlock: {
            	required: true
            },
            communityName: {
                required: true
            }
        }*/
    });
    
    /** 初始化 */
    _init();
    /** 绑定 */
    _bind();
    
    function _init() {}

    function _bind() {
    	//保存
    	$('#assignBtn').on('click', function () {
    		var $this = $(this);
    		_ajax($this, '权限分配');
    	});
    }

    function _ajax($this, buttonText) {
        var formValid = $form_assign_permissions.validate().form();
        if (formValid) {
        	_setAjaxData();
        	if (_verifyAjaxData()) {
        		jQuery.ajax({
        			dataType: "json",
        			url: webBasePath + "/authority/assignedPermission",
        			data: ajaxdata,
        			type: "POST",
        			success: function (result) {
        				if (result.code == 1) {
        					FOXKEEPER_UTILS.alert('success',result.msg);
        					setTimeout(function(){
        						location.replace(webBasePath + '/authority/roleList');
        					}, 1000);
        				}
        				else
        				{
        					FOXKEEPER_UTILS.alert('warning',result.msg);
        					$this.html(buttonText).attr("disabled", false);
        				}
        			},
        			beforeSend: function () {// 设置表单提交前方法    
        				$this.html('<i class=\"fa fa-spinner\"></i>&nbsp;正在' + buttonText).attr("disabled", "disabled");
        			}
        		});
        	}  else {
        		$('html, body').animate({scrollTop: 0}, 800);
        		return false;
        	}
        } else {
        	$('html, body').animate({scrollTop: 0}, 800);
        }
        return false;
    }

    function _setAjaxData () {
		ajaxdata.checkedPermissions = _getCheckedNodes();
		ajaxdata.roleId = $('#roleId').val();
    }
    
    function _getCheckedNodes(){
    	//获取选中的节点数据
    	var checkedNodes = permissionsTree.getCheckedNodes(true);
    	_getChildrenNodes(checkedNodes);
    	return JSON.stringify(checkedNodes);
    }
    
    //递归获取选中的权限节点
    function _getChildrenNodes(checkedNodes){
    	var len = checkedNodes.length;
    	if(len > 0){
    		var temp = {};
    		var node;
    		for(var i=0;i<len;i++){
    			node = checkedNodes[i];
    			temp.id = node.id;
    			temp.pId = node.pId;
    			temp.menuId = node.menuId;
    			temp.funcId = node.funcId;
    			nodes.push(temp);
    			if(node.isParent==true){
    				_getChildrenNodes(node.children);
    			}
    		}
    	}
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        /*if (!ajaxdata.serviceCommunityId) {
            FOXKEEPER_UTILS.alert('warning', '请选择小区');
            return false;
        }*/
    	return true;
    }
});
