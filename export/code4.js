gdjs.HomeCode = {};
gdjs.HomeCode.GDTransitionObjects1= [];
gdjs.HomeCode.GDTransitionObjects2= [];
gdjs.HomeCode.GDOverlayObjects1= [];
gdjs.HomeCode.GDOverlayObjects2= [];
gdjs.HomeCode.GDBlinkingTextObjects1= [];
gdjs.HomeCode.GDBlinkingTextObjects2= [];
gdjs.HomeCode.GDAboutObjects1= [];
gdjs.HomeCode.GDAboutObjects2= [];


gdjs.HomeCode.asyncCallback19712756 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Story1", false);
}}
gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.HomeCode.asyncCallback19712756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19712052);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.HomeCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\button.mp3", false, 100, 1);
}
{ //Subevents
gdjs.HomeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.HomeCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Sounds\\music.mp3", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlinkingText"), gdjs.HomeCode.GDBlinkingTextObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDBlinkingTextObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDBlinkingTextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDTransitionObjects1.length = 0;
gdjs.HomeCode.GDTransitionObjects2.length = 0;
gdjs.HomeCode.GDOverlayObjects1.length = 0;
gdjs.HomeCode.GDOverlayObjects2.length = 0;
gdjs.HomeCode.GDBlinkingTextObjects1.length = 0;
gdjs.HomeCode.GDBlinkingTextObjects2.length = 0;
gdjs.HomeCode.GDAboutObjects1.length = 0;
gdjs.HomeCode.GDAboutObjects2.length = 0;

gdjs.HomeCode.eventsList1(runtimeScene);

return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
