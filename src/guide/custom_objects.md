# Creating Custom Objects

Sometimes you want to do more than just paint a scene with tiles. You want to open a chest or talk to an NPC. Objects are how you accomplish dynamic things in the TwilioQuest world.

::: warning WIP ⚠️

This guide is still a work in progress!

:::

## What is an Object?

- it's a _thing_
- a collection of configuration files
- config.json
- spritesheets
- an icon in Tiled

## Built-in Objects

- check out the API page!

## Animations & Rendering

- What is an animation spritesheet?
- What are the spritesheet dimensions?
- icon for tiled

## Scripting Custom Behavior

- objects have state
- objects modify their state in response to events that happen in the game
- objects render themselves and make changes on how they're displayed via render

## Object Configuration Directory

Every object type has a corresponding directory with information in it in the `objects` root directory of an extension. This directory contains:

- config.json
- icon.png
- spritesheet.png (whatever spritesheet files you need)
