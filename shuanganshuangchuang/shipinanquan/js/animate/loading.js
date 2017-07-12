(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 30,
	color: "#FBFAF8",
	manifest: []
};



// symbols:



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.l1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.l2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.l3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.l5 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.l6 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F49922").ss(5,1,1).p("AD5AAQAABgg/BGQgFAFgFAFQhJBKhnAAQhmAAhJhKQgFgFgFgFQg/hGAAhgQAAhmBJhKQABgBACgCQBIhGBkAAQBlAABIBGQABACACABQBJBKAABmg");
	this.shape.setTransform(25,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,55,55);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,296,157);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap22();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,371,23);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-83.5,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.5,0,303,23);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap19();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,195,120);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.l6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,52);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.l5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54,51);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap20();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,23);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.l3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5,5);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.l2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,7);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.l1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFAF8").s().p("A0HFwIAArfMAoPAAAIAALfg");
	this.shape.setTransform(128.9,36.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,257.8,73.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F49922").s().p("AhbBbQgmgmABg1QgBg0AmgnQAngmA0AAQA1AAAmAmQAnAnAAA0QAAA1gnAmQgmAmg1AAQg0AAgngmg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(19));

	// Layer 2
	this.instance = new lib.Symbol18();
	this.instance.setTransform(24.9,25,0.824,0.824,0,0,0,24.9,25);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},5).to({scaleX:1.14,scaleY:1.14},7).to({scaleX:1.23,scaleY:1.23,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,45.3,45.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 5
	this.instance = new lib.Symbol5();
	this.instance.setTransform(3.5,10.7,1,1,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(4));

	// Symbol 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(3.5,3.5,1,1,0,0,0,3.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,13.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l3.png
	this.instance = new lib.Symbol9();
	this.instance.setTransform(75.5,46.4,1,1,0,0,0,3.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjsIYIAAojIJ1AAIAAIjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.4,y:53.6}).wait(10).to({graphics:null,x:0,y:0}).wait(11));

	// l6.png
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(46.5,25.8,1,1,0,0,0,28,26);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:78.3},9).wait(6).to({y:99.8,alpha:0},5).wait(1));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AlHEDIAAoFIKPAAIAAIFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:46.4,y:-10.5}).wait(10).to({graphics:null,x:0,y:0}).wait(11));

	// l5.png
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(46.5,-9,1,1,0,0,0,27,25.5);

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:43.5},9).to({_off:true},1).wait(5).to({_off:false,y:-30.5},0).to({y:-9},5).wait(1));

	// l1.png
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(43,32.5,1,1,0,0,0,43,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-34.5,93,99.6);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1));

	// Layer 12
	this.load_btn = new lib.Symbol1();
	this.load_btn.setTransform(320.5,933,0.42,1.1,0,0,0,128.8,36.8);
	this.load_btn.alpha = 0.012;
	this.load_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.load_btn).wait(68).to({_off:false},0).wait(12));

	// Layer 10
	this.instance = new lib.Symbol17();
	this.instance.setTransform(320,932,1,1,0,0,0,24.9,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({alpha:1},6).wait(6));

	// Layer 1
	this.instance_1 = new lib.Symbol16();
	this.instance_1.setTransform(320,805.8,1,1,0,0,0,148,78);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},9).wait(12));

	// Layer 9
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(320,526.1,1,1,0,0,0,185.5,11.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({alpha:1},10).wait(32));

	// Layer 8
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(320,481.7,1,1,0,0,0,69,11.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({alpha:1},10).wait(44));

	// Layer 7
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(320,437.3,1,1,0,0,0,120,11.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},10).wait(56));

	// Layer 5
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(310.7,645.4,1,1,0,0,0,128.8,36.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({alpha:1},6).to({_off:true},1).wait(65));

	// Layer 4
	this.load_txt = new cjs.Text("0%", "21px 'Microsoft YaHei'");
	this.load_txt.name = "load_txt";
	this.load_txt.textAlign = "center";
	this.load_txt.lineHeight = 23;
	this.load_txt.lineWidth = 156;
	this.load_txt.setTransform(318,633);

	this.timeline.addTween(cjs.Tween.get(this.load_txt).to({_off:true},15).wait(65));

	// Layer 2
	this.instance_6 = new lib.Symbol10();
	this.instance_6.setTransform(320,538,1,1,0,0,0,97.5,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0},9).to({_off:true},1).wait(69));

	// Layer 3
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(321,394,1,1,0,0,0,46.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({y:350.5},20,cjs.Ease.get(1)).wait(59));

	// Layer 13
	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(319.8,520,2.483,14.13,0,0,0,128.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,520,640,1040);

})(lib_loading = lib_loading||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib_loading, images, createjs, ss;