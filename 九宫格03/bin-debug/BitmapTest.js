var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//九宫格
var BitmapTest = (function (_super) {
    __extends(BitmapTest, _super);
    function BitmapTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    BitmapTest.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    BitmapTest.prototype.onGroupComp = function () {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("box");
        img.width *= 0.5;
        this.addChild(img);
        var img2 = new egret.Bitmap();
        img2.texture = RES.getRes("box");
        var rect = new egret.Rectangle(30, 31, 40, 41);
        img2.scale9Grid = rect;
        img2.width *= 0.5;
        img2.y = 150;
        this.addChild(img2);
    };
    return BitmapTest;
}(egret.DisplayObjectContainer));
__reflect(BitmapTest.prototype, "BitmapTest");
//# sourceMappingURL=BitmapTest.js.map