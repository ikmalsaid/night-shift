
gdjs.evtsExt__ShakeObject3D__ShakeCube3D = gdjs.evtsExt__ShakeObject3D__ShakeCube3D || {};

/**
 * Behavior generated from Shake 3D cube
 */
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D = class ShakeCube3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TranslationAmplitudeX = behaviorData.TranslationAmplitudeX !== undefined ? behaviorData.TranslationAmplitudeX : Number("4") || 0;
    this._behaviorData.TranslationAmplitudeY = behaviorData.TranslationAmplitudeY !== undefined ? behaviorData.TranslationAmplitudeY : Number("0") || 0;
    this._behaviorData.TranslationAmplitudeZ = behaviorData.TranslationAmplitudeZ !== undefined ? behaviorData.TranslationAmplitudeZ : Number("0") || 0;
    this._behaviorData.RotationAmplitudeX = behaviorData.RotationAmplitudeX !== undefined ? behaviorData.RotationAmplitudeX : Number("5") || 0;
    this._behaviorData.RotationAmplitudeY = behaviorData.RotationAmplitudeY !== undefined ? behaviorData.RotationAmplitudeY : Number("5") || 0;
    this._behaviorData.RotationAmplitudeZ = behaviorData.RotationAmplitudeZ !== undefined ? behaviorData.RotationAmplitudeZ : Number("5") || 0;
    this._behaviorData.Time = Number("") || 0;
    this._behaviorData.Duration = Number("") || 0;
    this._behaviorData.StartEasingDuration = Number("") || 0;
    this._behaviorData.StopEasingDuration = Number("") || 0;
    this._behaviorData.Frequency = behaviorData.Frequency !== undefined ? behaviorData.Frequency : Number("") || 0;
    this._behaviorData.DeltaX = Number("") || 0;
    this._behaviorData.DeltaY = Number("") || 0;
    this._behaviorData.DeltaZ = Number("") || 0;
    this._behaviorData.DeltaAngleX = Number("") || 0;
    this._behaviorData.DeltaAngleY = Number("") || 0;
    this._behaviorData.DeltaAngleZ = Number("") || 0;
    this._behaviorData.NoiseTime = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TranslationAmplitudeX !== newBehaviorData.TranslationAmplitudeX)
      this._behaviorData.TranslationAmplitudeX = newBehaviorData.TranslationAmplitudeX;
    if (oldBehaviorData.TranslationAmplitudeY !== newBehaviorData.TranslationAmplitudeY)
      this._behaviorData.TranslationAmplitudeY = newBehaviorData.TranslationAmplitudeY;
    if (oldBehaviorData.TranslationAmplitudeZ !== newBehaviorData.TranslationAmplitudeZ)
      this._behaviorData.TranslationAmplitudeZ = newBehaviorData.TranslationAmplitudeZ;
    if (oldBehaviorData.RotationAmplitudeX !== newBehaviorData.RotationAmplitudeX)
      this._behaviorData.RotationAmplitudeX = newBehaviorData.RotationAmplitudeX;
    if (oldBehaviorData.RotationAmplitudeY !== newBehaviorData.RotationAmplitudeY)
      this._behaviorData.RotationAmplitudeY = newBehaviorData.RotationAmplitudeY;
    if (oldBehaviorData.RotationAmplitudeZ !== newBehaviorData.RotationAmplitudeZ)
      this._behaviorData.RotationAmplitudeZ = newBehaviorData.RotationAmplitudeZ;
    if (oldBehaviorData.Time !== newBehaviorData.Time)
      this._behaviorData.Time = newBehaviorData.Time;
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;
    if (oldBehaviorData.StartEasingDuration !== newBehaviorData.StartEasingDuration)
      this._behaviorData.StartEasingDuration = newBehaviorData.StartEasingDuration;
    if (oldBehaviorData.StopEasingDuration !== newBehaviorData.StopEasingDuration)
      this._behaviorData.StopEasingDuration = newBehaviorData.StopEasingDuration;
    if (oldBehaviorData.Frequency !== newBehaviorData.Frequency)
      this._behaviorData.Frequency = newBehaviorData.Frequency;
    if (oldBehaviorData.DeltaX !== newBehaviorData.DeltaX)
      this._behaviorData.DeltaX = newBehaviorData.DeltaX;
    if (oldBehaviorData.DeltaY !== newBehaviorData.DeltaY)
      this._behaviorData.DeltaY = newBehaviorData.DeltaY;
    if (oldBehaviorData.DeltaZ !== newBehaviorData.DeltaZ)
      this._behaviorData.DeltaZ = newBehaviorData.DeltaZ;
    if (oldBehaviorData.DeltaAngleX !== newBehaviorData.DeltaAngleX)
      this._behaviorData.DeltaAngleX = newBehaviorData.DeltaAngleX;
    if (oldBehaviorData.DeltaAngleY !== newBehaviorData.DeltaAngleY)
      this._behaviorData.DeltaAngleY = newBehaviorData.DeltaAngleY;
    if (oldBehaviorData.DeltaAngleZ !== newBehaviorData.DeltaAngleZ)
      this._behaviorData.DeltaAngleZ = newBehaviorData.DeltaAngleZ;
    if (oldBehaviorData.NoiseTime !== newBehaviorData.NoiseTime)
      this._behaviorData.NoiseTime = newBehaviorData.NoiseTime;

    return true;
  }

  // Properties:
  
  _getTranslationAmplitudeX() {
    return this._behaviorData.TranslationAmplitudeX !== undefined ? this._behaviorData.TranslationAmplitudeX : Number("4") || 0;
  }
  _setTranslationAmplitudeX(newValue) {
    this._behaviorData.TranslationAmplitudeX = newValue;
  }
  _getTranslationAmplitudeY() {
    return this._behaviorData.TranslationAmplitudeY !== undefined ? this._behaviorData.TranslationAmplitudeY : Number("0") || 0;
  }
  _setTranslationAmplitudeY(newValue) {
    this._behaviorData.TranslationAmplitudeY = newValue;
  }
  _getTranslationAmplitudeZ() {
    return this._behaviorData.TranslationAmplitudeZ !== undefined ? this._behaviorData.TranslationAmplitudeZ : Number("0") || 0;
  }
  _setTranslationAmplitudeZ(newValue) {
    this._behaviorData.TranslationAmplitudeZ = newValue;
  }
  _getRotationAmplitudeX() {
    return this._behaviorData.RotationAmplitudeX !== undefined ? this._behaviorData.RotationAmplitudeX : Number("5") || 0;
  }
  _setRotationAmplitudeX(newValue) {
    this._behaviorData.RotationAmplitudeX = newValue;
  }
  _getRotationAmplitudeY() {
    return this._behaviorData.RotationAmplitudeY !== undefined ? this._behaviorData.RotationAmplitudeY : Number("5") || 0;
  }
  _setRotationAmplitudeY(newValue) {
    this._behaviorData.RotationAmplitudeY = newValue;
  }
  _getRotationAmplitudeZ() {
    return this._behaviorData.RotationAmplitudeZ !== undefined ? this._behaviorData.RotationAmplitudeZ : Number("5") || 0;
  }
  _setRotationAmplitudeZ(newValue) {
    this._behaviorData.RotationAmplitudeZ = newValue;
  }
  _getTime() {
    return this._behaviorData.Time !== undefined ? this._behaviorData.Time : Number("") || 0;
  }
  _setTime(newValue) {
    this._behaviorData.Time = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getStartEasingDuration() {
    return this._behaviorData.StartEasingDuration !== undefined ? this._behaviorData.StartEasingDuration : Number("") || 0;
  }
  _setStartEasingDuration(newValue) {
    this._behaviorData.StartEasingDuration = newValue;
  }
  _getStopEasingDuration() {
    return this._behaviorData.StopEasingDuration !== undefined ? this._behaviorData.StopEasingDuration : Number("") || 0;
  }
  _setStopEasingDuration(newValue) {
    this._behaviorData.StopEasingDuration = newValue;
  }
  _getFrequency() {
    return this._behaviorData.Frequency !== undefined ? this._behaviorData.Frequency : Number("") || 0;
  }
  _setFrequency(newValue) {
    this._behaviorData.Frequency = newValue;
  }
  _getDeltaX() {
    return this._behaviorData.DeltaX !== undefined ? this._behaviorData.DeltaX : Number("") || 0;
  }
  _setDeltaX(newValue) {
    this._behaviorData.DeltaX = newValue;
  }
  _getDeltaY() {
    return this._behaviorData.DeltaY !== undefined ? this._behaviorData.DeltaY : Number("") || 0;
  }
  _setDeltaY(newValue) {
    this._behaviorData.DeltaY = newValue;
  }
  _getDeltaZ() {
    return this._behaviorData.DeltaZ !== undefined ? this._behaviorData.DeltaZ : Number("") || 0;
  }
  _setDeltaZ(newValue) {
    this._behaviorData.DeltaZ = newValue;
  }
  _getDeltaAngleX() {
    return this._behaviorData.DeltaAngleX !== undefined ? this._behaviorData.DeltaAngleX : Number("") || 0;
  }
  _setDeltaAngleX(newValue) {
    this._behaviorData.DeltaAngleX = newValue;
  }
  _getDeltaAngleY() {
    return this._behaviorData.DeltaAngleY !== undefined ? this._behaviorData.DeltaAngleY : Number("") || 0;
  }
  _setDeltaAngleY(newValue) {
    this._behaviorData.DeltaAngleY = newValue;
  }
  _getDeltaAngleZ() {
    return this._behaviorData.DeltaAngleZ !== undefined ? this._behaviorData.DeltaAngleZ : Number("") || 0;
  }
  _setDeltaAngleZ(newValue) {
    this._behaviorData.DeltaAngleZ = newValue;
  }
  _getNoiseTime() {
    return this._behaviorData.NoiseTime !== undefined ? this._behaviorData.NoiseTime : Number("") || 0;
  }
  _setNoiseTime(newValue) {
    this._behaviorData.NoiseTime = newValue;
  }
}

