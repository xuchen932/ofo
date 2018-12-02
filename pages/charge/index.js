// pages/charge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  chongzhi:function(){
    if(this.inputValue > 0 && !isNaN(this.inputValue)){
      wx.getStorage({
        key: 'money',
        success: (res)=>{
          wx.setStorage({
            key: 'money',
            data: parseInt(res.data) + parseInt(this.inputValue),
          })
        },
        fail:(res)=>{
          wx.setStorage({
            key: 'money',
            data: this.inputValue,
          })
        }
      })
      
      wx.redirectTo({
        url: '../wallet/index',
      })
    }
  },
  bindinput:function(e){
    this.inputValue = e.detail.value;
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})