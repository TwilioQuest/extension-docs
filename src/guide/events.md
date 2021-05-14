# Event Scripting

::: warning WIP ⚠️

This guide is still a work in progress!

:::

Event scripting lets map authors add custom dynamic touches to their levels. The event scripting API exposes ways for authors to change the world in response to events that happen while the game is running. The API is powerful and open ended, it lets authors execute any arbitrary JavaScript code they want to accomplish what they need.

## Maybe objects are better for you?

TwilioQuest also supports a robust [Object scripting API](/guide/custom_objects.html). A lot of the scripting needs map authors run into relate to manipulating objects in the world. It's easier to encapsulate custom behavior that relates to a single object or the relationships between a couple objects with the Object Scripting API.

Events scripting is broader and can get trickier to manage because it's not encapsulated in any way. This is probably best for global scale level things rather than managing individual objects.

## What is events.js?

Events scripting starts with the `events.js` file at the root level of a level as documented in the [events scripting API](/api/events.html). This file is a JavaScript module that exports an event handler. As events happen in TwilioQuest's lifecycle, we'll invoke your event handler. Then your event handler can respond to the events and change the world with the [world object API](/api/events.html#world-api).

Here's an empty example of an `events.js` handler.

```js
module.exports = (event, world) => {};
```

Here's an event handler that pops up a notification with the map's name when a map loads.

```js
module.exports = (event, world) => {
  if (event.name === "mapDidLoad") {
    world.showNotification(`The map "${event.mapName}" just loaded!`);
  }
};
```

Check out a list of [all the events](/api/events.html#event-object) you can respond to and [the world api functions](/api/events.html#world-api) you can use in response.

## Good practices for structuring event.js files

We've written a lot of events.js files in the past! Here are some of the tips we've found that make these files easier to work with.

### State management

One of the things that's easy to forget with event.js files is that you have no guarantee which events have run already in a previous session. Commonly, you'll want to make some change to your level in response to a player event. Maybe you want to hide a wall in response to a `playerDidInteract` on a special lever object. The first solution to that problem likely looks something like this:

```js
module.exports = (event, world) => {
  if (
    event.name === "playerDidInteract" &&
    event.target.key === "special_lever"
  ) {
    world.hideEntities("wall");
  }
};
```

This will work great on your first test case! However, if you leave this map and then return you'll see the wall has reappeared! This is because the `playerDidInteract` event was only triggered initially. Once the map reloads everything is reset to it's initial state. To prevent this we'll need to make use of the world APIs `setState` and `getState`.

```js
// Create a default state object to persist our information
const INITIAL_STATE = {
  isWallHidden: false,
};

// Create a unique key for our state to be stored under
const WORLD_STATE_KEY = "com.twilioquest.demo";

module.exports = (event, world) => {
  // Load our world state
  const worldState = world.getState(WORLD_STATE_KEY) || INITIAL_STATE;

  // Change world state in response to events
  if (
    event.name === "playerDidInteract" &&
    event.target.key === "special_lever"
  ) {
    worldState.isWallHidden = true;
  }

  // "Render" our world state after all events process
  if (worldState.isWallHidden) {
    world.hideEntities("wall");
  }

  // Persist world state across event handler invocations
  world.setState(WORLD_STATE_KEY);
};
```

To summarize the above code in a few points for a reference:

1. Create an initial state
2. Get saved world state or fallback to initial state
3. Modify current world state in response to events
4. Affect changes on the world (or render) based on state
5. Persist current world state
