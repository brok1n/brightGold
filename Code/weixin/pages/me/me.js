// pages/me/me.js
var me = null
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户信息 用户登录后的数据 是 app.data.userInfo
    userInfo: {},
    //设备个数
    deviceCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    me = this
    me.setData({
        userInfo: app.data.userInfo
    })
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

      app.api.req("https://api.brok1n.com/api/user/login.go", {}, function (data) {
          app.log(data)
      }, function (data) {
          app.log(data)
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
  
  },
    /**
     * 我的设备被点击
     * */
    devices: function(){
        wx.navigateTo({
            url: '/pages/devices/devices'
        })
    },
    /**
     * 帮我按钮被点击
     * */
    help: function(){
        wx.navigateTo({
            url: '/pages/help/help'
        })
    },
    /**
     * 用户反馈被点击
     * */
    feedback: function () {
        wx.navigateTo({
            url: '/pages/feedback/feedback'
        })
    },
    /**
     *  联系我们被点击
     * */
    contactUs: function () {
        wx.navigateTo({
            url: '/pages/contactUs/contactUs'
        })
    },
    /**
     * 设置被点击
     * */
    // setting: function () {
    //     wx.navigateTo({
    //         url: '/pages/setting/setting'
    //     })
    // }
})