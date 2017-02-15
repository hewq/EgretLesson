//男朋友类
class Boy extends egret.Sprite{
    public constructor(){
        super();
    }

    public order(){
        //生成约会事件对象
        var daterEvent : DateEvent = new DateEvent( DateEvent.DATE );

        //添加对应对应的约会信息
        daterEvent._year = 2017;
        daterEvent._month = 2;
        daterEvent._date = 15;
        daterEvent._where = "KFC";
        daterEvent._todo = "eatting";

        //发送要求事件
        this.dispatchEvent( daterEvent );
    }
}