var deviceIP = ""
/* 
 *  功能解释：
 *  channel：通道1A/1B/2A/2B/通用下的各个参数
 *  channelMode：启动按键右边的模式选择下拉框
 *          channelConfig
 */
var channel1A = {
    length:"",        //（通道的长度）
    frame:"",          //（通道的帧数）
    frameInterval:"",  //（通道的帧间隔）
    errorRate:"",       //（通道的误码率）
    baudRate:"",         //（通道的波特率）
    startLocation:"",    //（通道的MV采集点）
    bytes:"",            //（通道的采集字节量）
    vox:"",              //（通道的VOX）
    text:"",             //（通道的明文）
 }
 var channel1B = {
    length:"",        //（通道的长度）
    frame:"",          //（通道的帧数）
    frameInterval:"",  //（通道的帧间隔）
    errorRate:"",       //（通道的误码率）
    baudRate:"",         //（通道的波特率）
    startLocation:"",    //（通道的MV采集点）
    bytes:"",            //（通道的采集字节量）
    vox:"",              //（通道的VOX）
    text:"",             //（通道的明文）
 }
 var channel2A = {
    length:"",        //（通道的长度）
    frame:"",          //（通道的帧数）
    frameInterval:"",  //（通道的帧间隔）
    errorRate:"",       //（通道的误码率）
    baudRate:"",         //（通道的波特率）
    startLocation:"",    //（通道的MV采集点）
    bytes:"",            //（通道的采集字节量）
    vox:"",              //（通道的VOX）
    text:"",             //（通道的明文）
 }
 var channel2B = {
    length:"",        //（通道的长度）
    frame:"",          //（通道的帧数）
    frameInterval:"",  //（通道的帧间隔）
    errorRate:"",       //（通道的误码率）
    baudRate:"",         //（通道的波特率）
    startLocation:"",    //（通道的MV采集点）
    bytes:"",            //（通道的采集字节量）
    vox:"",              //（通道的VOX）
    text:"",             //（通道的明文）
 }
 var channelAll = {
    length:"",        //（通道的长度）
    frame:"",          //（通道的帧数）
    frameInterval:"",  //（通道的帧间隔）
    errorRate:"",       //（通道的误码率）
    baudRate:"",         //（通道的波特率）
    startLocation:"",    //（通道的MV采集点）
    bytes:"",            //（通道的采集字节量）
    vox:"",              //（通道的VOX）
    text:"",             //（通道的明文）
 }
var channelMode = null   //1-14（数字，界面启动按键的右边可以选择模式，最顶上的模式代表1，往下递增）

/**----------------------------------------------------------------------------------**/ 

/* 
 *  功能解释：菜单->监控参数
 *          monitorConfig
 */
var device1MC = { //monitorConfig
    workMode:null,           //（设置工作模式，对应的就是下拉框里给的数字:10-16）
    workClass:null,          //（种类,:1/6/7/8）
    workNumber:null        //（组号:0-4）
}
var device2MC = { //monitorConfig
    workMode:null,           //（设置工作模式，对应的就是下拉框里给的数字:10-16）
    workClass:null,          //（种类,:1/6/7/8）
    workNumber:null        //（组号:0-4）
}

/**----------------------------------------------------------------------------------**/ 

/* 
 *  功能解释：菜单->测评参数
 *          evaluateConfig
 */
var device1EC = { //evaluateConfig
    IKmode:null,      //（数字，IK模式:0-3）,
    IKparam:"",         //（字符串，IK参数）,
    WKmode:null,      //（数字，WK模式:0-3）,
    WKparam:""          //（字符串，WK参数）
}
var device2EC = { //evaluateConfig
    IKmode:null,      //（数字，IK模式:0-3）,
    IKparam:"",         //（字符串，IK参数）,
    WKmode:null,      //（数字，WK模式:0-3）,
    WKparam:""          //（字符串，WK参数）
}

/**----------------------------------------------------------------------------------**/ 

export default {
    deviceIP,
    channel1A,
    channel1B,
    channel2A,
    channel2B,
    channelAll,
    channelMode,
    device1MC,
    device2MC,
    device1EC,
    device2EC
}