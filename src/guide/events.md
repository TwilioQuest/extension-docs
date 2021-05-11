# Event Scripting

::: warning WIP ⚠️

This guide is still a work in progress!

:::

## Maybe objects are better for you?

They're easier for encapsulated custom behavior that relates to a single object or the relationships between a couple objects.

Events scripting is broader and can get trickier to manage because it's not encapsulated in any way. This is probably best for global scale level things rather than managing individual objects.

## What is events.js?

It's a big event handler!

## Good practice for setting state

1. default state
2. get current state or use default state on levelDidLoad
3. modify state based on event or other state values
4. affect changes on the world based on state
5. set current state to world for persistence
