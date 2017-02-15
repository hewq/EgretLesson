class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener( egret.Event.ADDED_TO_STAGE , this.onAddToStage , this );
    }

    private onAddToStage(){
        //实例化一个HttpRequest对象
        var request = new egret.HttpRequest();
        //设置响应类型
        request.responseType = egret.HttpResponseType.TEXT;
        //用open初始化请求一个对象，初始化请求地址和请求类型
        request.open( "http://httpbin.org/get", egret.HttpMethod.GET );
        //设置请求头对象
        request.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
        //发送请求
        request.send();
        //添加监听
        request.addEventListener( egret.Event.COMPLETE, this.onGetComplete,this );
        request.addEventListener( egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this );
        request.addEventListener( egret.ProgressEvent.PROGRESS, this.onGetProgress, this );
    }

    private onGetComplete( event : egret.Event ) : void{
        var request = <egret.HttpRequest> event.currentTarget;
        console.log( "get data : ", request.response ); //response属性用来获取返回的信息
        var responseLabel = new egret.TextField();
        responseLabel.size = 20;
        responseLabel.text = "GET response: \n" + request.response.substring( 0,50 ) + "...";
        this.addChild( responseLabel );
        responseLabel.x = 50;
        responseLabel.y = 70;
    }

    private onGetIOError( event : egret.IOErrorEvent ) : void{
        console.log( "get error : " + event );
    }

    private onGetProgress( event : egret.ProgressEvent ) : void{
        console.log( "get progress : " + Math.floor( 100 * event.bytesLoaded / event.bytesTotal ) + "%" );  //输出加载速度
    }
}