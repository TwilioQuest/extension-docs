# Event Scripting

Levels expose a series of APIs and events that let you script custom behavior. Scripting lives in the `events.js` file located at `levels/<level_name>/events.js` for your level.

The `events.js` file exports a single event handler function as it's default export. As events occur during the lifecycle of TwilioQuest, this function gets invoked with two properties. The first is an `event` object describing the event. The second is a `world` API object allowing you to modify the game world.

### Example

`events.js`

```js
module.exports = (event, world) => {};
```

## Event Object

There are a variety of different events that you can respond to. The only required property on each event is `name`. You should use it to key off of and know which other properties to expect.

### timerDidTrigger

This event is triggered by a world API and can contain any arbitrary payload properties you attach to it. These properties are all attached to the root of the event.

#### Properties

- `name (String)`: `"timerDidTrigger"`

### conversationDidEnd

This event fires after a player closes a conversation with an NPC.

#### Properties

- `name (String)`: `"conversationDidEnd"`
- `npc (Object)`: This is the in game TwilioQuest entity for the Non Player Character that the player is conversing with.

### mapDidLoad

This event fires after a map loads.

#### Properties

- `name (String)`: `"mapDidLoad"`
- `mapName (String)`: The key representing the map that loaded.

### levelWillUnload

This event triggers right before the level finishes unloading. Synchronous behavior will occur before the level finishes unloading. Asynchronous behavior will not block level unloading. This should primarily be used for cleaning up any data or state.

#### Properties

- `name (String)`: `"levelWillUnload"`

### levelDidLoad

This event triggers right after a level loads. This triggers once even if the player transfers between different maps within a level.

#### Properties

- `name (String)`: `"levelDidLoad"`

### playerDidInteract

Triggers after a player interacts with anything in the game world.

#### Properties

- `name (String)`: `"playerDidInteract"`
- `target (Object)`: This is the in game TwilioQuest entity that the player interacted with.

### triggerAreaWasEntered

Triggers after a player enters a region defined as a trigger area.

#### Properties

- `name (String)`: `"triggerAreaWasEntered"`
- `target (Object)`: A reference to the trigger area object that was entered. This is useful to determine which trigger area was entered.

### triggerAreaWasExited

Triggers after a player exits a region defined as a trigger area.

#### Properties

- `name (String)`: `"triggerAreaWasExited"`
- `target (Object)`: A reference to the trigger area object that was exited. This is useful to determine which trigger area was exited.

### objectiveDidOpen

Triggers after a player hacks an objective hack interface.

#### Properties

- `name (String)`: `"objectiveDidOpen"`
- `target (Object)`: A reference to the object that triggered the hack. The `objectiveName` property on this object is useful to determine which objective was hacked.

### objectiveDidClose

Triggers after a player closes the objective hack interface.

#### Properties

- `name (String)`: `"objectiveDidClose"`
- `target (Object)`: A reference to the object that was last hacked. The `objectiveName` property on this object is useful to determine which objective was hacked.

### objectiveFailed

Triggers after a player attempts to hack an objective and then the validator fails their attempt.

#### Properties

- `name (String)`: `"objectiveFailed"`
- `objective (String)`: The name of the objective that was failed.

### objectiveCompleted

Triggers after a player attempts to hack an objective and then the validator passes their attempt. This event is only triggered the first time a player completes a given objective. Subsequent hacks fire `objectiveCompletedAgain`.

#### Properties

- `name (String)`: `"objectiveCompleted"`
- `objective (String)`: The name of the objective that was passed.

### objectiveCompletedAgain

Triggers after a player attempts to hack an objective they've already completed and then the validator passes their attempt.

#### Properties

- `name (String)`: `"objectiveCompletedAgain"`
- `objective (String)`: The name of the objective that was passed.

## World API

### getState

- type: `function`

Get a level state object for the corresponding key. This state is intended to be used by level authors to persist arbitrary information about their level.

#### Parameters

- `key (String)`: A unique key to represent this level. Be aware that any invocation of setState from _any_ level, not just yours.

#### Return

- `Object`: any arbitary object of data a level author wishes to store

### setState

- type: `function`

