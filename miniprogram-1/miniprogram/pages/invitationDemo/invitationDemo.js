// miniprogram/pages/invitationDemo/invitationDemo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoaded: false,
		topPicImg: 'https://static01.imgkr.com/temp/52bb34c8f04c49bd9630026ff711f6ea.jpg',
		lat: 24.579805,
		lon: 118.095086
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
	// 图片加载事件
	handleLoad(e) {
		const detail = e.detail
		this.setData({
			isLoaded:true
		})
		console.log('detail', detail)
	},
	// 地图查看详情
	showGuide(){
		wx.openLocation({
		  latitude: this.data.lat,
		  longitude: this.data.lon,
		})
	}
	
})