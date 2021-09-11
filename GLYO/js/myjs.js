
$(document).ready(function(){
    'use strict';

    // Start Slider Item in Item Page

    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });

    // End Slider Item in Item Page

    // Start Mutli Tags In News Page
    $(".two-box-2 select").val();
    $(".two-box-2 select").tagsinput('items');
    // End Mutli Tags In News Page
});
