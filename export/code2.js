gdjs.Story2Code = {};
gdjs.Story2Code.GDTransitionObjects1= [];
gdjs.Story2Code.GDTransitionObjects2= [];
gdjs.Story2Code.GDOverlayObjects1= [];
gdjs.Story2Code.GDOverlayObjects2= [];
gdjs.Story2Code.GDBlinkingTextObjects1= [];
gdjs.Story2Code.GDBlinkingTextObjects2= [];
gdjs.Story2Code.GDStory1Objects1= [];
gdjs.Story2Code.GDStory1Objects2= [];


gdjs.Story2Code.asyncCallback20758340 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}
gdjs.Story2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Story2Code.asyncCallback20758340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Story2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20761180);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\typing.mp3", false, 50, gdjs.randomInRange(-(0.5), 1.5));
}}

}


};gdjs.Story2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20757636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Story2Code.GDTransitionObjects1);
{for(var i = 0, len = gdjs.Story2Code.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Story2Code.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\button.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Story2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlinkingText"), gdjs.Story2Code.GDBlinkingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Story2Code.GDTransitionObjects1);
{for(var i = 0, len = gdjs.Story2Code.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Story2Code.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Story2Code.GDBlinkingTextObjects1.length ;i < len;++i) {
    gdjs.Story2Code.GDBlinkingTextObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlinkingText"), gdjs.Story2Code.GDBlinkingTextObjects1);
{for(var i = 0, len = gdjs.Story2Code.GDBlinkingTextObjects1.length ;i < len;++i) {
    gdjs.Story2Code.GDBlinkingTextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Story1"), gdjs.Story2Code.GDStory1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Story2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Story2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Story2Code.GDTransitionObjects1.length = 0;
gdjs.Story2Code.GDTransitionObjects2.length = 0;
gdjs.Story2Code.GDOverlayObjects1.length = 0;
gdjs.Story2Code.GDOverlayObjects2.length = 0;
gdjs.Story2Code.GDBlinkingTextObjects1.length = 0;
gdjs.Story2Code.GDBlinkingTextObjects2.length = 0;
gdjs.Story2Code.GDStory1Objects1.length = 0;
gdjs.Story2Code.GDStory1Objects2.length = 0;

gdjs.Story2Code.eventsList2(runtimeScene);

return;

}

gdjs['Story2Code'] = gdjs.Story2Code;
