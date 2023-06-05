gdjs.ClickCode = {};
gdjs.ClickCode.GDTransitionObjects1= [];
gdjs.ClickCode.GDTransitionObjects2= [];
gdjs.ClickCode.GDOverlayObjects1= [];
gdjs.ClickCode.GDOverlayObjects2= [];
gdjs.ClickCode.GDBlinkingTextObjects1= [];
gdjs.ClickCode.GDBlinkingTextObjects2= [];


gdjs.ClickCode.asyncCallback21508964 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}
gdjs.ClickCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.ClickCode.asyncCallback21508964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ClickCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21508260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.ClickCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.ClickCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.ClickCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\button.mp3", false, 100, 1);
}
{ //Subevents
gdjs.ClickCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.ClickCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.ClickCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.ClickCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlinkingText"), gdjs.ClickCode.GDBlinkingTextObjects1);
{for(var i = 0, len = gdjs.ClickCode.GDBlinkingTextObjects1.length ;i < len;++i) {
    gdjs.ClickCode.GDBlinkingTextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.ClickCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClickCode.GDTransitionObjects1.length = 0;
gdjs.ClickCode.GDTransitionObjects2.length = 0;
gdjs.ClickCode.GDOverlayObjects1.length = 0;
gdjs.ClickCode.GDOverlayObjects2.length = 0;
gdjs.ClickCode.GDBlinkingTextObjects1.length = 0;
gdjs.ClickCode.GDBlinkingTextObjects2.length = 0;

gdjs.ClickCode.eventsList1(runtimeScene);

return;

}

gdjs['ClickCode'] = gdjs.ClickCode;
