gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];
gdjs.MainMenuCode.GDLogoHNObjects1= [];
gdjs.MainMenuCode.GDLogoHNObjects2= [];
gdjs.MainMenuCode.GDText_9595MainScreenObjects1= [];
gdjs.MainMenuCode.GDText_9595MainScreenObjects2= [];
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects1= [];
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects2= [];
gdjs.MainMenuCode.GDButton_9595RulesObjects1= [];
gdjs.MainMenuCode.GDButton_9595RulesObjects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDNewSprite3Objects1= [];
gdjs.MainMenuCode.GDNewSprite3Objects2= [];
gdjs.MainMenuCode.GDNewSprite4Objects1= [];
gdjs.MainMenuCode.GDNewSprite4Objects2= [];
gdjs.MainMenuCode.GDScoreTextUIObjects1= [];
gdjs.MainMenuCode.GDScoreTextUIObjects2= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ChooseCharacter", false);
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDButton_95959595RulesObjects1Objects = Hashtable.newFrom({"Button_Rules": gdjs.MainMenuCode.GDButton_9595RulesObjects1});
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rools", false);
}
}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("storage", "highScore");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTextUI"), gdjs.MainMenuCode.GDScoreTextUIObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "highScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(18));
}
{for(var i = 0, len = gdjs.MainMenuCode.GDScoreTextUIObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScoreTextUIObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(18).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Rules"), gdjs.MainMenuCode.GDButton_9595RulesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDButton_95959595RulesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDLogoHNObjects1.length = 0;
gdjs.MainMenuCode.GDLogoHNObjects2.length = 0;
gdjs.MainMenuCode.GDText_9595MainScreenObjects1.length = 0;
gdjs.MainMenuCode.GDText_9595MainScreenObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595RulesObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595RulesObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MainMenuCode.GDScoreTextUIObjects1.length = 0;
gdjs.MainMenuCode.GDScoreTextUIObjects2.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDLogoHNObjects1.length = 0;
gdjs.MainMenuCode.GDLogoHNObjects2.length = 0;
gdjs.MainMenuCode.GDText_9595MainScreenObjects1.length = 0;
gdjs.MainMenuCode.GDText_9595MainScreenObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595RulesObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595RulesObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MainMenuCode.GDScoreTextUIObjects1.length = 0;
gdjs.MainMenuCode.GDScoreTextUIObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
