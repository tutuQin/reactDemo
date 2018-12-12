/*
 * File: request.js
 * Project: reactDemo
 * File Created: Friday, 7th December 2018 3:16:18 pm
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Tuesday, 11th December 2018 2:36:01 pm
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description
 * 
 */
 var baseUrl = ''//共有部分例如10.10.10.2
class BaseRequest {
  
  async fetch(url, options) {
    // let token = await Storage.get("token") || '';//请求的token
    // console.log('token', token)
    const defaultOptions = { //默认请求配置
      method: 'GET',
      headers: {
        'token': '',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    };

    const sendOptions = { ...defaultOptions, ...options };

    let response = null;
    try {
      let urls = baseUrl + url;//请求的完整地址
      console.log(urls)
      response = await fetch(urls, sendOptions);
      const status = await response.status;
      if (status >= 200 && status < 300) {
        response = await response.json();
        if (!response.success) {
          console.log(response.data.msg || '未知错误')
        };
      }
      if (status == 404) {
        console.log('接口地址错误')
      }
      if (status == 500) {
        console.log('服务器错误')
      }
      if (status == 401 || status == 403) {
        console.log('登陆过期，请重新登录')
      }
      return response;
    } catch (e) {
      console.log('异常',e)
      return { success: false }
    }
  }
}
export default new BaseRequest();






