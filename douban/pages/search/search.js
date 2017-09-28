// pages/search/search.js
var API_URL = "https://api.douban.com/v2/movie/search";
Page({
    data: {
      title:"搜一搜",
      movies: []
    },
    search:function(e){
      var that = this;
      if(!e.detail.value){
        return;
      }
      wx.showToast({
        title: "加载中...",
        icon: "loading",
        duration: 100
      });
      wx.request({
        url: API_URL+'?q='+e.detail.value,
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          wx.hideToast();//隐藏消息提示框
          console.log(res.data);
          var data = res.data;
          that.setData({
            movies: data.subjects
          });
        }
      });
    }
    
})