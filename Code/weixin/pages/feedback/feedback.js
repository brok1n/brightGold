// pages/feedback/feedback.js
const app = getApp()
var feedBack = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
      content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    feedBack = this
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
     * 用户输入评论
     */
    feedBackInp: function (e) {
        feedBack.data.content = e.detail.value
    },
    /**
     * 评价提交按钮被点击
     */
    submitBtnTap: function () {

        app.log("提交意见反馈信息按钮被点击")
        app.log(feedBack.data.content)

        if (feedBack.data.content == undefined || feedBack.data.content == null || feedBack.data.content.length < 2) {
            wx.showToast({
                title: '说点什么吧',
            })
            return
        }

        // app.apiFeedBack(feedBack.data.content, function (data) {
        //     wx.hideLoading()
        //     data = JSON.parse(data)
        //     app.log("提交意见反馈信息成功")
        //     app.log(data)
        //     wx.showToast({
        //         title: '反馈成功',
        //     })
        //     setTimeout(function () {
        //         wx.navigateBack({
        //             delta: 1
        //         })
        //     }, 1500)
        //
        // }, function (msg) {
        //     wx.showToast({
        //         title: msg,
        //         image: "/images/error.png"
        //     })
        // })


    }
})