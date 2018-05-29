// 修改在IOS微信中 title无法修改的问题
export const setTitle=function(t) {
  document.title = t;
  var i = document.createElement('iframe');
  i.src = '//www.rrjc.com/favicon.ico';
  i.style.display = 'none';
  i.onload = function() {
    setTimeout(function() {
      i.remove();
    }, 9);
  };
  document.body.appendChild(i);
};