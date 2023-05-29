gdjs.Story1Code = {};
gdjs.Story1Code.GDTransitionObjects1= [];
gdjs.Story1Code.GDTransitionObjects2= [];
gdjs.Story1Code.GDOverlayObjects1= [];
gdjs.Story1Code.GDOverlayObjects2= [];
gdjs.Story1Code.GDBlinkingTextObjects1= [];
gdjs.Story1Code.GDBlinkingTextObjects2= [];
gdjs.Story1Code.GDStory1Objects1= [];
gdjs.Story1Code.GDStory1Objects2= [];


gdjs.Story1Code.asyncCallback20767876 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Story2", false);
}}
gdjs.Story1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Story1Code.asyncCallback20767876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Story1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20770684);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\typing.mp3", false, 50, gdjs.randomInRange(-(0.9), 1.1));
}}

}


};gdjs.Story1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20767172);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Story1Code.GDTransitionObjects1);
{for(var i = 0, len = gdjs.Story1Code.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Story1Code.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\button.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Story1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlinkingText"), gdjs.Story1Code.GDBlinkingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Story1Code.GDTransitionObjects1);
{for(var i = 0, len = gdjs.Story1Code.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Story1Code.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Story1Code.GDBlinkingTextObjects1.length ;i < len;++i) {
    gdjs.Story1Code.GDBlinkingTextObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlinkingText"), gdjs.Story1Code.GDBlinkingTextObjects1);
{for(var i = 0, len = gdjs.Story1Code.GDBlinkingTextObjects1.length ;i < len;++i) {
    gdjs.Story1Code.GDBlinkingTextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Story1"), gdjs.Story1Code.GDStory1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Story1Code.GDStory1Objects1.length;i<l;++i) {
    if ( gdjs.Story1Code.GDStory1Objects1[i].getBehavior("Text_AutoTyping").IsCharacterJustAdded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Story1Code.GDStory1Objects1[k] = gdjs.Story1Code.GDStory1Objects1[i];
        ++k;
    }
}
gdjs.Story1Code.GDStory1Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Story1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Story1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Story1Code.GDTransitionObjects1.length = 0;
gdjs.Story1Code.GDTransitionObjects2.length = 0;
gdjs.Story1Code.GDOverlayObjects1.length = 0;
gdjs.Story1Code.GDOverlayObjects2.length = 0;
gdjs.Story1Code.GDBlinkingTextObjects1.length = 0;
gdjs.Story1Code.GDBlinkingTextObjects2.length = 0;
gdjs.Story1Code.GDStory1Objects1.length = 0;
gdjs.Story1Code.GDStory1Objects2.length = 0;

gdjs.Story1Code.eventsList2(runtimeScene);

return;

}

gdjs['Story1Code'] = gdjs.Story1Code;
