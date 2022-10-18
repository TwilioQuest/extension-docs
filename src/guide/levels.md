# Creating New Levels

## What are levels?

A **level** in TwilioQuest is an explorable area in the game that can contain objectives, game objects, and characters for the player to interact with. There are two types of levels that you can create:

* A **VR training mission** accessible through the Fog Owl's training simulator room
* A **location within The Cloud** that the player can navigate to using the Fog Owl's navigation map interface


At the time of this writing, the best way to create a new level is to **copy the level folder** of an existing level. This will copy all the map and tileset configuration you will need to effectively create a new level. The example level folder [in the template repo](https://github.com/TwilioQuest/twilioquest-extension-template/tree/main/levels/vr_mission_template) is a good one to use. It contains all the necessary files you will need to create a level. After doing this, your new level folder should look similar to what's shown below:

```
my_extension/
└── levels/
    ├── the_level_you_copied/
    └── your_new_level_folder/
        ├── conversations/
        ├── maps/
        ├── objectives/
        │   └── example_objective/
        ├── events.js
        └── level.json
```

Levels are broken up into several sub-directories and files:

- [conversations](#conversations),
- [maps](#maps),
- [objectives](#objectives),
- [events.js](#events-js),
- and [level.json](#level-json)

Check out how the [Fog Owl level](https://github.com/TwilioQuest/twilioquest-base/tree/main/levels/fog_owl) for a great example on how levels are structured and configured!

## [Conversations](./npcs.md#what-is-a-conversation)
You can write dynamic non-player character (NPC) dialogue for the characters the player will encounter in the level.

## [Maps](./maps.md#how-to-use-tiled)
These files specify the visual layout and game objects present within the level. A level may have multiple maps.

## [Objectives](./objectives.md)
Objectives are where you will deliver most of the educational content for your level. You will describe your objective using [Markdown](https://github.github.com/gfm/) and write validation code for your objective using [Node.js](https://www.nodejs.org).

## [Events.js](./events.md#maybe-objects-are-better-for-you)
The events file enables you to write code that can respond to level lifecycle events, and add dynamic behavior to your level. For example, starting a conversation with an npc once your level had loaded.

## [Level.json](../api/levels)
The level file contains the metadata for your new level, such as: the title, description, background music, etc.