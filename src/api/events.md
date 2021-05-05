# Event Scripting

Levels expose a series of APIs and events that let you script custom behavior. Scripting lives in the `events.js` file located at `levels/<level_name>/events.js` for your level.

The `events.js` file exports a single event handler function as it's default export. As events occur during the lifecycle of TwilioQuest, this function gets invoked with two properties. The first is an `event` object describing the event. The second is a `world` API object allowing you to modify the game world.

## Event

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

## World
