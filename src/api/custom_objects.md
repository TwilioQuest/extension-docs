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

## Property Binding

Any property that an object could be assigned in Tiled can be bound to a value in TwilioQuest's context that will be calculated at run time. These context values can change as the game runs and give map authors' some declarative syntax to achieve dynamic behavior without reaching events.js.

To specify a property should be bound to a context value instead of being literally interpreted, the property's key should be prepended with an `@` character. For example, if you wanted to bind the hidden property of a TileObject to a state value you would give your object a custom property of `@hidden`.

The value of this binding property is a dot notation formatted string (as specified by Lodash's get function) specifying the piece of state that should be bound to the specified property. If we wanted to hide an object only while a specific object is not completed we would provide the give value `completedObjectives["mission_name.objective_name"]` to our `@hidden` custom property.

::: tip

Property binding may not be as useful now that Custom Objects can be authored. Check out the [Object Configuration instructions](#object-configuration-directory) below to see if they meet your needs.

:::

### DSL Features

There are specific customized features that allow you to get more out of context binding in the binding Domain Specific Language.

`!` - Negation - placing a `!` will negate the value of state when you assign it to a variable. This can be helpful when you want your Tiled prop to be the inverse of a state property.

### Context Shape

TwilioQuest's context is described by a schema object built using yup. Reference the schema to find bindable properties.

#### Some more popular/useful context properties:

`completedObjectives["mission_name.objective_name"]` - check to see if an objective is completed, this object will be falsy if not completed and truthy if completed
`levelState.mission_name` - this mirrors the state object that you read/write to using `world.setState` and `world.getState` inside `events.js`.

## Custom Collision Editor

TileObjects can have custom colliders created for them using Tiled's Collision Editor feature. The first of these objects that is encountered will be treated as a custom physics body for this TileObject.

### isCollisionMask Property

- type: `Boolean`
- default: `true`

If this property is set to `false` this object will not be parsed as a collision body.

### Key Property

- type: `String`

Conventionally used to identify this object shape. Has no other special properties.

## Object Configuration Directory

### Object Configuration File

#### animations

This is a key/value map object listing all animations this entity can perform.

- `key (String)` - key used to play this animation
- `value (Object)` - metadata describing the animation
  - `frames (Array<Number>)` - an array of indicies specifying the frames of the animation
  - `frameRate (Number)` - this is how fast the animation should play. If your animation has 4 frames and this number is set to 4, you will play the entire animation in 1 second.
  - `layer (String)` - which sprite frame layer does this animation apply to. This defaults to the main sprite layer if omitted.

#### spritesheets

Key/object map listing all unique spritesheets this entity needs to load.

- `fileName (String)` - relative path to the spritesheet this is loading
- `frameDimensions (Object)` - dimensions of each frame in the sprite sheet or of the entire image
  - `width (Number)` - width of each frame in pixels
  - `height (NUmber)` - height of each frame in pixels
- `type (String)` - Defaults to `"spritesheet"`. If set to `"image"` the specified asset will be loaded as a single image.

#### properties

Other general configuration properties for objects.

- `sprite (Object)` - configuration options for the visual aspect of the object
  - `defaultFrameIndex (Number)` - index the sprite will start at from the spriteSheet specified
  - `spriteSheet (String)` - a key for which spriteSheet this sprite will use
  - `layers (Array<String>)` - an option to specify other sprites to be displayed on top of the base sprites at various resolutions and offsets
  - `useGidAsDefaultFrameIndex (Boolean)` - use the gid of the spriteSheet where the TileObject was taken from as default frame
- `idleAnimations (Object)` - settings to control the idle animations of this object
  - `animations (Object)` - A map of all Idle animations this object can play
  - `shouldCycle (Boolean)` - If `true`, this IdleAnimations instance. Will choose a new idle animation to play on a random interval between the min and max idle times. If false, this IdleAnimations instance will randomly pick an initial animation and loop it eternally.
  - `minIdleTime (Number)` - The minimum amount of time that must elapse before an animation will play in milliseconds.
  - `maxIdleTime (Number)` - The maximum amount of time that can elapse before an animation will play in milliseconds.

#### state

#### events

#### render

### Tileset Images

### icon.png
