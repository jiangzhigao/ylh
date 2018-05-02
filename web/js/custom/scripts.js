jQuery(function ($) {
    
    'use strict';
    
    
    //������������
    $.extend({
        getUrlVars: function () {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function (name) {
            return $.getUrlVars()[name];
        }
    });
    
    
    var FOXKEEPER_SETTINGS = window.FOXKEEPER_SETTINGS || {};
    
    
    
    
    
    /*--------------------------------
          Window Based Layout
      --------------------------------*/
     FOXKEEPER_SETTINGS.windowBasedLayout = function () {
        var width = $(window).innerWidth();
        //console.log(width);
        
        if ($("body").hasClass("chat-open") || $("body").hasClass("sidebar-collapse")) {
            
            FOXKEEPER_SETTINGS.mainmenuCollapsed();

        } else if (width < 1025) {
            
            // small window
            $(".page-topbar").addClass("sidebar_shift").removeClass("chat_shift");
            $(".page-sidebar").addClass("collapseit").removeClass("expandit");
            $("#main-content").addClass("sidebar_shift").removeClass("chat_shift");
            $(".page-chatapi").removeClass("showit").addClass("hideit");
            $(".chatapi-windows").removeClass("showit").addClass("hideit");
            FOXKEEPER_SETTINGS.mainmenuCollapsed();

        } else {
            
            // large window
            $(".page-topbar").removeClass("sidebar_shift chat_shift");
            $(".page-sidebar").removeClass("collapseit chat_shift");
            $("#main-content").removeClass("sidebar_shift chat_shift");
            FOXKEEPER_SETTINGS.mainmenuScroll();
        }
          

    }
    
    
    /*--------------------------------
          Login Page
      --------------------------------*/
     FOXKEEPER_SETTINGS.loginPage = function () {
        
        var height = $(window).innerHeight();
        var formheight = $("#login").height();
        var newheight = (height - formheight) / 2;
        //console.log(height+" - "+ formheight + " / "+ newheight);
        $('#login').css('margin-top', +newheight + 'px');
        
        if ($('#login #user_login').length) {
            var d = document.getElementById('user_login');
            d.focus();
        }

    };
    
    
    
    /*--------------------------------
          Search Page
      --------------------------------*/
     FOXKEEPER_SETTINGS.searchPage = function () {
        
        //$('.search_data .tab-pane').perfectScrollbar({
        //    suppressScrollX: true
        //});
        var search = $(".search-page-input");
        if (search.length) {
            search.focus();
        }
    };
    
    
    /*--------------------------------
         Viewport Checker
      --------------------------------*/
     FOXKEEPER_SETTINGS.viewportElement = function () {
        
        if ($.isFunction($.fn.viewportChecker)) {
            
            $('.inviewport').viewportChecker({
                callbackFunction: function (elem, action) {
                     //setTimeout(function(){
                     //elem.html((action == "add") ? 'Callback with 500ms timeout: added class' : 'Callback with 500ms timeout: removed class');
                     //},500);
                }
            });
            
            
            $('.number_counter').viewportChecker({
                classToAdd: 'start_timer',
                offset: 10,
                callbackFunction: function (elem) {
                    $('.start_timer:not(.counted)').each(count);
                     //$(elem).removeClass('number_counter');
                }
            });

        }
        
        // start count
        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options).addClass("counted");
        }
    };
    
    
    
    /*--------------------------------
         Sortable / Draggable Panels
      --------------------------------*/
     FOXKEEPER_SETTINGS.draggablePanels = function () {
        
        if ($.isFunction($.fn.sortable)) {
            $(".sort_panel").sortable({
                connectWith: ".sort_panel",
                handle: "header.panel_header",
                cancel: ".panel_actions",
                placeholder: "portlet-placeholder"
            });
        }
    };
    
    
    
    /*--------------------------------
          Breadcrumb autoHidden
      --------------------------------*/
     FOXKEEPER_SETTINGS.breadcrumbAutoHidden = function () {
        
        $('.breadcrumb.auto-hidden a').on('mouseover', function () {
            $(this).removeClass("collapsed");
        });
        $('.breadcrumb.auto-hidden a').on('mouseout', function () {
            $(this).addClass("collapsed");
        });

    };
    
    
    
    
    /*--------------------------------
          Section Box Actions
      --------------------------------*/
     FOXKEEPER_SETTINGS.sectionBoxActions = function () {
        
        $('section.box .actions .box_toggle').on('click', function () {
            
            var content = $(this).parent().parent().parent().find(".content-body");
            if (content.hasClass("collapsed")) {
                content.removeClass("collapsed").slideDown(500);
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            } else {
                content.addClass("collapsed").slideUp(500);
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            }

        });
        
        $('section.box .actions .box_close').on('click', function () {
            content = $(this).parent().parent().parent().remove();
        });



    };
    
    
    
    
    
    
    /*--------------------------------
          Main Menu Scroll
      --------------------------------*/
     FOXKEEPER_SETTINGS.mainmenuScroll = function () {
        
        //        console.log("expand scroll menu");
        
        
        var topbar = $(".page-topbar").height();
        var projectinfo = $(".project-info").innerHeight();
        
        var height = $(window).innerHeight() - topbar - projectinfo;
        //$('#main-menu-wrapper').height(height).perfectScrollbar({
        //    suppressScrollX: true
        //});
        $('#main-menu-wrapper').height(height);
        
        $("#main-menu-wrapper .wraplist").height('auto');
        
        
        /*show first sub menu of open menu item only - opened after closed*/
        // > in the selector is used to select only immediate elements and not the inner nested elements.
        $("li.open > .sub-menu").attr("style", "display:block;");


    };
    
    
    /*--------------------------------
          Collapsed Main Menu
      --------------------------------*/
     FOXKEEPER_SETTINGS.mainmenuCollapsed = function () {
        
        if ($(".page-sidebar.chat_shift #main-menu-wrapper").length > 0 || $(".page-sidebar.collapseit #main-menu-wrapper").length > 0) {
            //console.log("collapse menu");
            var topbar = $(".page-topbar").height();
            var windowheight = $(window).innerHeight();
            var minheight = windowheight - topbar;
            var fullheight = $(".page-container #main-content .wrapper").height();
            
            var height = fullheight;
            
            if (fullheight < minheight) {
                height = minheight;
            }
            
            //$('#main-menu-wrapper').perfectScrollbar('destroy');
            
            $('.page-sidebar.chat_shift #main-menu-wrapper .wraplist, .page-sidebar.collapseit #main-menu-wrapper .wraplist').height(height);
            
            //hide sub menu of open menu item
            $("li.open .sub-menu").attr("style", "");

        }

    };
    
    
    
    
    /*--------------------------------
          Main Menu
      --------------------------------*/
     FOXKEEPER_SETTINGS.mainMenu = function () {
        $('#main-menu-wrapper li a').click(function (e) {
            
            if ($(this).next().hasClass('sub-menu') === false) {
                return;
            }
            
            var parent = $(this).parent().parent();
            var sub = $(this).next();
            
            parent.children('li.open').children('.sub-menu').slideUp(200);
            parent.children('li.open').children('a').children('.arrow').removeClass('open');
            parent.children('li').removeClass('open');
            
            if (sub.is(":visible")) {
                $(this).find(".arrow").removeClass("open");
                sub.slideUp(200);
            } else {
                $(this).parent().addClass("open");
                $(this).find(".arrow").addClass("open");
                sub.slideDown(200);
            }

        });
    };
    
    
    
    
    
    /*--------------------------------
          Top Bar
      --------------------------------*/
     FOXKEEPER_SETTINGS.pageTopBar = function () {
        $('.page-topbar li.searchform .input-group-addon').click(function (e) {
            $(this).parent().parent().toggleClass("focus");
            $(this).parent().find("input").focus();
        });

         //$('.page-topbar li .dropdown-menu .list').perfectScrollbar({
         //    suppressScrollX: true
         //});

    };
    
    
    /*--------------------------------
          Extra form settings
      --------------------------------*/
     FOXKEEPER_SETTINGS.extraFormSettings = function () {
        
        // transparent input group focus/blur
        $('.input-group .form-control').focus(function (e) {
            $(this).parent().find(".input-group-addon").addClass("input-focus");
            $(this).parent().find(".input-group-btn").addClass("input-focus");
        });
        
        $('.input-group .form-control').blur(function (e) {
            $(this).parent().find(".input-group-addon").removeClass("input-focus");
            $(this).parent().find(".input-group-btn").removeClass("input-focus");
        });

    };
    
    
    
    /*--------------------------------
          Tocify
      --------------------------------*/
     FOXKEEPER_SETTINGS.tocifyScrollMenu = function () {
        if ($.isFunction($.fn.tocify)) {
            var toc = $("#toc").tocify({
                selectors: "h2,h3,h4,h5",
                context: ".tocify-content",
                extendPage: false
            }).data("toc-tocify");
        }
    };
    
    
    
    
    /*--------------------------------
          Tooltips & Popovers
      --------------------------------*/
     FOXKEEPER_SETTINGS.tooltipsPopovers = function () {
        
        $('[rel="tooltip"]').each(function () {
            var animate = $(this).attr("data-animate");
            var colorclass = $(this).attr("data-color-class");
            $(this).tooltip({
                template: '<div class="tooltip ' + animate + ' ' + colorclass + '"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
            });
        });
        
        $('[rel="popover"]').each(function () {
            var animate = $(this).attr("data-animate");
            var colorclass = $(this).attr("data-color-class");
            $(this).popover({
                template: '<div class="popover ' + animate + ' ' + colorclass + '"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            });
        });

    };
    
    
    
    
    
    /*--------------------------------
          iCheck
      --------------------------------*/
     FOXKEEPER_SETTINGS.iCheck = function () {
        
        
        
        if ($.isFunction($.fn.iCheck)) {
            
            
            $('input[type="checkbox"].iCheck').iCheck({
                checkboxClass: 'icheckbox_minimal',
                radioClass: 'iradio_minimal',
                increaseArea: '20%'
            });
            
            
            var x;
            var colors = ["-green", "-red", "-yellow", "-blue", "-aero", "-orange", "-grey", "-pink", "-purple", "-white"];
            
            for (x = 0; x < colors.length; x++) {
                
                if (x == 0) {
                    $('input.icheck-minimal').iCheck({
                        checkboxClass: 'icheckbox_minimal' + colors[x],
                        radioClass: 'iradio_minimal' + colors[x],
                        increaseArea: '20%'
                    });
                    
                    $('input.skin-square').iCheck({
                        checkboxClass: 'icheckbox_square' + colors[x],
                        radioClass: 'iradio_square' + colors[x],
                        increaseArea: '20%'
                    });
                    
                    $('input.skin-flat').iCheck({
                        checkboxClass: 'icheckbox_flat' + colors[x],
                        radioClass: 'iradio_flat' + colors[x],
                    });
                    
                    
                    $('input.skin-line').each(function () {
                        var self = $(this),
                            label = self.next(),
                            label_text = label.text();
                        
                        label.remove();
                        self.iCheck({
                            checkboxClass: 'icheckbox_line' + colors[x],
                            radioClass: 'iradio_line' + colors[x],
                            insert: '<div class="icheck_line-icon"></div>' + label_text
                        });
                    });

                } // end x = 0
                
                $('input.icheck-minimal' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_minimal' + colors[x],
                    radioClass: 'iradio_minimal' + colors[x],
                    increaseArea: '20%'
                });
                
                
                $('input.skin-square' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_square' + colors[x],
                    radioClass: 'iradio_square' + colors[x],
                    increaseArea: '20%'
                });
                
                
                $('input.skin-flat' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_flat' + colors[x],
                    radioClass: 'iradio_flat' + colors[x],
                });
                
                
                $('input.skin-line' + colors[x]).each(function () {
                    var self = $(this),
                        label = self.next(),
                        label_text = label.text();
                    
                    label.remove();
                    self.iCheck({
                        checkboxClass: 'icheckbox_line' + colors[x],
                        radioClass: 'iradio_line' + colors[x],
                        insert: '<div class="icheck_line-icon"></div>' + label_text
                    });
                });

            } // end for loop


        }
    };
    
    
    
    /*--------------------------------
          Other Form component Scripts
      --------------------------------*/
     FOXKEEPER_SETTINGS.otherScripts = function () {
        
        
        
        /*--------------------------------*/
        
        
        if ($.isFunction($.fn.autosize)) {
            $(".autogrow").autosize();
        }
        
        /*--------------------------------*/
        
        
        
        
        // Input Mask
        if ($.isFunction($.fn.inputmask)) {
            $("[data-mask]").each(function (i, el) {
                var $this = $(el),
                    mask = $this.data('mask').toString(),
                    opts = {
                        numericInput: getValue($this, 'numeric', false),
                        radixPoint: getValue($this, 'radixPoint', ''),
                        rightAlign: getValue($this, 'numericAlign', 'left') == 'right'
                    },
                    placeholder = getValue($this, 'placeholder', ''),
                    is_regex = getValue($this, 'isRegex', '');
                
                if (placeholder.length) {
                    opts[placeholder] = placeholder;
                }
                
                
                if (mask.toLowerCase() == "phone") {
                    mask = "(999) 999-9999";
                }
                
                if (mask.toLowerCase() == "email") {
                    mask = 'Regex';
                    opts.regex = "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}";
                }
                
                if (mask.toLowerCase() == "fdecimal") {
                    mask = 'decimal';
                    $.extend(opts, {
                        autoGroup: true,
                        groupSize: 3,
                        radixPoint: getValue($this, 'rad', '.'),
                        groupSeparator: getValue($this, 'dec', ',')
                    });
                }
                
                
                if (mask.toLowerCase() == "currency" || mask.toLowerCase() == "rcurrency") {
                    
                    var sign = getValue($this, 'sign', '$');;
                    
                    mask = "999,999,999.99";
                    if (mask.toLowerCase() == 'rcurrency') {
                        mask += ' ' + sign;
                    } else {
                        mask = sign + ' ' + mask;
                    }
                    
                    opts.numericInput = true;
                    opts.rightAlignNumerics = false;
                    opts.radixPoint = '.';

                }
                
                if (is_regex) {
                    opts.regex = mask;
                    mask = 'Regex';
                }
                
                $this.inputmask(mask, opts);
            });
        }
        
        
        /*---------------------------------*/
        
        // autoNumeric
        if ($.isFunction($.fn.autoNumeric)) {
            $('.autoNumeric').autoNumeric('init');
        }
        
        /*---------------------------------*/
        
        // Slider
        if ($.isFunction($.fn.slider)) {
            $(".slider").each(function (i, el) {
                var $this = $(el),
                    $label_1 = $('<span class="ui-label"></span>'),
                    $label_2 = $label_1.clone(),

                    orientation = getValue($this, 'vertical', 0) != 0 ? 'vertical' : 'horizontal',

                    prefix = getValue($this, 'prefix', ''),
                    postfix = getValue($this, 'postfix', ''),

                    fill = getValue($this, 'fill', ''),
                    $fill = $(fill),

                    step = getValue($this, 'step', 1),
                    value = getValue($this, 'value', 5),
                    min = getValue($this, 'min', 0),
                    max = getValue($this, 'max', 100),
                    min_val = getValue($this, 'min-val', 10),
                    max_val = getValue($this, 'max-val', 90),

                    is_range = $this.is('[data-min-val]') || $this.is('[data-max-val]'),

                    reps = 0;
                
                
                // Range Slider Options
                if (is_range) {
                    $this.slider({
                        range: true,
                        orientation: orientation,
                        min: min,
                        max: max,
                        values: [min_val, max_val],
                        step: step,
                        slide: function (e, ui) {
                            var min_val = (prefix ? prefix : '') + ui.values[0] + (postfix ? postfix : ''),
                                max_val = (prefix ? prefix : '') + ui.values[1] + (postfix ? postfix : '');
                            
                            $label_1.html(min_val);
                            $label_2.html(max_val);
                            
                            if (fill)
                                $fill.val(min_val + ',' + max_val);
                            
                            reps++;
                        },
                        change: function (ev, ui) {
                            if (reps == 1) {
                                var min_val = (prefix ? prefix : '') + ui.values[0] + (postfix ? postfix : ''),
                                    max_val = (prefix ? prefix : '') + ui.values[1] + (postfix ? postfix : '');
                                
                                $label_1.html(min_val);
                                $label_2.html(max_val);
                                
                                if (fill)
                                    $fill.val(min_val + ',' + max_val);
                            }
                            
                            reps = 0;
                        }
                    });
                    
                    var $handles = $this.find('.ui-slider-handle');
                    
                    $label_1.html((prefix ? prefix : '') + min_val + (postfix ? postfix : ''));
                    $handles.first().append($label_1);
                    
                    $label_2.html((prefix ? prefix : '') + max_val + (postfix ? postfix : ''));
                    $handles.last().append($label_2);
                }
                 // Normal Slider
                else {
                    
                    $this.slider({
                        range: getValue($this, 'basic', 0) ? false : "min",
                        orientation: orientation,
                        min: min,
                        max: max,
                        value: value,
                        step: step,
                        slide: function (ev, ui) {
                            var val = (prefix ? prefix : '') + ui.value + (postfix ? postfix : '');
                            
                            $label_1.html(val);
                            
                            
                            if (fill)
                                $fill.val(val);
                            
                            reps++;
                        },
                        change: function (ev, ui) {
                            if (reps == 1) {
                                var val = (prefix ? prefix : '') + ui.value + (postfix ? postfix : '');
                                
                                $label_1.html(val);
                                
                                if (fill)
                                    $fill.val(val);
                            }
                            
                            reps = 0;
                        }
                    });
                    
                    var $handles = $this.find('.ui-slider-handle');
                    //$fill = $('<div class="ui-fill"></div>');
                    
                    $label_1.html((prefix ? prefix : '') + value + (postfix ? postfix : ''));
                    $handles.html($label_1);

                     //$handles.parent().prepend( $fill );

                     //$fill.width($handles.get(0).style.left);
                }

            })
        }
        
        
        
        /*------------- Color Slider widget---------------*/
        
        function hexFromRGB(r, g, b) {
            var hex = [
                r.toString(16),
                g.toString(16),
                b.toString(16)
            ];
            $.each(hex, function (nr, val) {
                if (val.length === 1) {
                    hex[nr] = "0" + val;
                }
            });
            return hex.join("").toUpperCase();
        }
        
        function refreshSwatch() {
            var red = $("#slider-red").slider("value"),
                green = $("#slider-green").slider("value"),
                blue = $("#slider-blue").slider("value"),
                hex = hexFromRGB(red, green, blue);
            $("#slider-swatch").css("background-color", "#" + hex);
        }
        
        
        if ($.isFunction($.fn.slider)) {
            
            $(function () {
                $("#slider-red, #slider-green, #slider-blue").slider({
                    orientation: "horizontal",
                    range: "min",
                    max: 255,
                    value: 127,
                    slide: refreshSwatch,
                    change: refreshSwatch
                });
                $("#slider-red").slider("value", 235);
                $("#slider-green").slider("value", 70);
                $("#slider-blue").slider("value", 60);
            });
        }
        
        
        
        /*-------------------------------------*/
        
        /*--------------------------------*/
        
        
        // Spinner
        if ($.isFunction($.fn.spinner)) {
            
            $("#spinner").spinner();
            
            $("#spinner2").spinner({
                min: 5,
                max: 2500,
                step: 25,
                start: 1000,
                numberFormat: "C"
            });
            
            
            $("#spinner3").spinner({
                spin: function (event, ui) {
                    if (ui.value > 10) {
                        $(this).spinner("value", -10);
                        return false;
                    } else if (ui.value < -10) {
                        $(this).spinner("value", 10);
                        return false;
                    }
                }
            });
        }
        /*------------------------------------*/
        
        // tagsinput
        if ($.isFunction($.fn.tagsinput)) {
            
            // categorize tags input
            var i = -1,
                colors = ['primary', 'info', 'warning', 'success'];
            
            colors = shuffleArray(colors);
            
            $("#tagsinput-2").tagsinput({
                tagClass: function () {
                    i++;
                    return "label label-" + colors[i % colors.length];
                }
            });
            
            
            $(".mail_compose_to").tagsinput({
                tagClass: function () {
                    i++;
                    return "label label-" + colors[i % colors.length];
                }
            });


        }
        
        // Just for demo purpose
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        
        /*----------------------------*/
        
        
        // datepicker
        if ($.isFunction($.fn.datepicker)) {
            $(".datepicker").each(function (i, e) {
                var $this = $(e),
                    options = {
                        minViewMode: getValue($this, 'minViewMode', 0),
                        format: getValue($this, 'format', 'mm/dd/yyyy'),
                        startDate: getValue($this, 'startDate', ''),
                        endDate: getValue($this, 'endDate', ''),
                        daysOfWeekDisabled: getValue($this, 'disabledDays', ''),
                        startView: getValue($this, 'startView', 0)
                    },
                    $nxt = $this.next(),
                    $prv = $this.prev();
                
                
                $this.datepicker(options);
                
                if ($nxt.is('.input-group-addon') && $nxt.has('a')) {
                    $nxt.on('click', function (ev) {
                        ev.preventDefault();
                        $this.datepicker('show');
                    });
                }
                
                if ($prv.is('.input-group-addon') && $prv.has('a')) {
                    $prv.on('click', function (ev) {
                        ev.preventDefault();
                        
                        $this.datepicker('show');
                    });
                }
            });
        }
        
        
        
        /*-------------------------------------------*/
        
        
        
        // Date Range Picker
        if ($.isFunction($.fn.daterangepicker)) {
            $(".daterange").each(function (i, e) {
                // Change the range as you desire
                var ranges = {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Last 7 Days': [moment().subtract('days', 6), moment()],
                    'Last 30 Days': [moment().subtract('days', 29), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                };
                
                var $this = $(e),
                    options = {
                        format: getValue($this, 'format', 'MM/DD/YYYY'),
                        timePicker: getValue($this, 'timePicker', false),
                        timePickerIncrement: getValue($this, 'timePickerIncrement', false),
                        separator: getValue($this, 'separator', ' - '),
                    },
                    min_date = getValue($this, 'minDate', ''),
                    max_date = getValue($this, 'maxDate', ''),
                    start_date = getValue($this, 'startDate', ''),
                    end_date = getValue($this, 'endDate', '');
                
                if ($this.hasClass('add-date-ranges')) {
                    options['ranges'] = ranges;
                }
                
                if (min_date.length) {
                    options['minDate'] = min_date;
                }
                
                if (max_date.length) {
                    options['maxDate'] = max_date;
                }
                
                if (start_date.length) {
                    options['startDate'] = start_date;
                }
                
                if (end_date.length) {
                    options['endDate'] = end_date;
                }
                
                
                $this.daterangepicker(options, function (start, end) {
                    var drp = $this.data('daterangepicker');
                    
                    if ($this.hasClass('daterange-text')) {
                        $this.find('span').html(start.format(drp.format) + drp.separator + end.format(drp.format));
                    }
                });
                
                if (typeof options['ranges'] == 'object') {
                    $this.data('daterangepicker').container.removeClass('show-calendar');
                }
            });
        }
        
        
        
        
        /*-------------------------------------*/
        
        
        // Timepicker
        if ($.isFunction($.fn.timepicker)) {
            $(".timepicker").each(function (i, e) {
                var $this = $(e),
                    options = {
                        template: getValue($this, 'template', false),
                        showSeconds: getValue($this, 'showSeconds', false),
                        defaultTime: getValue($this, 'defaultTime', 'current'),
                        showMeridian: getValue($this, 'showMeridian', true),
                        minuteStep: getValue($this, 'minuteStep', 15),
                        secondStep: getValue($this, 'secondStep', 15)
                    },
                    $nxt = $this.next(),
                    $prv = $this.prev();
                
                $this.timepicker(options);
                
                if ($nxt.is('.input-group-addon') && $nxt.has('a')) {
                    $nxt.on('click', function (ev) {
                        ev.preventDefault();
                        
                        $this.timepicker('showWidget');
                    });
                }
                
                if ($prv.is('.input-group-addon') && $prv.has('a')) {
                    $prv.on('click', function (ev) {
                        ev.preventDefault();
                        
                        $this.timepicker('showWidget');
                    });
                }
            });
        }
        
        
        
        /*-------------------------------------*/
        
        
        // DateTimepicker
        if ($.isFunction($.fn.datetimepicker)) {
            
            $('.form_datetime').datetimepicker({
                //language:  'fr',
                format: "yyyy-mm-dd hh:ii",
                weekStart: 1,
                todayBtn: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 0
            });
            
            
            $('.form_datetime_meridian').datetimepicker({
                //language:  'fr',
                format: "dd MM yyyy - hh:ii",
                weekStart: 1,
                todayBtn: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 1
            });
            
            
            $('.form_datetime_lang').datetimepicker({
                language: 'fr',
                format: "yyyy-mm-dd hh:ii",
                weekStart: 1,
                todayBtn: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 0
            });


             /*    $('.form_date').datetimepicker({
                     weekStart: 1,
                     todayBtn:  1,
                     autoclose: 1,
                     todayHighlight: 1,
                     startView: 2,
                     minView: 2,
                     forceParse: 0
                 });
                 $('.form_time').datetimepicker({
                     //language:  'fr',
                     weekStart: 1,
                     todayBtn:  1,
                     autoclose: 1,
                     todayHighlight: 1,
                     startView: 1,
                     minView: 0,
                     maxView: 1,
                     forceParse: 0
                 });*/

        }
        
        /*-------------------------------------*/
        
        
        
        
        
        // Colorpicker
        if ($.isFunction($.fn.colorpicker)) {
            $(".colorpicker").each(function (i, e) {
                var $this = $(e),
                    options = {},
                    $nxt = $this.next(),
                    $prv = $this.prev(),
                    $view = $this.siblings('.input-group-addon').find('.sel-color');
                
                $this.colorpicker(options);
                
                if ($nxt.is('.input-group-addon') && $nxt.has('a')) {
                    $nxt.on('click', function (ev) {
                        ev.preventDefault();
                        
                        $this.colorpicker('show');
                    });
                }
                
                if ($prv.is('.input-group-addon') && $prv.has('a')) {
                    $prv.on('click', function (ev) {
                        ev.preventDefault();
                        
                        $this.colorpicker('show');
                    });
                }
                
                if ($view.length) {
                    $this.on('changeColor', function (ev) {
                        
                        $view.css('background-color', ev.color.toHex());
                    });
                    
                    if ($this.val().length) {
                        $view.css('background-color', $this.val());
                    }
                }
            });
        }
        
        
        /*--------------------------------------*/
        
        
        // select2
        if ($.isFunction($.fn.select2)) {
            
            $("#s2example-1").select2({
                placeholder: 'Select your country...',
                allowClear: true
            }).on('select2-open', function () {
                // Adding Custom Scrollbar
                //$(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
                $(this).data('select2').results;
            });
            
            
            $("#s2example-2").select2({
                placeholder: 'Choose your favorite US Countries',
                allowClear: true
            }).on('select2-open', function () {
                // Adding Custom Scrollbar
                //                $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
                $(this).data('select2').results;
            });
            
            
            $("#s2example-4").select2({
                minimumInputLength: 1,
                placeholder: 'Search',
                ajax: {
                    url: "data/select2-remote-data.php",
                    dataType: 'json',
                    quietMillis: 100,
                    data: function (term, page) {
                        return {
                            limit: -1,
                            q: term
                        };
                    },
                    results: function (data, page) {
                        return {
                            results: data
                        }
                    }
                },
                formatResult: function (student) {
                    return "<div class='select2-user-result'>" + student.name + "</div>";
                },
                formatSelection: function (student) {
                    return student.name;
                }

            });
        }
        /*------------------------------------*/
        
        
        
        
        //multiselect start
        
        if ($.isFunction($.fn.multiSelect)) {
            
            $('#my_multi_select1').multiSelect();
            $('#my_multi_select2').multiSelect({
                selectableOptgroup: true
            });
            
            $('#my_multi_select3').multiSelect({
                selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
                selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
                afterInit: function (ms) {
                    var that = this,
                        $selectableSearch = that.$selectableUl.prev(),
                        $selectionSearch = that.$selectionUl.prev(),
                        selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                        selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';
                    
                    that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                         .on('keydown', function (e) {
                        if (e.which === 40) {
                            that.$selectableUl.focus();
                            return false;
                        }
                    });
                    
                    that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                         .on('keydown', function (e) {
                        if (e.which == 40) {
                            that.$selectionUl.focus();
                            return false;
                        }
                    });
                },
                afterSelect: function () {
                    this.qs1.cache();
                    this.qs2.cache();
                },
                afterDeselect: function () {
                    this.qs1.cache();
                    this.qs2.cache();
                }
            });

        }
        //multiselect end
    };
    
    
    
    /*--------------------------------
         Widgets
      --------------------------------*/
     FOXKEEPER_SETTINGS.exWidgets = function () {
        
        /*notification widget*/
        var notif_widget = $(".notification-widget").height();
        //$('.notification-widget').height(notif_widget).perfectScrollbar({
        //    suppressScrollX: true
        //});
        $('.notification-widget').height(notif_widget);
    };
    
    
    
    
    
    
    /*--------------------------------
         To Do Task Widget
      --------------------------------*/
     FOXKEEPER_SETTINGS.exToDoWidget = function () {
        
        /*todo task widget*/
        $(".icheck-minimal-white.todo-task").on('ifChecked', function (event) {
            $(this).parent().parent().addClass("checked");
        });
        $(".icheck-minimal-white.todo-task").on('ifUnchecked', function (event) {
            $(this).parent().parent().removeClass("checked");
        });

         //$(".wid-all-tasks ul").perfectScrollbar({
         //    suppressScrollX: true
         //});

    };
    
    
    
    /*--------------------------------
         To Do Add Task Widget
      --------------------------------*/
     FOXKEEPER_SETTINGS.exToDoAddTaskWidget = function () {
        
        $(".wid-add-task input").on('keypress', function (e) {
            if (e.keyCode == 13) {
                var i = Math.random().toString(36).substring(7);
                var msg = $(this).val();
                var msg = '<li><input type="checkbox" id="task-' + i + '" class="icheck-minimal-white todo-task"><label class="icheck-label form-label" for="task-' + i + '">' + msg + '</label></li>';
                $(this).parent().parent().find(".wid-all-tasks ul").append(msg);
                $(this).val("");
                $(this).focus();
                FOXKEEPER_SETTINGS.iCheck();
                FOXKEEPER_SETTINGS.exToDoWidget();
                 //$(this).parent().parent().find(".wid-all-tasks ul").perfectScrollbar('update');
            }
        });

    };
    
    
    
    
    /*--------------------------------
          CHAT API
      --------------------------------*/
     FOXKEEPER_SETTINGS.chatAPI = function () {
        
        
        
        $('.page-topbar .sidebar_toggle').on('click', function () {
            var chatarea = $(".page-chatapi");
            var chatwindow = $(".chatapi-windows");
            var topbar = $(".page-topbar");
            var mainarea = $("#main-content");
            var menuarea = $(".page-sidebar");
            
            if (menuarea.hasClass("collapseit") || menuarea.hasClass("chat_shift")) {
                menuarea.addClass("expandit").removeClass("collapseit").removeClass("chat_shift");
                topbar.removeClass("sidebar_shift").removeClass("chat_shift");
                mainarea.removeClass("sidebar_shift").removeClass("chat_shift");
                chatarea.addClass("hideit").removeClass("showit");
                chatwindow.addClass("hideit").removeClass("showit");
                FOXKEEPER_SETTINGS.mainmenuScroll();
            } else {
                menuarea.addClass("collapseit").removeClass("expandit").removeClass("chat_shift");
                topbar.addClass("sidebar_shift").removeClass("chat_shift");
                mainarea.addClass("sidebar_shift").removeClass("chat_shift");
                FOXKEEPER_SETTINGS.mainmenuCollapsed();
            }
        });

    };
    
    
    
    
    // Element Attribute Helper
    function getValue($el, data_var, default_val) {
        if (typeof $el.data(data_var) != 'undefined') {
            return $el.data(data_var);
        }
        
        return default_val;
    }
    
    
    /******************************
      initialize respective scripts 
      *****************************/
     $(document).ready(function () {
        FOXKEEPER_SETTINGS.windowBasedLayout();
        FOXKEEPER_SETTINGS.mainmenuScroll();
        FOXKEEPER_SETTINGS.mainMenu();
        FOXKEEPER_SETTINGS.mainmenuCollapsed();
        FOXKEEPER_SETTINGS.pageTopBar();
        FOXKEEPER_SETTINGS.otherScripts();
        FOXKEEPER_SETTINGS.iCheck();
        
        FOXKEEPER_SETTINGS.extraFormSettings();
        FOXKEEPER_SETTINGS.tooltipsPopovers();
        FOXKEEPER_SETTINGS.chatAPI();
        
        FOXKEEPER_SETTINGS.tocifyScrollMenu();
        
        FOXKEEPER_SETTINGS.breadcrumbAutoHidden();
        
        FOXKEEPER_SETTINGS.exWidgets();
        FOXKEEPER_SETTINGS.sectionBoxActions();
        FOXKEEPER_SETTINGS.draggablePanels();
        FOXKEEPER_SETTINGS.viewportElement();
        FOXKEEPER_SETTINGS.searchPage();
        FOXKEEPER_SETTINGS.exToDoAddTaskWidget();
        FOXKEEPER_SETTINGS.exToDoWidget();

    });
    
    $(window).resize(function () {
        FOXKEEPER_SETTINGS.windowBasedLayout();
        //FOXKEEPER_SETTINGS.mainmenuScroll();
        //FOXKEEPER_SETTINGS.exWidgetWeather();
        
        FOXKEEPER_SETTINGS.loginPage();
    });
    
    $(window).load(function () {
        FOXKEEPER_SETTINGS.loginPage();
    });

});