/**
 * Shared data generated from Shake 3D cube
 */
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.SharedData = class ShakeCube3DSharedData {
  constructor(sharedData) {
    
    this.EasingFactor = Number("") || 0;
  }
  
  // Shared properties:
  
  _getEasingFactor() {
    return this.EasingFactor !== undefined ? this.EasingFactor : Number("") || 0;
  }
  _setEasingFactor(newValue) {
    this.EasingFactor = newValue;
  }
}

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ShakeObject3D_ShakeCube3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ShakeObject3D_ShakeCube3DSharedData = new gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.SharedData(
      initialData
    );
  }
  return instanceContainer._ShakeObject3D_ShakeCube3DSharedData;
}

// Methods:
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() < (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartEasingDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() < (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) - (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStopEasingDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setEasingFactor(gdjs.evtTools.common.clamp(0, 1, (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime()) / (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartEasingDuration())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() > (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) - (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStopEasingDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setEasingFactor(gdjs.evtTools.common.clamp(0, 1, ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) - (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime())) / (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStopEasingDuration())));
}
}}

}


{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaX(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime()), 1000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeX()) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].setX(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX() + ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaX())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaY(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime()), 2000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeY()) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY() + ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaY())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeZ() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaZ(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime()), 3000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeZ()) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].setZ(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getZ() + ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaY())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaAngleX(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime()), 4000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeX()) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].setRotationX(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getRotationX() + ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleX())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaAngleY(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime()), 5000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeY()) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].setRotationY(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getRotationY() + ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleY())));
}
}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeZ() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaAngleZ(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime()), 6000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeZ()) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getAngle() + ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleZ())));
}
}}

}


};gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNoiseTime(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Frequency((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setEasingFactor(1);
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].setX(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() - ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaX())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() - ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaY())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeZ() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].setZ(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getZ() - ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaZ())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].setRotationX(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getRotationX() - ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleX())));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].setRotationY(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getRotationY() - ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleY())));
}
}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeZ() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle() - ((gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleZ())));
}
}}

}


};gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNoiseTime(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Frequency((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartEasingDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StartEaseDuration")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStopEasingDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StopEaseDuration")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0) < (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StartEaseDuration")) || 0 : 0) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StopEaseDuration")) || 0 : 0));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartEasingDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StartEaseDuration")) || 0 : 0) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration")) / ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StartEaseDuration")) || 0 : 0) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StopEaseDuration")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStopEasingDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StopEaseDuration")) || 0 : 0) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration")) / ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StartEaseDuration")) || 0 : 0) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StopEaseDuration")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.Shake = function(Duration, StartEaseDuration, StopEaseDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Duration") return Duration;
if (argName === "StartEaseDuration") return StartEaseDuration;
if (argName === "StopEaseDuration") return StopEaseDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.ShakeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNoiseTime(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Frequency((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration(1234567890);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartEasingDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("EaseDuration")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShaking = function(EaseDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "EaseDuration") return EaseDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StartShakingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("EaseDuration")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStopEasingDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("EaseDuration")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShaking = function(EaseDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "EaseDuration") return EaseDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.StopShakingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() < (gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShaking = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.IsShakingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFrequency()); }}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.Frequency = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.FrequencyContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFrequency((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequency = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D.prototype.SetFrequencyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("ShakeObject3D::ShakeCube3D", gdjs.evtsExt__ShakeObject3D__ShakeCube3D.ShakeCube3D);
