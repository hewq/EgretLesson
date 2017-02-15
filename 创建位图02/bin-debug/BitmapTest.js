var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BitmapTest = (function (_super) {
    __extends(BitmapTest, _super);
    function BitmapTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    BitmapTest.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("Resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    BitmapTest.prototype.onGroupComplete = function () {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("bgImage");
        this.addChild(img);
    };
    return BitmapTest;
}(egret.DisplayObjectContainer));
__reflect(BitmapTest.prototype, "BitmapTest");
//# sourceMappingURL=BitmapTest.js.map