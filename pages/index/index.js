//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [
      { url: 'https://service.pte.group/static/imgs/enflares-81.75.png' },
      { url: 'https://service.pte.group/static/imgs/enflares-81.75.png' },
      { url: 'https://service.pte.group/static/imgs/enflares-81.75.png' },
      { url: 'https://service.pte.group/static/imgs/enflares-81.75.png' }
    ],
    iconType: [
      { icon: "success", text: "羊驼课堂" },
      { icon: "success_no_circle", text: "领取机经" },
      { icon: "info", text: "本周福利" },
      { icon: "warn", text: "百人模考" },
      { icon: "cancel", text: "备考团" }
    ],
    tikuType: [
      { left: "听力", middle: "五 最 每", right:"开启机经库" },
      { left: "口语", middle: "一 新 日", right: "开启机经库" },
      { left: "阅读", middle: "快 机 更", right: "开启机经库" },
      { left: "写作", middle: "乐 经 新", right: "开启机经库" }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
