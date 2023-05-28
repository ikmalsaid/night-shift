gdjs.LoseCode = {};
gdjs.LoseCode.GDTransitionObjects1= [];
gdjs.LoseCode.GDTransitionObjects2= [];
gdjs.LoseCode.GDOverlayObjects1= [];
gdjs.LoseCode.GDOverlayObjects2= [];
gdjs.LoseCode.GDBlinkingTextObjects1= [];
gdjs.LoseCode.GDBlinkingTextObjects2= [];


gdjs.LoseCode.asyncCallback19209740 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}
gdjs.LoseCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LoseCode.asyncCallback19209740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoseCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19209036);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LoseCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.LoseCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.LoseCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\button.mp3", false, 100, 1);
}
{ //Subevents
gdjs.LoseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LoseCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.LoseCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.LoseCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\game-over.mp3", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlinkingText"), gdjs.LoseCode.GDBlinkingTextObjects1);
{for(var i = 0, len = gdjs.LoseCode.GDBlinkingTextObjects1.length ;i < len;++i) {
    gdjs.LoseCode.GDBlinkingTextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.LoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseCode.GDTransitionObjects1.length = 0;
gdjs.LoseCode.GDTransitionObjects2.length = 0;
gdjs.LoseCode.GDOverlayObjects1.length = 0;
gdjs.LoseCode.GDOverlayObjects2.length = 0;
gdjs.LoseCode.GDBlinkingTextObjects1.length = 0;
gdjs.LoseCode.GDBlinkingTextObjects2.length = 0;

gdjs.LoseCode.eventsList1(runtimeScene);

return;

}

gdjs['LoseCode'] = gdjs.LoseCode;
