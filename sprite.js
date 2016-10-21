
	function SpriteInMap() {
		this.x = 32*3;
		this.y = 32*2;
		this.vx = 0;
		this.vy = 0;
		this.ax = 0;
		this.ay = 0;
		this.mx = 3;
		this.my = 2;
	}

	SpriteInMap.prototype.desenha = function(ctx) {
		if(this.vx>=0){
			ctx.drawImage(imgPc,0,0,32,32,this.x-16,this.y-32,32,32);
		}else{
			ctx.save();
			ctx.translate(this.x,this.y);
			ctx.scale(-1,1);
			ctx.drawImage(imgPc,0,0,32,32,-16,-32,32,32);
			ctx.restore();
		}
		//ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(this.x-5,this.y-5);
		ctx.lineTo(this.x+5,this.y+5);
		ctx.lineTo(this.x+5,this.y-5);
		ctx.lineTo(this.x-5,this.y+5);
		ctx.closePath();
		//ctx.stroke();
		//ctx.strokeRect(this.mx*32, this.my*32,32,32);
	};

	SpriteInMap.prototype.move = function(dt){
		this.vx = this.vx + this.ax*dt;
		this.vy = this.vy + this.ay*dt + g*dt;
		var dx = this.vx*dt;
		var dy = this.vy*dt;
			if(mapa[this.my][this.mx+1] == 1 && this.vx>0){
				dx = Math.round(Math.min((this.mx+1)*32-this.x-8, this.vx*dt));
				if(Math.abs(dx)<0.001) this.vx = 0;
			}
			if(mapa[this.my][this.mx-1] == 1 && this.vx<0){
				dx = Math.round(Math.max((this.mx*32)-this.x+8, this.vx*dt));
				if(Math.abs(dx)<0.001) this.vx = 0;
			}
			if(mapa[this.my-1][this.mx] == 1 && this.vy<0){
				dy = Math.round(Math.max((this.my)*32-this.y+16, this.vy*dt));
			}
			if(mapa[this.my+1][this.mx] == 1 && this.vy>0){
				dy = Math.round(Math.min((this.my+1)*32-this.y-1, this.vy*dt));
			}
			if(Math.abs(dy)<0.001) this.vy = 0;
			this.x = this.x + dx;
			this.y = this.y + dy;
			this.mx = Math.floor(this.x/32);
			this.my = Math.floor(this.y/32);
	};

	SpriteInMap.prototype.colidiuCom = function(outro){
		if(this.x+16/2 < outro.x-16/2){
			return false;
		} else if(this.x-16/2 > outro.x+16/2){
			return false;
		} else if(this.y+16/2 < outro.y-16/2){
			return false;
		} else if(this.y-16/2 > outro.y+16/2){
			return false;
		} else {
			return true;
		}
	};