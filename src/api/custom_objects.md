# Custom Objects

TwilioQuest exposes a custom object API which we have [some built-in objects that implement](/extension-docs/api/objects). These objects cover a lot of common use cases like laser barriers and chests for objectives. We will continue to add new objects here as development of the game continues!

It can be useful to modify or create your own objects via this API too though. This page documents the various pieces of exposed functionality.

## Tile Object Properties

Tile Objects can be assigned properties that map to functionality implemented inside of TwilioQuest.

### type

- type: `String`

This property can specify unique behaviors for a TileObject. Some of these values will implement special objects like `player` or `transition-area`. The rest will match an Object implementation's key.

### hackable

- type: `Boolean`
- default: `false`

If this property is true, when a player interacts with this TileObject it will open the HackInterface. If this property is true, you should also set a corresponding `objectiveName` property so that the HackInterface knows which objective to load.

### objectiveName

- type: `String`

An objective key that this TileObject should subscribe to events from. This property can be paired with the `hackable` property to open a specified HackInterface.

### conversation

- type: `String`

A conversation key matching one of the loaded conversations. This conversation will be launched in this is TileObject is of type `npc`.

### key

- type: `String`

Conventionally used to identify this entity in object and event scripting. Has no other special properties.

### interactionDisabled

- type: `Boolean`

Prevent a player from interacting with this object. Can be dynamically enabled to prevent interactions.

### flavorText

- type: `String`

This maps to a key in the `flavorTextOverrides` property of the `level.json` file. When this object is interacted with the flavor text linked here will pop up as a toast message.

### skipProcessObjectGroupBodies

- type: `Boolean`
- default: `false`

If this flag is set to `true` then no object bodies attached to this TileObject will be processed as custom colliders.

### orientation

- type: `String`

If this field is set to `"vertical"` this sprite will be rotated 90 degrees upon spawning. This can situationally be useful. If custom bodies are used, they my not respect this rotation.

### hidden

- type: `Boolean`
- default: `false`

If this field is set to `true` then it will be visually hidden and it's physics body will be disabled.

## Property DSL

## Custom Collision Editor

### isCollisionMask Property

## Object Configuration Directory

### Object Configuration File

#### render

#### state

#### events

#### animations

#### spritesheets

#### properties

### Tileset Images

### icon.png
