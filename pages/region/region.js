// pages/region/region.js
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  inputValue: "",
  data: {
    region: ['广东省', '广州市', '海珠区'],
    date: ['2018-09-29'],
    address: ['请选择位置'],
    danmuList: [{
        text: 'Video的发送弹幕',
        color: '#f0f',
        time: 1
      },
      {
        text: '微信小程序',
        color: '#f00',
        time: 2
      },
      {
        text: '开始的弹幕',
        color: '#b22',
        time: 3
      }, {
        text: '前方的弹幕',
        color: '#f00',
        time: 4
      }, {
        text: '第五个弹幕',
        color: '#f00',
        time: 5
      }, {
        text: '倒数第二个弹幕',
        color: '#f00',
        time: 6
      }, {
        text: '倒数第一个弹幕',
        color: '#f00',
        time: 7
      },
    ]

  },

  btnsend: function(e) {
    this.inputValue = e.detail.value
  },
  btnsendit: function(e) {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //选择位置
  getmap: function() {
    var address = "null";
    var _this = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        _this.setData({
          address: res.name
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(res) {
    this.videoContext = wx.createVideoContext("myvideo")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发生改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  }
})