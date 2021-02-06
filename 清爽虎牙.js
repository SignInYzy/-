// ==UserScript==
// @name         清爽虎牙
// @namespace    Yzy
// @version      1.0
// @description  样式精简 关闭弹幕 剧场模式 最高画质
// @author       Yzy
// @match        *://*.huya.com/*
// ==/UserScript==

$('#J_mainRoom > div.room-wrap > div.room-footer').remove();//下方动态
$('#J_mainRoom > div.room-footer').remove();//下方动态
$('#match-cms-content').remove();//比赛页面，直播下方的内容
$('#matchComponent2').remove();//活动
$('#wrap-income').remove();//营收
$('#J_spbg').remove();//大主播
$('#J_roomGgTop').remove();
$('#J-weekRank').remove();
//延迟删除
setTimeout(function(){
   $('#chatRoom > div.room-gg-chat').remove();//漂浮广告
   $('#J_hd_nav_user > b').remove();//任务红点
   $('.tt-diyActLayer').remove();//活动
   $('.ball-view--19sRps-ih3GIs4n1CGztMM normal--3aDEO-ZIT8flUnkBF3mgYT').remove();//悬浮球
   $('.helperbar-root--12hgWk_4zOxrdJ73vtf1YI').remove();//导航栏
},3000);

$(function() {
    //样式精简
    let css = '{display:none !important;height:0 !important}'
    css += '#wrap-income > iframe{display:none !important;}'
    css += '#J_hySide{display:none !important;}'
    css += '#J_roomGgTop{display:none !important;}'
    css += '#banner-ab{display:none !important;}'
    css += '#huya-ab > div.banner-ab-warp > div.ab-close-btn:last-child{display:none !important;}'
    css += '#duya-header > div.duya-header-wrap.clearfix > div.duya-header-bd.clearfix > div.duya-header-ad:last-child > a.duya-header-ad-link.j_duya-header-ad > img.duya-header-ad-img{display:none !important;}'
    css += '#matchMain > div.diy-comps-wrap{display:none !important;}'
    css += '#J_spbg{display:none !important;}'
    css += '#chatRoom > div.room-gg-chat:last-child{display:none !important;}'
    css += '#player-resource-wrap{display:none !important;}'
    css += '#J_mainRoom > div.box-crumb:first-child{display:none !important;}'
    css += '#J_roomHeader > div.room-hd-r:last-child > div.host-control.J_roomHdCtrl > div.room-business-game:last-child > a.game--3vukE-yU-mjmYLSnLDfHYm{display:none !important;}'
    css += '#player-ext-wrap > div.popup-44f9e031 > section > iframe{display:none !important;}'
    css += '#player-ctrl-wrap > div.player-app-qrcode:nth-child(4){display:none !important;}'
    css += '.mod-list{overflow-y: auto !important;}'//右侧滚动条
    css += '#J_roomWeeklyRankList{display:none !important;}'//隐藏周榜
    css += '#chatRoom{height:50% !important;}'//公屏
    css += '#chatRoom > div{height:100% !important;}'//公屏高度
    css += '.room-footer{display:none !important;}'//下方动态
    css += '#J-room-chat-color{display:none !important;}'//粉丝弹幕
    css += '#share-entrance{display:none !important;}'//标题栏分享
    css += '#J_roomGamePromote{display:none !important;}'//标题栏下载游戏
    css += '#hy-nav-download{display:none !important;}'//导航栏下载
    css += '#wrap-notice{display:none !important;}'//公屏广告
    css += '#J_adCategory{display:none !important;}'//分类下方广告
    css += '#chat-room__list > li.J_msg:first-child > p{display:none !important;}'//公屏弹幕名称前缀
    css += '#main_col > div.room-backToTop.j_room-backToTop:last-child{display:none !important;}'//返回顶部按钮
    css += '#J_playerMain > div.room-player-gift-placeholder:first-child{display:none !important;}'//礼物栏
    css += '#J_roomHeader > div.room-hd-r:last-child > div.host-control.J_roomHdCtrl > div.jump-to-phone:nth-child(4){display:none !important;}'//标题栏客户端
    css += '#wrap-ext > div.popup-44f9e031 > section > iframe{display:none !important;}'//公屏小程序
    //css += '#chatHostPic{display:none !important;}'//粉丝徽章
    //css += '#player-gift-wrap{display:none !important;}'//礼物栏
    //css += '#avatar-img{display:none !important;}'//主播头像
    //css += '#tipsOrchat > div.chat-room__ft > div.chat-room__ft__chat:last-child{display:none !important;}'//弹幕文字输入框
    loadStyle(css)
    function loadStyle(css) {
       var style = document.createElement('style')
       style.type = 'text/css'
       style.rel = 'stylesheet'
       style.appendChild(document.createTextNode(css))
       var head = document.getElementsByTagName('head')[0]
       head.appendChild(style)
    }
    //最高画质
    var t1 = setInterval(function(){
         if($(".player-videotype-cur").html()!=$(".player-videotype-list li:first").html()){
              $(".player-videotype-list li:first").click();
              /*var watch = setInterval(function(){
                   if($(".player-play-big")[0].style.display=="block"){
                        $(".player-play-big").click();
                        clearInterval(watch);
                   }
              },1000);*/
         }else{
              clearInterval(t1);
         }
    },2000);
    //关闭弹幕
    var interval = setInterval(function(){
    var danmu=document.getElementById('player-danmu-btn');
    if(danmu){
        danmu.click();
        clearInterval(interval);
        }
    }, 1000);
    //剧场模式
    var interval2 = setInterval(function(){
    var fullpage=document.getElementById('player-fullpage-btn');
    if(fullpage){
        fullpage.click();
        clearInterval(interval2);
        }
    }, 1000);
})