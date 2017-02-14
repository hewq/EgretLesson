//文本超链接事件
class textEventDemo extends egret.DisplayObjectContainer{
    constructor(){
        super();
        var tx : egret.TextField = new egret.TextField;
        tx.textFlow = new Array<egret.ITextElement>(
            { text : "这段文字有链接", style : { "href" : "event:点击执行动作" } }
            ,{ text : "\n点击跳转",style : { "href" : "http://www.egret.com/" } }   //只适用于web端
            ,{ text : "\n这段文字没有链接",style : {} }
        );
        tx.touchEnabled = true;
        tx.addEventListener( egret.TextEvent.LINK, function( evt : egret.TextEvent ){
            console.log( evt.text );
        },this );
        tx.x = 10;
        tx.y = 90;
        this.addChild( tx );
    }
}