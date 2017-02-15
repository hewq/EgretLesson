//九宫格
class BitmapTest extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener( egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
    }

    private onAddToStage( event : egret.Event ){
        RES.addEventListener( RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this );
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("preload");
    }

    private onGroupComp(){
        var img : egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("box");
        img.width *= 2;
        this.addChild( img );
        var img2 : egret.Bitmap = new egret.Bitmap();
        img2.texture = RES.getRes("box");
        var rect : egret.Rectangle = new egret.Rectangle( 30 , 31 , 40 , 41 );
        img2.scale9Grid = rect;
        img2.width *= 2;
        img2.y = 150;
        this.addChild( img2 );
    }
}