Set a level state object for the corresponding key. This state is intended to be used by level authors to persist arbitrary information about their level.

#### Parameters

- `key (String)`: A unique key to represent this level. Be aware that any invocation of setState from _any_ level, not just yours.
- `value (Object)`: Arbitrary level data to persist.

### startConversation

- type: `function`

Start a specified conversation file with a given conversation portrait.

#### Parameters

- `conversation (String)`: A key representing a specific conversation file to be loaded.
- `conversationAvatar (String)`: The conversation avatar file name - should be a file in the `images/conversations` folder of your extension. Some built-in avatar image names you can use (other than images in your own extension) are `cedricNeutral.png`, `cedricHappy.png`, `coreyNeutral.png`, etc.
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

### showEntities

- type: `function`

Visually show all entities that match the provided key or filter function.

#### Parameters

- `keyOrFilter (String | Function)`: If this property is a string it will match all entities that have a `key` prop of the same value. If this is a function it will work as a filter function with the signature: `({ instance, collections, group, guid }) => Boolean`.
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

### hideEntities

- type: `function`

Visually hide all entities that match the provided key or filter function.

#### Parameters

- `keyOrFilter (String | Function)`: If this property is a string it will match all entities that have a `key` prop of the same value. If this is a function it will work as a filter function with the signature: `({ instance, collections, group, guid }) => Boolean`.
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

### destroyEntities

- type: `function`

Destroy (remove and clean up) all entities that match the provided key or filter function.

#### Parameters

- `keyOrFilter (String | Function)`: If this property is a string it will match all entities that have a `key` prop of the same value. If this is a function it will work as a filter function with the signature: `({ instance, collections, group, guid }) => Boolean`.
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

### forEachEntities

- type: `function`

Iterate over all entities that match the provided key or filter function.

#### Parameters

- `keyOrFilter (String | Function)`: If this property is a string it will match all entities that have a `key` prop of the same value. If this is a function it will work as a filter function with the signature: `({ instance, collections, group, guid }) => Boolean`.
- `forEach (Function)`: This function will be executed once for each entity that matches the `keyOrFilter`. This function has the signature: `(instance) => {}`
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

### showNotification

- type: `function`

Display a toast message on the lower half of the screen. This is the same style of message as interaction text effects.

#### Parameters

- `toastMessage (String)`: This is the text string that will be displayed in the message. HTML is valid here.
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

### scheduleTimerEvent

- type: `function`

Set an event payload that will re-trigger your event handler at a specified time.

#### Parameters

- `payload (Object)`: This object will have it's properties spread over the event object that is passed into the event handler.
- `timeout (Number)`: Delay in milliseconds before the conversation starts playing.

### removeObjective

- type: `function`

Clear a player's progress of the specified objective. This is useful if you need to perform data migrations between different versions of your level.

#### Parameters

- `missionName (String)`: The key of the mission this objective is owned by.
- `objectiveName (String)`: The key of the objective being cleared.

### entityService

- type: `EntityService`

This is an underlying TwilioQuest service that exposes a lot of functionality about how we store and manage entities. The above entity manipulation methods should be preferred. This API may not be as stable.

### getContext

- type: `function`

This allows access to the entirety of TwilioQuest's internal data storage. This contains a lot of powerful information. However, this is an internal API and the particular data contract you get is not guaranteed to stay stable.

#### Parameters

- `property (String)`: name of the context value being queried

### setContext

- type: `function`

This allows access to the entirety of TwilioQuest's internal data storage. This contains a lot of powerful information. However, this is an internal API and the particular data contract you get is not guaranteed to stay stable.

#### Parameters

- `property (String)`: name of the context value being set
- `payload (Object)`: any arbitrary state data to persist

### emitter

- type: `EventEmitter`

This is an underlying TwilioQuest object that exposes a lot of functionality about how we store and manage data. This API may not be stable.

### levelLoader

- type: `LevelLoader`

This is an underlying TwilioQuest object that exposes a lot of functionality about how we store and manage levels. This API may not be stable.

### levelsDirectoryPath <Badge text="deprecated" type="warning"/>

- type: `string`

