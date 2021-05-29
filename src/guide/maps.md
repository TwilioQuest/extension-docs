# Editing Maps

::: warning WIP ⚠️

This guide is still a work in progress!

:::

## How to use Tiled

[Tiled](https://www.mapeditor.org/) is a complicated piece of open source software! It does a lot of powerful things, but there are a few main features you'll need to make use of authoring your first TwilioQuest mission.

This video introduces the basics of editing tiles, objects, and layers in an older version of Tiled. Most of these features have been core to Tiled for a long time and should be similar to the latest version.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZwaomOYGuYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video is part of [a multi-part series](https://gamefromscratch.com/tiled-map-editor-tutorial-series/) that you can follow to learn more about advanced Tiled features.

Tiled also has a comprehensive set of [documentation](https://doc.mapeditor.org/en/stable/manual/introduction/), an active [Discord](https://discord.com/invite/39wbTv7), and [forum](https://discourse.mapeditor.org/) community you can reach out to with questions.

::: tip

If you're looking to create a new map, we recommend that you copy the provided one in the [twilioquest-extension-template](https://github.com/TwilioQuest/twilioquest-extension-template) rather than make a new one from Tiled. This will keep all your layers and tilesets configured.

:::

## Layers and Tiles

Tiles are the core of how you'll build the static parts of a TwilioQuest map. In Tiled, these are placed within "tile layers" using a variety of tools. These layers function similarly to layers in painting programs like Adobe Photoshop.

Tiled docs on [working with layers](https://doc.mapeditor.org/en/stable/manual/layers/) and [editing tile layers](https://doc.mapeditor.org/en/stable/manual/editing-tile-layers/).

Layers can have a few special properties that TwilioQuest will consume to treat them differently. These properties are:

- `collision` - If this is set to true, then the tiles in this layer will prevent the player from passing through them. There is usually a main `Collision` tile layer with this property.

- `hidden` - When set to true, this tile layer will not be rendered visually to the player. The `Collision` layer should have this property set as well.

- `useCollisionMasks` - This is a more advanced feature that will let the tiles in a tile layer use the Tiled Collision Editor to specify a custom collision box. This can be useful if tiles do not visually sit on the tile grid.

## Objects and Properties

Objects are important for accomplishing the various dynamic parts of TwilioQuest. This includes things like non player characters, laser barriers, and more!

Objects live within a special type of layer called an "object layer". Generally, each TwilioQuest map has a single object layer where every object lives. This layer is conventionally called `Objects`.

Both [built-in objects](/api/objects.html) and [custom objects](guide/custom_objects.html) can be added to this layer. They will have properties that can be tweaked for different effects depending on the object.

These are a few important built-in objects that essentially every map will use:

- [Player Entry Point](/api/objects.html#player-entry-points) - controls player spawn point
- [Terminal](/api/objects.html#terminals) - launches an objective for the player to complete
- [Laser Barrier](/api/objects.html#laser-barriers) - blocks a player's progression until a specific objective is completed
- [Exit](/api/objects.html#exits) - transports a player between maps, you'll at least need one to take your player back to the Fog Owl after they play your mission.

Tiled docs on [working with objects](https://doc.mapeditor.org/en/stable/manual/objects/) and [editing properties of objects](https://doc.mapeditor.org/en/stable/manual/custom-properties/).
