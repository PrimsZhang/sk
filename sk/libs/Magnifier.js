;(function(){
	"use strict";
	$.fn.magi = function(options){
		class Magnifier{
			constructor(options){
				this.magfBox = options.magfBox;
				this.picWidth = options.picWidth;
				this.picHeight = options.picHeight;
				this.scale = options.scale;
				this.showScale = options.showScale;
				this.showTop = options.showTop;
				this.showLeft = options.showLeft;
				this.sBox = this.magfBox.children[0];
				this.span = this.sBox.querySelector("span");
				this.sImg = this.sBox.querySelector("img");
				this.bBox = this.magfBox.children[1];
				this.bImg = this.bBox.querySelector("img");
				this.init();    
			}
			init(){
				this.sBox.style.cssText = `position:relative;width: ${this.picWidth}px;height: ${this.picHeight}px;`;
				this.sImg.style.cssText = `width: ${this.picWidth}px;height: ${this.picHeight}px;`;
				this.span.style.cssText = `width: ${this.picWidth/this.scale*this.showScale}px;height: ${this.picHeight/this.scale*this.showScale}px;position: absolute;left: 0;top: 0;background: rgba(200,200,200,.6);display: none;`;
				this.bBox.style.cssText = `width: ${this.picWidth*this.showScale}px;height: ${this.picHeight*this.showScale}px;position: absolute;left: ${this.showLeft}px;top: ${this.showTop}px;overflow: hidden;display: none;`;
				this.bImg.style.cssText = `width: ${this.picWidth*this.scale}px;height: ${this.picHeight*this.scale}px;position: absolute;`
				var that = this;
				this.sBox.onmouseover = function(){
					that.show();
				}
		
				this.sBox.onmouseout = function(){
						that.hide();
				}
		
				this.sBox.onmousemove = function(eve){
					var e = eve || window.event;
					that.move(e);
				}
			}
		
			move(e){
				var l = e.pageX - this.sBox.offsetLeft - this.span.offsetWidth/2;
				var t = e.pageY - this.sBox.offsetTop - this.span.offsetHeight/2;
				
				if(l<0) l=0;
				if(t<0) t=0;
				if(l > this.sBox.offsetWidth - this.span.offsetWidth){
					l = this.sBox.offsetWidth - this.span.offsetWidth;
				}
				if(t > this.sBox.offsetHeight - this.span.offsetHeight){
					t = this.sBox.offsetHeight - this.span.offsetHeight;
				}
				this.span.style.left = l + "px";
				this.span.style.top = t + "px";
				var x = l/(this.sBox.offsetWidth - this.span.offsetWidth);
				var y = t/(this.sBox.offsetHeight - this.span.offsetHeight);
				
				this.bImg.style.left = x * -(this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
				this.bImg.style.top = y * -(this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
			}
		
			show(){
				this.span.style.display = "block";
				this.bBox.style.display = "block";
			}
		
			hide(){
				this.span.style.display = "none";
				this.bBox.style.display = "none";
			}
		}
		new Magnifier(options);
	}

})(jQuery);