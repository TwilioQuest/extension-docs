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

Start a specified conversation file with a provided NPC name.

#### Parameters

- `conversation (String)`: A key representing a specific conversation file to be loaded.
- `name (String)`: The name that shows up for the NPC speaking to the player.
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

### [DEPRECATED] levelsDirectoryPath,

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
