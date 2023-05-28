
if (typeof gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes !== "undefined") {
  gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes = {};
gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1= [];
gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects2= [];


gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1[0] : null), true, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1[0].getZ()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1[0].getZ()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, -((( gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1[0].getRotationY())) + 90, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1[0].getRotationX()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, (( gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1[0].getAngle()) + 90, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}}

}


};

gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.func = function(runtimeScene, Object, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects1.length = 0;
gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.GDObjectObjects2.length = 0;

gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.registeredGdjsCallbacks = [];