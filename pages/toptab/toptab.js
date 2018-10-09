// pages/toptab/toptab.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: [
      '/assets/images/5.jpg',
      '/assets/images/4.jpg',
      '/assets/images/6.jpg'
    ],
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    toView: 'red',
    scrollTop: 100,
    proList: [{
        logo: '/assets/images/logo.jpg',
        title: 'test',
        desc: 'asdsadasdasda'
      },
      {
        logo: '/assets/images/logo2.jpg',
        title: 'test2',
        desc: 'yagsdjashdasd'
      },
      {
        logo: '/assets/images/logo3.jpg',
        title: 'test3',
        desc: 'jhasdjkasdjbn'
      }
    ]
  },
  switchTab: function(e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  }
})