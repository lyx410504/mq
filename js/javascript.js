$(function() {
	//mob nav
	$('.mob-nav .mob-btn img').click(function() {
		$('.mob-nnav').slideDown();
		$(this).css('display', 'none');
		$(this).siblings('.mob-top').css('display', 'block');
	})
	$('.mob-nav .mob-btn .mob-top').click(function() {
		$('.mob-nnav').slideUp();
		$(this).css('display', 'none');
		$(this).siblings().css('display', 'block');
	})


	$('.mob-nnav .mob-list>ul>li').click(function() {
		$(this).addClass('mobActive').siblings().removeClass('mobActive');
	})
	$('.mob-friend .mob-friend-tit').click(function() {
		if ($('.mob-friend .friend-ul').is(':visible')) {
			$(this).removeClass('mobActive');
		} else {
			$(this).addClass('mobActive');
			$('.mob-nnav .mob-list>ul>li').removeClass('mobActive');
		}
	})
	/* banner */
	var mySwiper = new Swiper('#swiperMain', {
		loop: true,
		simulateTouch: false,
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// navigation: {
		//     nextEl: '.swiper-button-next',
		//     prevEl: '.swiper-button-prev',
		// }
	})
	// 加载
	// resize();
	// $(window).resize(function() {
	//   resize();
	// });

	if ($(window).width() > 1024) {
		$(".load").height(window.innerHeight);
		$('body', 'html').addClass("fex");
		setTimeout(function() {
			$(".load").addClass("onc");
		}, 1000);
		setTimeout(function() {
			$(".w-warpx").addClass("onc")
			$('body', 'html').removeClass("fex");
		}, 1000)
	}

	// $(".products").click(function() {
	// 	if ($(".maiLeftPro").css("left") == "-352px") {
	// 		$('.maiLeftMenu').css('left', '-352px');
	// 		$(".maiLeftPro").css("left", "0px");
	// 		$(".maiCenter").css("margin-left", "352px");
	// 		$(".header").css("left", "352px");

	// 	} else {
	// 		$(".maiLeftPro").css("left", "-352px");
	// 		$(".maiCenter").css("margin-left", "0px");
	// 		$(".header").css("left", "0px");
	// 	}

	// 	return false;
	// });

	$('.menu').click(function() {
		if ($('.maiLeftMenu').css('left') == '-352px') {
			$(".maiLeftPro").css("left", "-352px");
			$('.maiLeftMenu').css('left', '0px');
			$(".maiCenter").css("margin-left", "352px");
			$(".header").css("left", "352px");

		} else {
			$('.maiLeftMenu').css('left', '-352px');
			$(".maiCenter").css("margin-left", "0px");
			$(".header").css("left", "0px");
		}
		return false;
	})

	$('.fridends-btn').click(function() {
		if ($('.maiRight').css('right') == '-350px') {
			$('.maiRight').css("right", "0px");
			$('.maiCenter').css('margin-right', '350px');
			$('.header').css('left', "-350px");
		} else {
			// alert(111)
			$('.maiRight').css('right', '-350px');
			$('.maiCenter').css('margin-right', '0px');
			$('.header').css('left', '0px');
		}

		return false;

	})

	$(document).click(function(e) {
		$('.maiLeftMenu').css('left', '-352px');
		$(".maiCenter").css("margin-left", "0px");
		$(".header").css("left", "0px");

		// $(".maiLeftPro").css("left", "-352px");
		// $(".maiCenter").css("margin-left", "0px");
		// $(".header").css("left", "0px");

		$('.maiRight').css('right', '-350px');
		$('.maiCenter').css('margin-right', '0px');
		$('.header').css('right', '0px');
	});

	$(".maiLeftMenu").click(function() {
		return false;
	});
	// $(".maiLeftPro").click(function() {
	// 	return false;
	// });
	$(".maiRight").click(function() {
		return false;
	});

	$('.maiLeftMenu>ul>li').click(function(e) {
		e.stopPropagation();
		return true;
	})




	// mob-friend
	$('.mob-friend .mob-friend-tit').click(function() {
		if ($('.mob-friend .friend-ul').is(':visible')) {
			$('.mob-friend .friend-ul').slideUp();
		} else {
			$('.mob-friend .friend-ul').slideDown();
		}
	})



	// 视频播放

	// 点击左边图片,视频播放
	$('.pro-left ul>li .img').click(function() {
		var obj = $(this).parent();
		var nums = obj.index();
		// console.log(nums)
		var path = obj.attr('video');
		// console.log(path);
		$('.pro .video-content').css({
			'display': 'block'
		})
		// console.log($('.pro .video-content').find('source').css('src', path).parent())
		// $('.pro .video-content').find('source').attr('src', path).parent().trigger('play');

		var dom =
			`
			<video width="100%" controls>
				<source src="${path}" type="video/mp4">
				</source>
			</video>
		`
		$(".video-content").html(dom).find("video").get(0).play()

		// $('.pro .video-content').find('source').attr('src', path);
		// setTimeout(function() {
		// 	$(".pro .video-content video").get(0).play();
		// }, 5000)

		$('.video-box .img').css('display', 'none');
	})
	$('.video-box .img').click(function() {
		// alert(111)
		// $(this).find('img').css('display', 'none').parent().siblings().css('display', 'block').find('video').trigger(
		// 	'play');
		var path = $('.pro-left ul>li').eq(0).attr('video');
		// $(this).find('img').css('display', 'none').parent().siblings().css('display', 'block')
		$(this).css('display', 'none').siblings().css('display', 'block')
		// console.log(path)
		var dom =
			`
			<video width="100%" height="100%" controls>
				<source src="${path}" type="video/mp4">
				</source>
			</video>
		`
		$(".video-content").html(dom).find("video").get(0).play()

	})

	// 手机端视频播放
	$('.mob-buy>ul>li>.img').click(function() {
		var mobPath = $(this).parent().attr('video');
		// console.log(mobPath)
		$('.pro .video-box .img').css('display', 'none');
		$('.pro .video-content').css({
			'display': 'block'
		})
		var dom =
			`<video width="100%" height="100%" controls>
				<source src="${mobPath}" type="video/mp4">
				</source>
			</video>`
		$(".video-content").html(dom).find('video').get(0).play();
	})
	// 新闻tab切换
	// function change(num){

	// }
	$('.news-content .news-left ul li').click(function() {
		var num = $(this).index()
		// console.log(num)
		$(this).addClass('news-active').siblings().removeClass('news-active');
		$('.news-right .newspart').eq(num).css('display', 'block').siblings().css('display', 'none')
	})

	$('.friend-ul>li .top-nav').click(function() {
		if ($(this).siblings('ul').is(':visible')) {
			$(this).find('.info').css('color', '#666')
			$(this).find('.map1').show();
			$(this).find('.mapactive').hide();
			$(this).find('.dispread').show();
			$(this).find('.reclose').hide();
			$(this).siblings('ul').slideUp();

		} else {
			$(this).find('.info').css('color', '#11aee5')
			$(this).find('.map1').hide();
			$(this).find('.mapactive').show();
			$(this).find('.dispread').hide();
			$(this).find('.reclose').show();
			$(this).siblings('ul').slideDown();
		}
		$(this).parent().siblings().find('ul').slideUp();
		$(this).parent().siblings().find('.top-nav').find('.info').css('color', '#666');
		$(this).parent().siblings().find('.top-nav').find('.map1').show();
		$(this).parent().siblings().find('.top-nav').find('.mapactive').hide();
		$(this).parent().siblings().find('.top-nav').find('.dispread').show();
		$(this).parent().siblings().find('.top-nav').find('.reclose').hide();;
	})

	// layui
	layui.use('layer', function() { //独立版的layer无需执行这一句
		var $ = layui.jquery,
			layer = layui.layer; //独立版的layer无需执行这一句

		//触发事件
		var active = {
			setTop: function() {
				var that = this;
				//多窗口模式，层叠置顶
				layer.open({
					type: 2 //此处以iframe举例
						,
					title: '当你选择该窗体时，即会在最顶端',
					area: ['550px', '339px'],
					shade: 0,
					maxmin: true,
					offset: [ //为了演示，随机坐标
						Math.random() * ($(window).height() - 300), Math.random() * ($(window).width() - 390)
					],
					content: '//layer.layui.com/test/settop.html',
					btn: ['继续弹出', '全部关闭'] //只是为了演示
						,
					yes: function() {
						$(that).click();
					},
					btn2: function() {
							layer.closeAll();
						}

						,
					zIndex: layer.zIndex //重点1
						,
					success: function(layero) {
						layer.setTop(layero); //重点2
					}
				});
			},

			offset: function(othis) {
				var type = othis.data('type'),
					text = othis.text();

				layer.open({
					type: 1,
					shadeClose: true,
					offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
						,
					id: 'layerDemo' + type //防止重复弹出
						,
					//修改弹出框里面的内容
					content: $('#weialert'),
					// '<div class="weibox">' + '<div class="weiboxLt">'+'<div class="weiTop">+'+'</div>' + '</div>' +'<div class="weboxRt">+'</div>'+ '</div>',
					// btn: '关闭全部',
					area: screen() >= 1 ? ['550px', '339px'] : ['90%', 'auto'], //定义弹出框大小
					btnAlign: 'c' //按钮居中
						,
					shade: [0.3, '#000'] //不显示遮罩
						,
					yes: function() {
						layer.closeAll();
					}
				});
			}
		};

		$('#layerDemo .layui-btn').on('click', function() {
			var othis = $(this),
				method = othis.data('method');
			active[method] ? active[method].call(this, othis) : '';
		});

	});
	// var img = "<img src='images/w2_03.png' id='imgwei' style='width:100%'>"
	//判断浏览器大小方法
	function screen() {
		//获取当前窗口的宽度
		var width = $(window).width();
		if (width > 1200) {
			// alert(3333)
			return 3; //大屏幕
		} else if (width > 992) {
			return 2; //中屏幕
		} else if (width > 768) {
			return 1; //小屏幕
		} else {
			// alert(2222)
			return 0; //超小屏幕

		}
	}




});
