//IE9以下提示更换浏览器
function IeCheck(){
  var browser=navigator.appName;
  var b_version=navigator.appVersion;
  var version=b_version.split(";");
  var trim_Version=version[1].replace(/[ ]/g,"");
  if(browser=="Microsoft Internet Explorer"){
    if(trim_Version=="MSIE6.0"||trim_Version=="MSIE7.0"||trim_Version=="MSIE8.0")
    show();
  }
  function show(){
    var tpl = '<div class="ieSupport-wraper" id="ieSupport"><div class="tip360">'+
              '<div class="ieCheck-123"></div>'+
              '<p class="ieCheck-title">您的浏览器版本有点过时了，请赶紧去升级到IE9以上吧！<br>（如果用360浏览器，请切换为极速模式）</p>'+
              '<div class="ieCheck-jisu"></div>'+
              '<p>本页面采用HTML5+CSS3，您正在使用老版本 Internet Explorer ，在本页面的显示效果可能有差异。</p>'+
              '<div>建议您升级到'+
              '<a href="http://www.microsoft.com/china/windows/internet-explorer/" target="_blank">Internet Explorer 9</a>或以下浏览器： <br> <br> '+
              '<a href="http://www.mozillaonline.com/"><div class="ieCheck-ff"></div>Firefox</a> / '+
              '<a href="http://www.baidu.com/s?wd=google%E6%B5%8F%E8%A7%88%E5%99%A8"><div class="ieCheck-ch"></div>Chrome</a> / '+
              '<a href="http://www.apple.com.cn/safari/"><div class="ieCheck-sf"></div>Safari</a> / '+
              '<a href="http://se.360.cn/"><div class="ieCheck-360"></div>360</a>'+
              '</div></div></div>';
      var newNode = document.createElement("div");
      newNode.innerHTML =tpl;
      document.body.insertBefore(newNode,null);
  }
}
