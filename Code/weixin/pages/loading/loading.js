// pages/loading/loading.js
var loading = null
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    loading = this
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

      wx.getSetting({
          success: res => {
              if (res.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                  wx.getUserInfo({
                      success: res => {
                          // 可以将 res 发送给后台解码出 unionId
                          app.data.userInfo = res.userInfo
                          app.log(app.data.userInfo)
                          loading.startTimer()
                      }
                  })
              } else {
                  loading.requestPermission()
              }
          }
      })

  },
    /**
     * 请求用户登录授权
     * */
    requestPermission: function(){

        wx.getUserInfo({
            success: res => {
                // 可以将 res 发送给后台解码出 unionId
                app.data.userInfo = res.userInfo
                app.log("用户同意了授权")
                app.log(app.data.userInfo)
                loading.startTimer()
            },
            fail: res => {
                app.log("用户未统一授权")
                app.log(res)
                wx.showModal({
                    title: '提示',
                    content: '取消授权 将无法使用本小程序',
                    confirmText: '重新授权',
                    cancelText: '退出程序',
                    success: function(res) {
                        if (res.confirm) {
                            console.log('用户点击确定')
                            wx.openSetting({
                                success: function (res) {
                                    app.log("open setting")
                                    if (!res.authSetting["scope.userInfo"] || !res.authSetting["scope.userLocation"]) {
                                        //这里是授权成功之后 填写你重新获取数据的js
                                        //参考:
                                        app.log("open setting")
                                        app.log(res)
                                        wx.getUserInfo({
                                            success: res => {
                                                // 可以将 res 发送给后台解码出 unionId
                                                app.data.userInfo = res.userInfo
                                                app.log(app.data.userInfo)
                                                loading.startTimer()
                                            }
                                        })
                                    }
                                },
                                fail: res => {
                                    app.log("open setting fail")
                                    app.log(res)
                                    wx.navigateBack({
                                        delta: 5
                                    })
                                }
                            })
                        } else if (res.cancel) {
                            console.log('用户点击取消')
                            wx.navigateBack({
                                delta: 5
                            })
                        }
                    }
                })

            }
        })

    },
    /**
     * 启动页面倒计时定时器
     * */
    startTimer: function(){
        var si = setInterval(function(){
            if( loading.data.time > 1 ){
                loading.setData({
                    time: --loading.data.time
                })
            } else {
                clearInterval(si)
                wx.switchTab({
                    url: '/pages/home/home',
                })
            }
        }, 1000)
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