This is a string that provides a file path to the old bundled content in TwilioQuest. This has been replaced by the new extensions APIs and will be removed in future updates.

### screenShake

- type: `function`

This function triggers a screen shake visual effect.

#### Parameters

- `amount (Number)`: Value for strength and duration of the screen shake effect. Low integers are generally recommended.
- `timeout (Number)`: Delay in milliseconds before the conversation starts playing.

### enableTransitionAreas

- type: `function`

Enable (allow them to trigger events) all TransitionAreas that match the provided key or filter function.

#### Parameters

- `keyOrFilter (String | Function)`: If this property is a string it will match all entities that have a `key` prop of the same value. If this is a function it will work as a filter function with the signature: `({ instance, collections, group, guid }) => Boolean`.
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

### disableTransitionAreas

- type: `function`

Disable (prevent them from triggering events) all TransitionAreas that match the provided key or filter function.

#### Parameters

- `keyOrFilter (String | Function)`: If this property is a string it will match all entities that have a `key` prop of the same value. If this is a function it will work as a filter function with the signature: `({ instance, collections, group, guid }) => Boolean`.
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

### isObjectiveCompleted

- type: `function`

Check if a specified objective has been completed by the player.

#### Parameters

- `objective (String)`: The name of the objective being queried.
- `mission (String)`: The name of the mission that owns this objective. This parameter is optional, if not provided it will default to the current mission.

#### Return

- `Boolean`: returns true if the objective is completed

### getCurrentMapName

- type: `function`

Get the name of the currently loaded map.

#### Return

- `String`: the currently loaded map name

### getCurrentLevelName

- type: `function`

Get the name of the currently loaded level. This can be useful for reusable logic you want to share across levels.

#### Return

- `String`: the currently loaded level name

### showOverlayComponent

- type: `function`

Displays the specified component type over the rest of the game much like the Nav Map or the Hack Interface.

[Example usage of the iframe component.](/examples/slideshow-extension)

#### Parameters

- `overlayComponent (String|object)`: This is a key that represents which component will be opened. An object can be passed instead which allows more control of the component.
- `timeout (Number)`: Optional delay in milliseconds before the conversation starts playing. This value defaults to 0.

#### Overlay Components

- `navMap` - Shows the planet selection screen.
  - **props:**
    - none
- `fogOwlFlying` - Shows the Fog Owl flying on a loading screen with stars in the background.
  - **props:**
    - `fadeIn` - should this component fade in or start at full transparency. defaults to `false`.
- `iframe` - Shows a component with an HTML iframe element. This can be used to display a URL inside of TwilioQuest.
  - **props:**
    - `url` - string that is the URL the iframe will be opened to
    - `backgroundColor` - HTML color string for the background of the iframe
    - `fontColor` - HTML color string for the color of the iframe
    - `borderless` - Should this iframe element have a border

### disablePlayerMovement

- type: `function`

