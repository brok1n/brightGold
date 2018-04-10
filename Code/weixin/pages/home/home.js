// pages/home/home.js
var home = null
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    home = this

    var session = app.getSession()
    if ( session != null ) {
        app.api.loginBySession( session, function (data) {
            app.log(data)
        }, function (msg) {
            app.log(msg)
        })
    } else {
      app.api.loginByCode( app.data.loginData.code, function (data) {
          app.log(data)
      }, function (msg) {
          app.log(msg)
      })
    }

    app.log("start register")
    app.api.register(app.data.loginData.code, app.data.userInfo.avatarUrl,app.data.userInfo.city, app.data.userInfo.country, app.data.userInfo.gender, app.data.userInfo.language,app.data.userInfo.nickName, app.data.userInfo.province,function () {
    }, function () {
    } )

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    home.setData({
        loginData: JSON.stringify(app.data.loginData)
    })

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})