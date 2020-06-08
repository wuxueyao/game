const app = getApp()
// var uploadFileUrl = app.d.ceshiUrl + "/Api/Renzheng/uploadimg";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // wx.request({
    //   url: app.d.ceshiUrl + '/Api/Renzheng/readinfo',
    //   method: 'post',
    //   data: {
    //     uid: app.globalData.userInfo.id,
    //     dtype: "geren"
    //   },
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {
    //     if (res.data.status == 1) {
    //       var fdata = res.data.respondData;
    //       that.setData({
    //         linkman: fdata.linkman,
    //         idc_id: fdata.idc_id,
    //         tel: fdata.tel,
    //         idc_face: fdata.idc_face,
    //         idc_back: fdata.idc_back,
    //         idc_photo: fdata.idc_photo,
    //         upidc_face: fdata.upidc_face,
    //       })
    //     }
    //   },
    //   error: function (e) {
    //     wx.showToast({
    //       title: '网络异常！',
    //       duration: 30000
    //     });
    //   },
    // })
  },
  formSubmit: function (e) {
    var that = this;
    var rztype = that.data.rztype;
    console.log(e.detail.value);
    var fdata = e.detail.value;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Renzheng/savegeren',
      method: 'post',
      data: {
        uid: app.globalData.userInfo.id,
        linkman: fdata.linkman,
        idc_id: fdata.idc_id,
        tel: fdata.tel,
        idc_face: that.data.upidc_face,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        wx.showToast({
          title: res.data.message,
        })
        if (res.data.status == 1) {
          wx.redirectTo({
            url: '../rzshop/rzshop?rztype=' + rztype,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      },
      error: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 30000
        });
      },
    })
  },
  // 身份证正面
  idc_face: function () {
    var self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths)
        var imageSrc = res.tempFilePaths[0]
        wx.uploadFile({
          url: uploadFileUrl,
          filePath: imageSrc,
          name: 'data',
          success: function (res) {
            console.log('uploadImage success, res is:', res)

            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setData({
              idc_face: imageSrc,
              upidc_face: res.data
            })
          },
          fail: function ({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })

      },
      fail: function ({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  },
 
  gotoqiye: function (e) {
    var that = this;
    var rztype = that.data.rztype;
    wx.redirectTo({
      url: '../rzqiye/rzqiye?rztype=' + rztype,
    })
  },
  gotogeren: function (e) {
    var that = this;
    var rztype = that.data.rztype;
    wx.redirectTo({
      url: '../renzheng/renzheng?rztype=' + rztype,
    })
  },
  gotodianpu: function (e) {
    var that = this;
    var rztype = that.data.rztype;
    wx.redirectTo({
      url: '../rzshop/rzshop?rztype=' + rztype,
    })
  },
  gotoshenhe: function (e) {
    var that = this;
    var rztype = that.data.rztype;
    wx.redirectTo({
      url: '../examine/examine?rztype=' + rztype,
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