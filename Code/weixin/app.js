//app.js
var app = null;
App({
  onLaunch: function () {
    app = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
          app.data.loginData = res
          app.log(app.data.loginData)
      }
    })

  },
  log: function(e){
    console.log(e)
  },
  data: {
    userInfo: null
  }
})