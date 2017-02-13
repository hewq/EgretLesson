var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //创建一个文本框，设定一个scrollRect限制显示范围
        var bigText = new egret.TextField();
        bigText.text = "平移和滚动显示对象，平移和滚动显示对象";
        bigText.scrollRect = new egret.Rectangle(0, 0, 200, 50);
        bigText.cacheAsBitmap = true;
        this.addChild(bigText);
        //控制尺寸
        bigText.width = 1000;
        bigText.height = 1000;
        //缩放属性
        bigText.scaleX = 2;
        bigText.scaleY = 5;
        //旋转
        //bigText.rotation = 45;
        //xieqie
        bigText.skewX = 10;
        //创建一个按钮，点击后控制文本内容向左移动
        var btnLeft = new egret.Shape();
        btnLeft.graphics.beginFill(0xcccc01);
        btnLeft.graphics.drawRect(0, 0, 50, 50);
        btnLeft.graphics.endFill();
        btnLeft.x = 50;
        btnLeft.y = 100;
        this.addChild(btnLeft);
        btnLeft.touchEnabled = true;
        btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);
        //创建一个按钮，点击后控制文本内容向左移动
        var btnRight = new egret.Shape();
        btnRight.graphics.beginFill(0x01cccc);
        btnRight.graphics.drawRect(0, 0, 50, 50);
        btnRight.graphics.endFill();
        btnRight.x = 150;
        btnRight.y = 100;
        this.addChild(btnRight);
        btnRight.touchEnabled = true;
        btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);
        //点击按钮后，控制文本左右移动的方法
        function onScroll(e) {
            var rect = bigText.scrollRect;
            switch (e.currentTarget) {
                case btnLeft:
                    rect.x += 20;
                    break;
                case btnRight:
                    rect.x -= 20;
                    break;
            }
            bigText.scrollRect = rect;
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map