/**
 * 权限模块
 * 角色-权限树
**/
/*jQuery(function(){
    'use strict';*/
(function($) {
    $.extend({
        permissionsTree:null,
        /**
         * 配置权限tree初始化设置
         */
        settings : {
            view: {
                /*addDiyDom: addDiyDom,
                addHoverDom: addHoverDom,
                removeHoverDom: removeHoverDom,*/
                selectedMulti: false,
                showIcon:false,
            },
            callback: {
                /*onDblClick: zTreeOnDbClick,
                onExpand: zTreeOnExpand,
                beforeExpand: zTreeBeforeOnExpand,
                beforeCollapse: zTreeOnCollapse*/
            },
            data: {
                simpleData: {
                    enable: true,
                    idKey: "id",
                    pIdKey: "parentId",
                    rootPId: 0
                },
                key: {
                    checked:"selected"
                }
            },
            check: {
                enable: true
            }
        },

        /**
         * 获取权限树的一级菜单
         */
        _initFirstMenu:function(menus) {
           /* var queryData = {};
            var user = $.reqHomeUrl();
            queryData.username = user._d;
            queryData.password = user._p;
            queryData.userType = 2;
            $.ajax({
                type: 'POST',
                url: webBasePath + '/userGroups/'+id,
                data: queryData,
                dataType: 'json',
                success: function (ctx) {
                    var menus = ctx.userGroup.menus;*/
                    if(menus){
                        //初始化节点树
                        this.permissionsTree = $.fn.zTree.init($("#permissionsTree"), this.settings, menus);
                        //展开所有节点
                        this.expandAllNodes();
                    }
           /*     }
            });*/
        },

        addHoverDom:function (treeId, treeNode) {
            /*var sObj = $("#" + treeNode.tId + "_span");
            if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
            var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
                + "' title='add node' onfocus='this.blur();'></span>";
            sObj.after(addStr);
            var btn = $("#addBtn_"+treeNode.tId);
            if (btn) btn.bind("click", function(){
                var zTree = $.fn.zTree.getZTreeObj("permissionsTree");
                zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
                return false;
            });*/
        },

        removeHoverDom:function (treeId, treeNode) {
            //$("#addBtn_"+treeNode.tId).unbind().remove();
        },
    
        /**
         *
         * 展开所有节点
         */
        expandAllNodes:function (){
            this.permissionsTree.expandAll(true);
        },

        getCheckedMenuNodes:function(){
            //获取选中的节点数据
            var checkedNodes = this.permissionsTree.getCheckedNodes(true);
            //_getChildrenNodes(checkedNodes);
            var len = checkedNodes.length;
            var nodes = [],node;
            if(len > 0){
                for(var i=0;i<len;i++) {
                    node = checkedNodes[i];
                    nodes.push(node.id);
                }
            }
            return nodes.toString();
        },
        //展开并显示和他关联的亲属节点
        expandRefNodes:function (preNodes, node, zTreeObj) {
            //存在上级节点
            /*var parentNode = node.getParentNode();
            var temp = [];
            if (typeof(parentNode) != "undefined") {
                var siblings = parentNode.children;
                //存在上一个元素
                if (typeof(preNodes) != "undefined" && preNodes.length != 0) {
                    var n;
                    for (var m = 0; m < preNodes.length; m++) {
                        n = preNodes[m];
                        //如果本次节点和上一个节点时通级别节点
                        if (n.parentTId == node.parentTId) {
                            temp.push(n);
                        }
                    }
                }
                temp.push(node);
                //隐藏同级同胞节点
                zTreeObj.hideNodes(siblings);
                zTreeObj.showNodes(temp);
                //显示并展开父节点
                //最后一个参数为true才会调用回调函数
                zTreeObj.expandNode(parentNode, true, false, false, true);
                zTreeObj.showNode(parentNode);
                return parentNode;
            }*/
        },

        //根据条件过滤，只显示和条件匹配的节点，其他隐藏
        searchFilter:function (result, zTreeObj) {
            /*if (typeof(result) == "undefined")return;
            zTreeObj.showNodes(result);
            var preTempNodes = [];
            for (var i = 0; i < result.length; i++) {
                var parentNode, node = result[i];
                parentNode = expandRefNodes(preTempNodes, node, zTreeObj);
                parentNode = expandRefNodes(preTempNodes, parentNode, zTreeObj);
                parentNode = expandRefNodes(preTempNodes, parentNode, zTreeObj);
                preTempNodes.push(node);
            }*/
        },

        //隐藏所有节点
        hideAllTreeNodes:function () {
            /*var treeObj = $.fn.zTree.getZTreeObj("monitorTree");
            var nodes = treeObj.getNodes();
            treeObj.hideNodes(nodes);*/
        },

        //自定义绘制tree样式
        addDiyDom:function (treeId, treeNode) {
            /*//获取节点的li元素
            var $node_li = $("#" + treeNode.tId);
            //获取节点的span元素
            var $node_span = $("#" + treeNode.tId + "_switch");
            //获取节点的a元素
            var $node_a = $("#" + treeNode.tId + "_a");
            //获取节点的a中的ico元素
            var $node_a_ico = $("#" + treeNode.tId + "_ico");
            //获取节点的a中的span元素
            var $node_a_span = $("#" + treeNode.tId + "_span");
            //获取节点的ul元素
            //var $node_ul = $("#" + treeNode.tId + "_ul");
            //获取当前节点level，从0开始
            var level = treeNode.level;
            $node_span.remove();
            //更换节点class
            $node_li.removeClass("level" + level)
            $node_a.removeClass("level" + level);
            if (3 != level) {
                $node_a_ico.remove();
                $node_a_span.remove();
                $node_li.addClass("tree-branch")
                $node_a.addClass("tree-branch-header");
                $node_a.append(nodeIcon(treeNode.name));
            } else if (3 == level) {
                $node_li.addClass("tree-item");
                $node_a.remove();
                $node_li.append(nodeItem(treeNode.name));
                //绑定选中样式
                $node_li.bind("click", function () {
                    var $li = $(this);
                    if (typeof(sltedItem) != "undefined") {
                        sltedItem.removeClass("tree-item-selected");
                    }
                    $li.addClass("tree-item-selected");
                    sltedItem = $li;
                });
            }*/
        },

        //tree双击事件切换节点图标
        zTreeOnDbClick:function (event, treeId, treeNode) {
            return true;
        },
    
        //tree展开
        zTreeOnExpand:function (treeId, treeNode) {
        },

        removeSelected:function (parent) {
            /*var els = parent.find("li");
            els.each(function () {
                var that = $(this);
                if (that.is("tree-item-selected")) {
                    that.removeClass("tree-item-selected");
                }
            });*/
        },

        //展开后样式为减号
        zTreeBeforeOnExpand:function (treeId, treeNode) {
            /*var level = treeNode.level;
            //获取节点的a元素
            var $node_a = $("#" + treeNode.tId + "_a");
            if (3 != level) {
                var $i = $node_a.find("i");
                if ($i.is(".tree-plus")) {
                    $i.removeClass("tree-plus");
                    $i.addClass("tree-minus");
                }
            }*/
            return true;
        },

        //折叠后样式为加号
        zTreeOnCollapse:function(treeId, treeNode) {
            /*var level = treeNode.level;
            //获取节点的a元素
            var $node_a = $("#" + treeNode.tId + "_a");
            if (3 != level) {
                var $i = $node_a.find("i");
                if ($i.is(".tree-minus")) {
                    $i.removeClass("tree-minus");
                    $i.addClass("tree-plus");
                }
            }*/
        },

        //自定义节点icon
        nodeIcon:function(nodeName) {
            /*return "<span class='tree-branch-name'>" +
                "<i class='icon-folder ace-icon tree-plus'></i>" +
                "<span class='tree-label'>" + nodeName + "</span></span>";*/
        },
        //自定义子节点样式
        nodeItem:function(nodeName) {
            /*return "<span>" + nodeName + "</span>";*/
        }

    });

})(jQuery);
    
/*});*/
 