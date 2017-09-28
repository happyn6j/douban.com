//获取豆瓣数据接口
var API_URL = 'https://api.douban.com/v2/movie/top250';

Page({
  data: {
    title:"加载中...",
    icon:"load...",
    movies:[]
  },
  onLoad:function(){
    var that = this;
    wx.showToast({
      title: "加载中...",
      icon:"loading",
      duration:100
    });
    wx.request({
      url: API_URL,
      data:{},
      header:{
        'content-type': 'json'
      },
      success:function(res){
        wx.hideToast();//隐藏消息提示框
        console.log(res.data);
        var data = res.data;
        that.setData({
          title:data.title,
          movies:data.subjects
        });
      }
    })
  }
})
