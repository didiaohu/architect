/**
 * 时间戳格式
 * @param {*} date
 */
const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  );
};

/**
 *  合并object对象 obj2：合并源
 */
const mergeObj = (obj1, obj2) => {
  for (var key in obj2) obj1[key] = obj2[key];
  return obj1;
};

/**
 * 修改在IOS微信中 title无法修改的问题
 * @param {*} title
 */
const setTitle = title => {
  document.title = title;
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

/**
 * 设置本地存储
 * @param {*} name
 * @param {*} val
 */
const setlocalStorage = (name, val) => {
  localStorage.setItem(name, val);
};

/**
 * 截取url参数
 * @param {*指定参数名} name
 */
const getQueryString = name => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};

/**
 * 设置活动入口链接，参数：{a标签id : 活动页面pathname}
 * @param {*活动页面pathname} obj
 */
const setOutHref = obj => {
  for (key in obj)
    document.getElementById(key).href = location.origin + obj[key];
};

module.exports = {
  formatTime,
  mergeObj,
  setTitle,
  setlocalStorage,
  getQueryString,
  setOutHref
};
