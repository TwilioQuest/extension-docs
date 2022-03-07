# Using the `lockable-doors` object

_Published: 3/7/2022 for TQ Version: 3.2.7_

The [`lockable-doors` from the `twilioquest-base`](https://github.com/TwilioQuest/twilioquest-base/tree/main/objects/lockable-doors) repository can be useful to conditionally allow players access to different parts of your level.

These doors use a state machine to manage themselves. They can be in `open`, `opening`, `closing`, and `closed` states.

This state machine is created [in the onMapDidLoad event](https://github.com/TwilioQuest/twilioquest-base/blob/main/objects/lockable-doors/config.js#L42) via the `initOpenCloseFSM()` function.

The Fog Owl Door object is another custom object that uses this same state machine. The Fog Owl Door also has other logic to allow the player to [change the door's states via trigger areas](https://github.com/TwilioQuest/twilioquest-base/blob/main/objects/fog-owl-door/config.js#L11-L39).

In the above code, the `self.state.fsm.action('open')` and `self.state.fsm.action('close')` calls cause the door to open and close. You should be able to use these same functions in any scripting environment in TwilioQuest where you have a reference to the door object.

Here's an example code snippter that assumes there's a trigger area in a map with key `myDoorOpenTrigger` and a `lockable-door` with key `myLockableDoor`.

```js
if (
  event.name === "triggerAreaWasEntered" &&
  event.target.key === "myDoorOpenTrigger"
) {
  world.forEachEntities("myLockableDoor", (door) =>
    door.state.fsm.action("open")
  );
}
```
