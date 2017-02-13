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
    Main.prototype.onAddToStage = function () {
        //测试
        var test = new egret.Shape();
        test.graphics.beginFill(0xff6600);
        test.graphics.drawCircle(100, 100, 25);
        test.graphics.endFill();
        this.addChild(test);
        test.y = 200;
        this.addChild(test);
        /*
            以下代码使两个显示对象可以跟随手指移动，只要手指在任意显示对象上按下，该显示对象就会移到舞台显示列表的顶部，
            所以拖动对象始终显示在顶部
         */
        //要拖拽的对象
        var draggedObject;
        var offsetX;
        var offsetY;
        //画一个红色的圆
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        this.addChild(circle);
        //画一个蓝色的正方形
        var square = new egret.Shape();
        square.graphics.beginFill(0x0000ff);
        square.graphics.drawRect(0, 0, 100, 100);
        square.graphics.endFill();
        this.addChild(square);
        //增加圆形触摸监听
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
        //增加圆形触摸监听
        square.touchEnabled = true;
        square.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        square.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
        function startMove(e) {
            //把手指按到的对象记录下来
            draggedObject = e.currentTarget;
            //计算手指和要拖动对象的距离
            offsetX = e.stageX - draggedObject.x;
            offsetY = e.stageY - draggedObject.y;
            //把触摸的对象显示在列表的顶层
            this.addChild(draggedObject);
            //手指在屏幕上移动，会触发onMove方法
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function stopMove(e) {
            //手指离开屏幕，移除手指移动监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function onMove(e) {
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，从而达到对象跟随手指移动的效果
            draggedObject.x = e.stageX - offsetX;
            draggedObject.y = e.stageY - offsetY;
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map