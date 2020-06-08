// pages/ask/ask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    kind:1,
    title:'自家的狗子一直呕吐怎么办？！',
    head_thumb:'xxx',
    user_name:'用户名',
    answer:'估计是两个原因:1是你给你喂得太多了,造成了2113累积食,你可以定期给它5261喂一片酵母片,或者消食片,慢慢的它就会好的;2是它4102了一些过敏的食物,下次你观察一下它,它吃过什么东西之后就吐黄水,如是吃了吐黄水,说明它对那1653种食物过敏,以后就不要喂了,换一种食物.',
    praise:1005,
    comment:183


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

  },
  select:function(e){
    // console.log(e);
    this.setData({
      num:e.target.dataset.num
    })
  },
  checked: function (e) {
    // console.log(e);
    this.setData({
      kind: e.target.dataset.kind
    })
  }
})