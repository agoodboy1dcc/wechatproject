// pages/music/music.js
Page({

  //播放
  listenerButtonPlay: function() {
    wx.playBackgroundAudio({
      dataUrl: 'https://m10.music.126.net/20180929180553/ef131db1218277937c8e83a395415c66/ymusic/edea/8ed2/5693/b9ce9986645cb3a4869be882389e3c6a.mp3',
      title: '杜晨晨是神',
      //图片地址地址 
      coverImgUrl: 'http://p2.music.126.net/XVYltHXVMNAri4hqhwWykA==/109951163514458874.jpg'
    })
  },
  //监听button暂停按钮 
  listenerButtonPause: function() {
    wx.pauseBackgroundAudio({});
    console.log('暂停播放')
  },
  /**   * 播放状态   */
  listenerButtonGetPlayState: function() {
    wx.getBackgroundAudioPlayerState({
      success: function(res) {
        // success       
        //duration  选定音频的长度（单位：s），只有在当前有音乐播放时返回  
        console.log('duration:' + res.duration)
        console.log('currentPosition:' + res.currentPosition)
        //status    播放状态（2：没有音乐在播放，1：播放中，0：暂停中） 
        console.log('status:' + res.status)
        console.log('downloadPercent:' + res.downloadPercent)
        //dataUrl   歌曲数据链接，只有在当前有音乐播放时返回 
        console.log('dataUrl:' + res.dataUrl)
      },
      fail: function() {
        // fail 
      },
      complete: function() {
        // complete  
      }
    })
  },
  /**   * 设置进度   */
  listenerButtonSeek: function() {
    wx.seekBackgroundAudio({
      position: 40
    })
  },
  /**   * 停止播放   */
  listenerButtonStop: function() {
    wx.stopBackgroundAudio({})
    console.log('停止播放')
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数 
    /**      * 监听音乐播放      */
    wx.onBackgroundAudioPlay(function() {
      // callback  
      console.log('onBackgroundAudioPlay')
    })
    /**     * 监听音乐暂停     */
    wx.onBackgroundAudioPause(function() {
      // callback    
      console.log('onBackgroundAudioPause')
    })
    /**     * 监听音乐停止     */
    wx.onBackgroundAudioStop(function() {
      // callback   
      console.log('onBackgroundAudioStop')
    })
  },







  /**
   * 页面的初始数据
   */
  data: {

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