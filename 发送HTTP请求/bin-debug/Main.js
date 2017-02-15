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
        //实例化一个HttpRequest对象
        var request = new egret.HttpRequest();
        //设置响应类型
        request.responseType = egret.HttpResponseType.TEXT;
        //用open初始化请求一个对象，初始化请求地址和请求类型
        request.open("http://httpbin.org/get", egret.HttpMethod.GET);
        //设置请求头对象
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //发送请求
        request.send();
        //添加监听
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    Main.prototype.onGetComplete = function (event) {
        var request = event.currentTarget;
        console.log("get data : ", request.response); //response属性用来获取返回的信息
        var responseLabel = new egret.TextField();
        responseLabel.size = 20;
        responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
    };
    Main.prototype.onGetIOError = function (event) {
        console.log("get error : " + event);
    };
    Main.prototype.onGetProgress = function (event) {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%"); //输出加载速度
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map