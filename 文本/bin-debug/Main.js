var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//使用文本
//egret提供三种不同类型的文本
//1、普通文本，用于显示标准文本内容的文本类型
//2、输入文本，允许用户输入的文本类型
//3、位图文本，借助位图字体渲染的文本类型
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function () {
        //创建文本
        //egret.TextField类，表示文本类型
        var label = new egret.TextField();
        this.addChild(label);
        label.text = "这是一个文本"; //text属性设置文本内容
        label.size = 36; //size属性设置文本大小
        label.textColor = 0x0000ff; //textColor属性设置文本颜色
        label.fontFamily = "Kaiti"; //fontFamily属性设置文本字体，浏览器/app没有该字体时会用默认字体显示
        //设置文本大小
        label.width = 400;
        label.height = 400;
        label.textAlign = egret.HorizontalAlign.CENTER; //文本横向布局
        label.verticalAlign = egret.VerticalAlign.MIDDLE; //文本纵向布局
        //文本样式
        //描边
        label.strokeColor = 0xffffff;
        label.stroke = 2;
        //斜体加粗
        label.italic = true;
        label.bold = true;
        //多种样式文本混合
        var tx = new egret.TextField();
        tx.width = 400;
        tx.x = 10;
        tx.y = 400;
        tx.textColor = 0;
        tx.size = 20;
        tx.fontFamily = "微软雅黑";
        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.textFlow = [
            { text: "妈妈再也不用担心我在", style: { "size": 12 } },
            { text: "Egret", style: { "textColor": 0x336699, "size": 60, "strokeColor": 0x6699cc, "stroke": 2 } },
            { text: "里说一句话不能包含各种", style: { "fontFamily": "楷体" } },
            { text: "五", style: { "textColor": 0xff0000 } },
            { text: "彩", style: { "textColor": 0x00ff00 } },
            { text: "缤", style: { "textColor": 0xf000f0 } },
            { text: "纷", style: { "textColor": 0x00ffff } },
            { text: "、\n" },
            { text: "大", style: { "size": 36 } },
            { text: "小", style: { "size": 6 } },
            { text: "不", style: { "size": 16 } },
            { text: "一", style: { "size": 24 } },
            { text: "、" },
            { text: "格", style: { "italic": true, "textColor": 0x00ff00 } },
            { text: "式", style: { "size": 16, "textColor": 0xf000f0 } },
            { text: "各", style: { "italic": true, "textColor": 0xf06f00 } },
            { text: "样", style: { "fontFamily": "楷体" } },
            { text: "" },
            { text: "的文字了！" }
        ];
        this.addChild(tx);
        //超文本链接
        var link = new textEventDemo();
        this.addChild(link);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map