gdjs.OptionsCode = {};
gdjs.OptionsCode.GDTransitionObjects1= [];
gdjs.OptionsCode.GDTransitionObjects2= [];
gdjs.OptionsCode.GDOverlayObjects1= [];
gdjs.OptionsCode.GDOverlayObjects2= [];
gdjs.OptionsCode.GDBlinkingTextObjects1= [];
gdjs.OptionsCode.GDBlinkingTextObjects2= [];
gdjs.OptionsCode.GDStory0Objects1= [];
gdjs.OptionsCode.GDStory0Objects2= [];
gdjs.OptionsCode.GDStory1Objects1= [];
gdjs.OptionsCode.GDStory1Objects2= [];
gdjs.OptionsCode.GDStory2Objects1= [];
gdjs.OptionsCode.GDStory2Objects2= [];
gdjs.OptionsCode.GDStory22Objects1= [];
gdjs.OptionsCode.GDStory22Objects2= [];
gdjs.OptionsCode.GDStory3Objects1= [];
gdjs.OptionsCode.GDStory3Objects2= [];
gdjs.OptionsCode.GDMouseObjects1= [];
gdjs.OptionsCode.GDMouseObjects2= [];
gdjs.OptionsCode.GDDifficultyObjects1= [];
gdjs.OptionsCode.GDDifficultyObjects2= [];
gdjs.OptionsCode.GDButtonObjects1= [];
gdjs.OptionsCode.GDButtonObjects2= [];
gdjs.OptionsCode.GDButton2Objects1= [];
gdjs.OptionsCode.GDButton2Objects2= [];


gdjs.OptionsCode.asyncCallback20627212 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.OptionsCode.asyncCallback20627212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OptionsCode.asyncCallback20628636 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}
gdjs.OptionsCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.OptionsCode.asyncCallback20628636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OptionsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.OptionsCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDButtonObjects1[k] = gdjs.OptionsCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20626812);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.OptionsCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\button.mp3", false, 100, 1);
}
{ //Subevents
gdjs.OptionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.OptionsCode.GDButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDButton2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDButton2Objects1[k] = gdjs.OptionsCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20628236);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.OptionsCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\button.mp3", false, 100, 1);
}
{ //Subevents
gdjs.OptionsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.OptionsCode.GDDifficultyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.OptionsCode.GDMouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.OptionsCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.OptionsCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDMouseObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.OptionsCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDDifficultyObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Story0"), gdjs.OptionsCode.GDStory0Objects1);
{for(var i = 0, len = gdjs.OptionsCode.GDStory0Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDStory0Objects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.OptionsCode.GDMouseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDMouseObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDMouseObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDMouseObjects1[k] = gdjs.OptionsCode.GDMouseObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDMouseObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OptionsCode.GDMouseObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.OptionsCode.GDMouseObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDMouseObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.OptionsCode.GDDifficultyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDDifficultyObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDDifficultyObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDDifficultyObjects1[k] = gdjs.OptionsCode.GDDifficultyObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDDifficultyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OptionsCode.GDDifficultyObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.OptionsCode.GDDifficultyObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDDifficultyObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDTransitionObjects1.length = 0;
gdjs.OptionsCode.GDTransitionObjects2.length = 0;
gdjs.OptionsCode.GDOverlayObjects1.length = 0;
gdjs.OptionsCode.GDOverlayObjects2.length = 0;
gdjs.OptionsCode.GDBlinkingTextObjects1.length = 0;
gdjs.OptionsCode.GDBlinkingTextObjects2.length = 0;
gdjs.OptionsCode.GDStory0Objects1.length = 0;
gdjs.OptionsCode.GDStory0Objects2.length = 0;
gdjs.OptionsCode.GDStory1Objects1.length = 0;
gdjs.OptionsCode.GDStory1Objects2.length = 0;
gdjs.OptionsCode.GDStory2Objects1.length = 0;
gdjs.OptionsCode.GDStory2Objects2.length = 0;
gdjs.OptionsCode.GDStory22Objects1.length = 0;
gdjs.OptionsCode.GDStory22Objects2.length = 0;
gdjs.OptionsCode.GDStory3Objects1.length = 0;
gdjs.OptionsCode.GDStory3Objects2.length = 0;
gdjs.OptionsCode.GDMouseObjects1.length = 0;
gdjs.OptionsCode.GDMouseObjects2.length = 0;
gdjs.OptionsCode.GDDifficultyObjects1.length = 0;
gdjs.OptionsCode.GDDifficultyObjects2.length = 0;
gdjs.OptionsCode.GDButtonObjects1.length = 0;
gdjs.OptionsCode.GDButtonObjects2.length = 0;
gdjs.OptionsCode.GDButton2Objects1.length = 0;
gdjs.OptionsCode.GDButton2Objects2.length = 0;

gdjs.OptionsCode.eventsList2(runtimeScene);

return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
