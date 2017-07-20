<template>
	<div class="box" id="circle">
		<ul>
			<li class="clearfix">
				<div class="fl">
					<canvas id="one" width="100" height="100"></canvas>
				</div>
				<div class="fr">
					<p><span>未　　售</span><b>39</b>套</p>
					<p><span>面　　积</span><b>100</b>平</p>
					<p><span>总　　价</span><b>3339</b>万元</p>
				</div>
			</li>
			<li class="clearfix">
				<div class="fl">
					<canvas id="two" width="100" height="100"></canvas>
				</div>
				<div class="fr">
					<p><span>大定已签</span><b>39</b>套</p>
					<p><span>面　　积</span><b>1050</b>平</p>
					<p><span>总　　价</span><b>3977</b>万元</p>
				</div>
			</li>
			<li class="clearfix">
				<div class="fl">
					<canvas id="three" width="100" height="100"></canvas>
				</div>
				<div class="fr">
					<p><span>大定未签</span><b>39</b>套</p>
					<p><span>面　　积</span><b>1050</b>平</p>
					<p><span>总　　价</span><b>3977</b>万元</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'circle',
		methods: {
			drawCircle(_options){
				var options = _options || {};    //获取或定义options对象;
				options.angle = options.angle || 1;
				options.color = options.color || '#fff';
				options.lineWidth = options.lineWidth || 10;
				options.lineCap = options.lineCap || 'square';

				var oBoxOne = document.getElementById(options.id);
				var sCenter = oBoxOne.width / 2;
				var ctx = oBoxOne.getContext('2d');
				var nBegin = Math.PI / 2;
				var nEnd = Math.PI * 2;
				var grd = ctx.createLinearGradient(0, 0, oBoxOne.width, 0);
				grd.addColorStop(0, 'red');
				grd.addColorStop(0.5, 'yellow');
				grd.addColorStop(1, 'green');

				ctx.textAlign = 'center';
				ctx.font = 'normal normal bold 20px Arial';
				ctx.fillStyle = options.color == 'grd' ? grd : options.color;
				ctx.fillText((options.angle * 100) + '%', sCenter, sCenter);
				/*ctx.strokeStyle = grd;
				ctx.strokeText((options.angle * 100) + '%', sCenter, sCenter);*/
				ctx.lineCap = options.lineCap;
				ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
				ctx.lineWidth = options.lineWidth;

				ctx.beginPath();
				ctx.strokeStyle = '#D8D8D8';
				ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, nEnd, false);
				ctx.stroke();

				var imd = ctx.getImageData(0, 0, 240, 240);
				function draw(current) {
				    ctx.putImageData(imd, 0, 0);
				    ctx.beginPath();
				    ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
				    ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, (nEnd * current) - nBegin, false);
				    ctx.stroke();
				}

				var t = 0;
				var timer = null;
				function loadCanvas(angle) {
				    timer = setInterval(function(){
				        if (t > angle) {
				            draw(options.angle);
				            clearInterval(timer);
				        }else{
				            draw(t);
				            t += 0.02;
				        }
				    }, 20);
				}
				loadCanvas(options.angle);
				timer = null;
			}
		},
		mounted(){
			this.drawCircle({
			    id: 'one',
			    color: '#3BAFC1',
			    angle: 0.5,
			    lineWidth: 5
			});

			this.drawCircle({
			    id: 'two',
			    angle: 0.75,
			    color: '#F2AD2E',
			    lineWidth: 5
			});

			this.drawCircle({
			    id: 'three',
			    angle: 0.9,
			    lineWidth: 5,
			    color: '#42C29D'
			});
		}
	}
</script>

<style scoped lang='less'>
	.box{
		margin-top: 68px;
		padding: 0 20px;
		>ul{
			margin: 0;
			padding: 0;
			>li {
			    margin: 0 0 15px 0;
			    padding: 0;
			    >.fl{
			    	margin-right: 20px;
			    }
			    >.fr{
			    	>p{
			    		margin-top: 0;
			    	}
			    }
			}
		}
	}
	
</style>