After this function is invoked, the player can no longer move. This will stay true until [enablePlayerMovement](#enablePlayerMovement) is invoked.

### enablePlayerMovement

- type: `function`

After this function is invoked, the player can move. This is mainly useful after [disablePlayerMovement](#disablePlayerMovement) has been invoked.

### useTool

- type: `function`

Plays the "useTool" animation in the direction that the player is currently facing. Also triggers a `playerUsedTool` event with a `toolId` property in it's payload equal to the provided toolId. This animation will play until [stopUsingTool](#stopUsingTool) is invoked.

#### Parameters

- `toolId (String)`: A string that will used as part of the `playerUsedTool` payload.

### stopUsingTool

- type: `function`

Stops the current `useTool` animation running on the player. Also triggers the `playerStoppedUsingTool` event with the last used `toolId` attached to the payload.

### useTool

- type: `function`

Plays the "useTool" animation in the direction that the player is currently facing. Also triggers a `playerUsedTool` event with a `toolId` property in it's payload equal to the provided toolId. This animation will play until [stopUsingTool](#stopUsingTool) is invoked.

#### Parameters

- `toolId (String)`: A string that will used as part of the `playerUsedTool` payload.

### tweenCameraToPosition

- type: `function`

[Tweens](https://phaser.io/docs/2.6.2/Phaser.Tween.html) (moves) the camera to the location specified by the given position.

#### Parameters

- `position (Object)`: An object with an `x` and `y` property.
- `tweenConfig (Object)`: An object of [Phaser tween](https://phaser.io/docs/2.6.2/Phaser.Tween.html) configurations that control how this Tween functions. Some sensible defaults are provided if this parameter is omitted.

#### Return

- `Promise`: This promise resolves once the tween completes

### tweenCameraToPlayer

- type: `function`

[Tweens](https://phaser.io/docs/2.6.2/Phaser.Tween.html) (moves) the camera to the current location of the Player.

#### Parameters

- `tweenConfig (Object)`: An object of [Phaser tween](https://phaser.io/docs/2.6.2/Phaser.Tween.html) configurations that control how this Tween functions. Some sensible defaults are provided if this parameter is omitted.

#### Return

- `Promise`: This promise resolves once the tween completes

### wait

- type: `function`

This is a convenience function that creates a promise which resolves after the specified amount of time.

#### Parameters

- `timeout (Number)`: length of time in milliseconds

#### Return

- `Promise`: This promise resolves once the time has elapsed

### updateQuestStatus

- type: `function`

Update the current quest status of the provided level.

#### Parameters

- `levelName (String)`: key of the level's status
- `title (String)`: title of the quest status message
- `description (String)`: body of the quest status message
- `complete (Boolean)`: should this quest be marked as completed
- `ignoreLevelInfo (Boolean)`: should the default values in the level.json be used

#### Return

- `Promise`: This promise resolves once the time has elapsed

### playBackgroundMusic

- type: `function`

Play the background music track of the provided name

#### Parameters

- `trackName (String)`: basename of the track to play

### warp

- type: `function`

Teleport the player to the specified location

#### Parameters

- `levelName (String)`: key of the level to teleport the player to
- `playerEntryPoint (String)`: name of the player entry point the player should be warped to
- `levelMapName (String)`: basename of the map that the player should be warped to

### grantItems

- type: `function`

Add a list of items to the player's inventory.

#### Parameters

- `grantedItems (Array)`: array of item keys (strings) to grant to the player

### removeItems

- type: `function`

Remove a list of items from the player's inventory.

#### Parameters

- `removedItems (Array)`: array of item keys (strings) to ensure are not in the player's inventory

## Examples

```js
const MISSION_COMPUTER_ARROW = "floating_arrow_mission_computer";
const CEDRIC_ARROW = "floating_arrow_cedric";
const FOG_OWL_STATE_KEY = "twilioquest.fog_owl";
const DEFAULT_STATE = {
  hadFirstConversation: false,
  hasSeenMissionComputer: false,
};

module.exports = function(event, world) {
  // Get our level's global state, use our default state if it's not found
  const fogOwlState = world.getState(FOG_OWL_STATE_KEY) || DEFAULT_STATE;

  // First run onboarding sequence
  if (event.name === "levelDidLoad" && fogOwlState.hadFirstConversation) {
    world.startConversation("cedric_initial", "cedric", 500);
  }

  // Reveal the arrow above Cedric's head
  if (
    event.name === "conversationDidEnd" &&
    event.npc.conversation === "cedric_initial"
  ) {
    world.showEntities(CEDRIC_ARROW, 0);
  }

  // Track that we talked to cedric
  if (
    event.name === "conversationDidEnd" &&
    event.npc.conversation === "cedric"
  ) {
    fogOwlState.hadFirstConversation = true;
    world.hideEntities(CEDRIC_ARROW);
  }

  // Manage visibility of mission computer arrow
  if (
    event.name === "playerDidInteract" &&
    event.target.name === "mission_computer"
  ) {
    fogOwlState.hasSeenMissionComputer = true;
    world.hideEntities(MISSION_COMPUTER_ARROW);
  } else if (
    !fogOwlState.hasSeenMissionComputer &&
    fogOwlState.hadFirstConversation
  ) {
    world.showEntities(MISSION_COMPUTER_ARROW, 0);
  }

  // Persist our level's state after this invocation of our event handler
  world.setState(fogOwlState);
};
```
