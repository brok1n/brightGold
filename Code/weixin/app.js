const request = require('request.js')
const config = require('config.js')
//app.js
var app = null
App({
  onLaunch: function () {
    app = this
    request.init(app.log, config)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    app.wxlogin()
      //因为 code只能获取一次openid 所以使用一次就报废了 这里根本就不用保存
    // wx.checkSession({
    //     success: function(){
    //         //session_key 未过期，并且在本生命周期一直有效
    //         var loginDataStr = wx.getStorageSync(config.KEY_LOGIN_DATA)
    //         if (loginDataStr){
    //           app.log("get wx login code by local storage")
    //           app.data.loginData = JSON.parse(loginDataStr)
    //         } else {
    //           app.wxlogin()
    //         }
    //     },
    //     fail: function(){
    //         // session_key 已经失效，需要重新执行登录流程
    //         // 登录
    //         app.wxlogin()
    //     }
    // })
  },
  wxlogin: function(){
      app.log("get wx login code by wx.login request")
      wx.login({
          success: res => {
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
              app.data.loginData = res
              app.log(app.data.loginData)
              wx.setStorageSync(config.KEY_LOGIN_DATA, JSON.stringify(app.data.loginData))
          }
      })
  },
  log: function(e){
    console.log(e)
  },
  getSession: function(){
    var session = wx.getStorageSync(config.KEY_SESSION)
    if ( session ){
      var obj = null
      try {
          obj = JSON.parse(session)
      }catch (e) {
          app.log(e)
      }
      if ( obj != null && new Date().getTime() - obj.time < 30 * 24 * 60 * 60 * 1000 ) {
        return obj.session
      }
    }
    return null
  },
  api: request,
  data: {
    userInfo: null
  }
})