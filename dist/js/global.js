$(document).ready(function(){
    //模块js初始化
    commonJs.fn.init();

});

var commonJs = $(window).commonJs || {};

commonJs.fn = {
    init : function(){
        var _this = this;
        _this.dropdown();
        _this.icheck();
        _this.nicescroll();
       
    },

    // 下拉菜单 
    dropdown : function () {
        $('.dropdown').on('click','.dropdown-menu li a', function(event) {
            var txt = $(this).text();
            $(this).parents('.dropdown-menu').siblings('.dropdown-toggle')[0].childNodes[0].nodeValue = txt + ' ';
        });
    },

    // 侧边条
    nicescroll : function () {
        $(".nicescroll").niceScroll({
            cursorcolor: "#ccc",
            cursorwidth:"3px",
            cursorborder:"none"
        });
    },
    
    // 复选框
    icheck : function () {
        $('input').iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'iradio_flat-blue',
            increaseArea: '20%'
        });
    }

};

// 联动时间选择器
var date = '%y-%M-{%d}';
var DatePicker = {
    dateId1: function (){
        var d02=$dp.$('d02');
        WdatePicker({
            skin:'whyGreen',              
            dateFmt: 'yyyy-MM-dd',            
            alwaysUseStartDate: true, 
            readOnly:true, 
            onpicked:function(){
               if(!d02.value) d02.click();
            },
            maxDate: date
        });
    },
    dateId2: function (){
        var d01 = $dp.$('d01');
        WdatePicker({
            skin:'whyGreen',
            dateFmt: 'yyyy-MM-dd', 
            alwaysUseStartDate: true, 
            readOnly:true,
            onpicked:function(){
                 if(!d01.value){
                    date = '#F{$dp.$D(\'d02\')}';   
                    d01.click();
                    return date;
                }
            }, 
            minDate:'#F{$dp.$D(\'d01\')}',
            maxDate:'%y-%M-{%d}'
        });
    }
};