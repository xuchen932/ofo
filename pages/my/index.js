// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnType:"primary",
    userInfo:{
      imgUrl:'',
      nickName:"未登录"
    },
    actionText:"登录"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'loginInfo',
      success: (res)=>{
        console.log(res)
        this.setData({
          btnType: "warn",
          userInfo: {
            imgUrl: res.data.userInfo.imgUrl,
            nickName: res.data.userInfo.nickName
          },
          actionText: "退出登录"
        })
      },
      
    })
  },
  movetoWallet:function(){
    wx.redirectTo({
      url: '../wallet/index',
    })
  },
  login:function(){
    if(this.data.actionText == "登录"){
      wx.login({
        success: () => {
          wx.showLoading({
            title: '正在登录',
          })
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              wx.hideLoading()
              this.setData({
                userInfo: {
                  imgUrl: res.userInfo.avatarUrl,
                  nickName: res.userInfo.nickName
                },
                actionText: "退出登录",
                btnType: "warn"
              })
              wx.setStorage({
                key: 'loginInfo',
                data: {
                  userInfo: {
                    imgUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName
                  },
                  actionText: "退出登录",
                  btnType: "warn"
                },
              })
            }
          })
        }
      })
    }else{
      wx.showModal({
        title: '提醒',
        content: '确定退出登录吗',
        success:(res)=>{
          if(res.confirm){
            this.setData({
              btnType: "primary",
              userInfo: {
                imgUrl: '',
                nickName: "未登录"
              },
              actionText: "登录"
            })
            wx.removeStorage({
              key: 'loginInfo',
            })
          }
        }
      })
      
    }
    
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