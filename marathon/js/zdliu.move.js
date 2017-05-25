(function(){
    var zdMove = function(o){
        var that = this;
        this.config = o;
        this.control = false;
        this.sPos = {};
        this.mPos = {};
        this.dire_h =1; //1 判断上下， 2 判断左右
        this.dire =0; //0未移动 1向上 2向下 3向左 4向右
        this.config.bind.addEventListener('touchstart', function(e){ return that.start(e); } ,false);
        this.config.bind.addEventListener('mousedown', function(e){ return that.start(e); } ,false);
        this.config.bind.addEventListener('touchmove', function(e){ return that.move(e); } ,false);
        this.config.bind.addEventListener('mousemove', function(e){ return that.move(e); } ,false);
        this.config.bind.addEventListener('touchend', function(e){ return that.end(e); } ,false);
        this.config.bind.addEventListener('mouseup', function(e){ return that.end(e); } ,false);
    };

    zdMove.prototype.start = function(e){
        var point = e.touches ? e.touches[0] : e;
        this.sPos.x = point.screenX;
        this.sPos.y = point.screenY;
    };
    zdMove.prototype.move = function(e){
        var point = e.touches ? e.touches[0] : e;
        this.control = true;
        this.mPos.x = point.screenX;
        this.mPos.y = point.screenY;
    };

    zdMove.prototype.end = function(e){
        switch (this.dire_h){
            case 1:this.control?((this.mPos.y-this.sPos.y>5)?this.dire=2:(this.mPos.y-this.sPos.y<-5)?this.dire=1:''):'';break;
            case 2:this.control?((this.mPos.x-this.sPos.x>5)?this.dire=4:(this.mPos.x-this.sPos.x<-5)?this.dire=3:''):'';break;
        }
        this.control = false;
        this.config.callback(this);
        this.dire=0;
    };
    window.zdMove = zdMove;
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);// 禁止微信touchmove冲突
    document.addEventListener('mousemove', function (e) { e.preventDefault(); }, false);// 禁止微信mousemove冲突

}());

