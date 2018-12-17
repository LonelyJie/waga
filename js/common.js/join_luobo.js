/**
 * 鍔犲叆鎴戜滑杞挱js
 */
$(document).ready(function(){
    var index=0;
    var length=$("#jobInfo ul li").length;
    var i=1;

    //鍏抽敭鍑芥暟锛氶€氳繃鎺у埗i 锛屾潵鏄剧ず鍥剧墖
    function showImg(i){
        $("#jobInfo ul li")
            .eq(i).stop(true,true).fadeIn(800)
            .siblings("li").hide();
         $("#cbtn li")
            .eq(i).addClass("hov")
            .siblings().removeClass("hov");
    }

    function slideNext(){
        if(index >= 0 && index < length-1) {
             ++index;
             showImg(index);
        }else{
            //if(confirm("宸茬粡鏄渶鍚庝竴寮�,鐐瑰嚮纭畾閲嶆柊娴忚锛�")){
                showImg(0);
                index=0;
                aniPx=(length-6)*155+'px'; //鎵€鏈夊浘鐗囨暟 - 鍙鍥剧墖鏁� * 姣忓紶鐨勮窛绂� = 鏈€鍚庝竴寮犳粴鍔ㄥ埌绗竴寮犵殑璺濈
                $("#cSlideUl ul").animate({ "left": "+="+aniPx },200);
                i=1;
            //}
            return false;
        }
        if(i<0 || i>length-6) {return false;}
               $("#cSlideUl ul").animate({ "left": "-=155px" },200)
               i++;
    }

    function slideFront(){
       if(index >= 1 ) {
             --index;
             showImg(index);
        }
        if(i<2 || i>length+6) {return false;}
               $("#cSlideUl ul").animate({ "left": "+=155px" },200)
               i--;
    }
        $("#jobInfo ul li").eq(0).show();
        $("#cbtn li").eq(0).addClass("hov");

        $(".picSildeRight,#next").click(function(){
               slideNext();
           })
        $(".picSildeLeft,#front").click(function(){
               slideFront();
           })
        $("#cbtn li").click(function(){
            index  =  $("#cbtn li").index(this);
            showImg(index);
        });
    })