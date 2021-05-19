# Creating Custom Objects

Sometimes you want to do more than just paint a scene with tiles. You want to open a chest or talk to an NPC. Objects are how you create dynamism in the TwilioQuest world.

::: warning WIP ⚠️

This guide is still a work in progress!

:::

## What is an Object?

Objects in TwilioQuest are _things_ that create dyanmic behavior. This could be something like an NPC or a door that opens when you approach it.

An object is composed of a few different configuration files.

- A configuration file called `config.js`
- Any image files needed to render the object
- An icon image for use in Tiled tilesets

## Built-in Objects

TwilioQuest comes with built in objects that handle some of the common use cases you might have for dynamic objects. Check out the [built in objects API page](/api/objects.html) for a list of these before re-building something that already exists!

## Animations & Rendering

The first thing to consider about a new object is how it appears. What does it look like rendered in the game? Does it have animations?

### Image Assets

You can use spritesheets, and will commonly want to use them if your object has animations. You can get away with a single image if your object is only ever rendered as one frame.

![example of a spritesheet here]()

### What's a spritesheet?

A spritesheet is a series of frames with an image on them. Usually, this series depicts one of more animations that it's subject is performing.

To describe a spritesheet you'd want the following information:

- width of each frame
- height of each frame
- margin around edge of spritesheet
- padding between frames
- number of frames per row
- number of frames per column (optional?)

![image of a spritesheet's components labeled]()

We use this information to describe our spritesheet in the `config.js` file so that TwilioQuest can import it correctly.

### Icon for Tiled

If your object is a single image, you can re-use that. Otherwise, you'll want to export a single frame of your spritesheet separately as an `icon.png` file that you can add into a Tiled tilesheet.

## Scripting Custom Behavior

- objects have state
- objects modify their state in response to events that happen in the game
- objects render themselves and make changes on how they're displayed via render

## Object Configuration Directory

Every object type has a corresponding directory with information in it in the `objects` root directory of an extension. This directory contains:

- config.json
- icon.png
- spritesheet.png (whatever spritesheet files you need)
