  let path = '/api',
    origin = location.origin,
    origins = [
      'https://wap.rrjc.com', //生产环境
      'https://mobile.rrjc.com', //域名二
      'https://102mobile.rrjc.com', //预发布环境
      'https://23mobile.szrrjc.com', //23测试环境
      'http://23mobile.szrrjc.com', //23测试环境
      'http://109mobile.szrrjc.com', //109测试环境
      'https://108mobile.szrrjc.com', //108测试环境
      'http://114mobile.szrrjc.com', //114测试环境
      'http://116mobile.szrrjc.com', //116测试环境
      'http://178mobile.szrrjc.com', //178测试环境
      'http://179mobile.szrrjc.com', //179测试环境
      'https://115mobile.szrrjc.com', // 115测试环境
      'http://115mobile.szrrjc.com', // 115测试环境
      'https://110mobile.szrrjc.com', // 110测试环境
      'http://110mobile.szrrjc.com', // 110测试环境
      'http://172.19.10.112:180', // 112测试环境
      'https://172.19.10.112:180' // 112测试环境
    ];
  for (var i = 0; i < origins.length; i++) {
    if (origin == origins[i]) {
      // return origin + path;
      // break;
    }
  }
  //根据测试要求使用相应api地址
  // return 'http://192.168.3.115'+ path;
  export const apiPath='http://172.19.10.20' + path;