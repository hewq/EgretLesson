var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//通过触摸移动显示对象
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        /*
            当手指按到屏幕时监听TOUCH_MOVE事件，然后每次手指移动时都会调用此函数，使拖动的对象跳到手指所在的x,y坐标，
            当手指离开屏幕后取消监听，对象停止跟随
         */
        //设定两个偏移量
        var offsetX;
        var offsetY;
        //画一个红色的圆
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        this.addChild(circle);
        //手指按到屏幕，触发startMove方法
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        //手指离开屏幕时，触发stopMove方法
        this.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
        function startMove(e) {
            //计算手指和圆形的距离
            offsetX = e.stageX - circle.x;
            offsetY = e.stageY - circle.y;
            //手指在屏幕上移动会触发onMove方法
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function stopMove(e) {
            //手指离开屏幕，消除手指移动监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function onMove(e) {
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            circle.x = e.stageX - offsetX;
            circle.y = e.stageY - offsetY;
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map