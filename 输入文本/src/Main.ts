class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener( egret.Event.ADDED_TO_STAGE, this.onAddToStage , this );
    }

    private onAddToStage(){
        var textInput : egret.TextField = new egret.TextField();
        textInput.type = egret.TextFieldType.INPUT;
        this.addChild( textInput );
        var button : egret.Shape = new egret.Shape();
        button.graphics.beginFill( 0x00cc00 );
        button.graphics.drawRect( 0 , 0 , 100 , 40 );
        button.graphics.endFill();
        button.y = 50;
        this.addChild( button );
        button.touchEnabled = true;
        button.addEventListener( egret.TouchEvent.TOUCH_BEGIN,(e) => {
            textInput.setFocus();
        },this );
    }

}