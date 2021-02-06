// ==UserScript==
// @name         清爽斗鱼
// @namespace    Yzy
// @version      1.0
// @description  样式精简 关闭弹幕 网页全屏 最高画质
// @author       Yzy
// @match        *://*.douyu.com/*
// ==/UserScript==

(function() {
    //样式精简
    var css = '{display:none !important;height:0 !important}';
    css += '.guessGameContainer.is-normalRoom{display:none !important;}';
    css += '.DropPane-ad{display:none !important}';
    css += '.SignBaseComponent-sign-ad{display:none !important}';
    css += '.DropMenuList-ad{display:none !important;}';
    css += '.AnchorAnnounce{display:none !important;}';
    css += '.TreasureDetail{display:none !important;}';
    css += '.SignChatAd-chat-ad-cls{display:none !important;}';
    css += '.Promotion-nobleRights{display:none !important;}';
    css += '.Task{display:none !important;}';
    css += '.UPlayerLotteryEnter.is-active{display:none !important;}';
    css += '.LotteryContainer{display:none !important;}';
    css += '.layout-Module-head.FollowList-head.is-fixed{display:none !important;}';
    css += '.layout-Banner-item{display:none !important;}';
    css += '.layout-Module-extra{display:none !important;}';
    css += '.Act129684Bar-view1{display:none !important;}';
    css += '.Act129684Bar-content{display:none !important;}';
    css += '.Act129684-logo{display:none !important;}';
    css += '.ActBase-switch{display:none !important;}';
    css += '.HeaderNav{display:none !important;}';
    css += '.HeaderGif-left{display:none !important;}';
    css += '.HeaderGif-right{display:none !important;}';
    css += '.Prompt-container{display:none !important;}';
    css += '.ActDayPay-toast{display:none !important;}';
    css += '.code_box-5cdf5a{display:none !important;}';
    css += '.normalDiv-8b686d{display:none !important;}';
    css += '.closeBg-998534{display:none !important;}';
    css += '.bg-d4758b{display:none !important;}';
    css += '.fireOpenRanking react-draggable react-draggable-dragged{display:none !important;}';
    css += '.vsFestival1908{display:none !important;}';
    css += '.ActSuperFansGroup-component.ActSuperFansGroupBar-normalBody{display:none !important;}';
    css += '.ActSuperFansGroup-component.ActSuperFansGroupBar-miniBody{display:none !important;}';
    css += '.ActSuperFansGroup-component.ActSuperFansGroupBar-plusBody{display:none !important;}';
    css += '.ActSuperFansGroup-logo{display:none !important;}';
    css += '.ActSuperFansGroup-switch{display:none !important;}';
    css += '.Act156581Bar{display:none !important;}';
    css += '.Act159742Bar-main--pre{display:none !important;}';
    css += '.Act159742-logo{display:none !important;}';
    css += '.Act159742Bar-wrap{display:none !important;}';
    css += '.double11{display:none !important;}';
    css += '.Act163201Bar-wrap{display:none !important;}';
    css += '.Act163201-logo{display:none !important;}';
    css += '.ActBase-switchWrap{display:none !important;}';
    css += '.content-0fa509{display:none !important;}';
    css += '.Frawdroom{display:none !important;}';
    css += '#bc1915{display:none !important;}';
    css += '#bc1215{display:none !important;}';
    css += '#__h5player > div.recommendApp-0e23eb:nth-child(3){display:none !important;}';
    css += '#__h5player > div.recommendView-3e8b62:first-child > div:last-child > div.recommendView-1c2131{display:none !important;}';
    css += '#__h5player > div.recommendAD-54569e:nth-child(9){display:none !important;}';
    css += '#__h5player > div.recommendView-3e8b62:first-child > div:first-child > div{display:none !important;}';
    css += '#js-player-video-case > div:last-child > div.css-widgetWrapper-EdVVC{display:none !important;}';
    css += '.layout-Player-rank{display:none !important}';//周榜
    css += '.layout-Player-barrage{top:0px !important;}';//弹幕区
    css += '.layout-Player-video{bottom:0px !important}';//直播页面
    css += '.layout-Player-toolbar{visibility:hidden !important;}';//礼物栏
    css += '.layout-Bottom{display:none !important;}';//底部鱼吧
    css += '.FansMedalPanel-enter{display:none !important;}';//粉丝徽章
    css += '.layout-Aside{display:none !important;}';//左侧列表
    css += '.Header-download-wrap{display:none !important;}';//导航栏客户端
    css += '.Header-broadcast-wrap{display:none !important;}';//导航栏开播
    css += '#js-header > div > div > div.Header-left > div > ul > li:nth-child(5){display:none !important;}';//导航栏游戏
    css += '.ChatNobleBarrage{display:none !important;}';//贵族弹幕
    css += '.ChatFansBarrage{display:none !important;}';//粉丝弹幕
    css += '.Horn4Category{display:none !important;}';//喇叭
    css += '.FirePower{display:none !important;}';//火力全开
    css += '.SysSign-Ad{display:none !important;}';//弹幕区下方空位
    css += '#js-room-activity{display:none !important;}';//右侧悬浮广告
    css += '#js-player-title > div.Title > div.Title-roomInfo:last-child > div.Title-row:last-child{display:none !important;}';//标题栏周榜福星挑战
    css += '.layout-Header{height: 50px !important;}';//导航栏Header高度
    css += '.Header-wrap{height: 50px !important;}';//导航栏高度
    css += '.Header{margin: -5px auto !important;}';//导航栏上边距
    css += '.layout-Player-title{height: 100px !important;}';//标题栏高度
    css += '.Title-anchorPic{width: 84px !important;height: 84px !important;}';//主播头像大小
    css += '.layout-Main{margin-left:40px !important;margin-right:40px !important;padding-top: 0px !important;}';//直播页面位置
    css += '.ChatBarrageCollect-tip{display:none !important;}';//收藏的弹幕
    css += '#js-follow > section > div > ul > li:first-child{display:none !important;}';//可能感兴趣隐藏
    css += '.Recommend-wrapper{display:none !important;}';//为你推荐隐藏
    //css += 'body{overflow-y: hidden !important;}';//右侧滚动条
    //css += '#js-player-title > div.Title > div.Title-anchorPic:first-child > div.Title-anchorPicBack > a:first-child{display:none !important;}';//主播头像
    loadStyle(css)
    function loadStyle(css) {
       var style = document.createElement('style');
       style.type = 'text/css';
       style.rel = 'stylesheet';
       style.appendChild(document.createTextNode(css));
       var head = document.getElementsByTagName('head')[0];
       head.appendChild(style);
    }
    let intID1 = setInterval(() => {
        if (document.getElementsByClassName("wfs-2a8e83").length > 0) {
            clearInterval(intID1);
            //网页全屏
            document.querySelector('div.wfs-2a8e83').click();
            //最高画质
			document.querySelectorAll(".tip-e3420a > ul > li")[0].click();
        }}, 1000);
})();
//关闭弹幕
const SELECTOR = {
  "www.douyu.com": {
    on: "div[class^='showdanmu-']:not([class*='removed-'])",
    off: "div[class^='hidedanmu-']:not([class*='removed-'])",
  }
};
const DELAY_TIME = 1000;
const DELAY_SITE = ["www.yy.com"];
const LIVE_SITE = document.location.hostname;
DELAY_SITE.includes(LIVE_SITE)?setTimeout(disableDanmaku, DELAY_TIME):disableDanmaku();
function disableDanmaku() {
  let buttonOn = document.querySelector(SELECTOR[LIVE_SITE].on);
  if (buttonOn !== null) {
    buttonOn.click();
  }
  setTimeout(() => {
    if (document.querySelector(SELECTOR[LIVE_SITE].off) === null) {
      disableDanmaku();
    }
  }, 500);
}