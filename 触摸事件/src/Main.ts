class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener( egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
    }

    private onAddToStage(){
        var tet : TouchEventTest = new TouchEventTest();
        this.addChild( tet );
    }
}