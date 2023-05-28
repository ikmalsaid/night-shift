gdjs.WinCode = {};
gdjs.WinCode.GDTransitionObjects1= [];
gdjs.WinCode.GDTransitionObjects2= [];
gdjs.WinCode.GDOverlayObjects1= [];
gdjs.WinCode.GDOverlayObjects2= [];
gdjs.WinCode.GDBlinkingTextObjects1= [];
gdjs.WinCode.GDBlinkingTextObjects2= [];


gdjs.WinCode.asyncCallback19217284 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}
gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.WinCode.asyncCallback19217284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WinCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19216580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.WinCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.WinCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\button.mp3", false, 100, 1);
}
{ //Subevents
gdjs.WinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.WinCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.WinCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\game-win.mp3", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlinkingText"), gdjs.WinCode.GDBlinkingTextObjects1);
{for(var i = 0, len = gdjs.WinCode.GDBlinkingTextObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDBlinkingTextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDTransitionObjects1.length = 0;
gdjs.WinCode.GDTransitionObjects2.length = 0;
gdjs.WinCode.GDOverlayObjects1.length = 0;
gdjs.WinCode.GDOverlayObjects2.length = 0;
gdjs.WinCode.GDBlinkingTextObjects1.length = 0;
gdjs.WinCode.GDBlinkingTextObjects2.length = 0;

gdjs.WinCode.eventsList1(runtimeScene);

return;

}

gdjs['WinCode'] = gdjs.WinCode;
