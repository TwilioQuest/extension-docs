# Level Configuration

Configuration properties for your level are editable in `levels/<level_name>/level.json`. Here is a breakdown of all the components of `level.json`:

## Properties

### title

- type: `String`

Displayed title for the level (used in Mission Computer)

### description

- type: `String`

Text description of the level (used in Mission Computer)

### is_mission

- type: `Boolean`

Set to `true` if this level should appear in the Mission Computer

### prereqs

- type: `Array<ObjectiveName>`

A list of objectives from other missions that must be completed before this mission is playable.

#### ObjectiveName

- type: `String`

An objective name is a mission folder name concatenated with an objective folder name. Example: `["basic_training.basic3", "basic_training.basic4"]` - this means that in order to play this mission, you need to complete the objectives in `basic3` and `basic4` in the `basic_training` mission.

### flavorTextOverrides

- type: `Map<String>`
  - key: `String` - the key of a given piece of flavor text
  - value: `String` - the text to be displayed as flavor text upon object interaction

Set flavor text overrides for this level. If an in Tiled TileObject has the corresponding `flavorText` property string as a key in this object, the HTML text specified here will override the interaction text pop up.

### backgroundMusic

- type: `TrackName`

The key of the background music track to play for this mission.

#### TrackName

- type: `String`

The `basename` of a track file found in `public/levels/common/music`.

Options:

- `fascinatingarea_108253b`
- `safearea_337937b`
- `fogowl_629966b`
- `takeabow_1615732b`
- `hackertheme_104771b`
- `tq_christmas`
- `overture_b`
- `unsettlingarea_59895b`

### backgroundEffect

- type: `BackgroundEffect`

Specify the background effect of this level that will be shown behind transparent tiles left open in Tiled.

#### BackgroundEffect

- type: `Object`
  - `key (String)`: the name of the effect to be used. e.g. "starfield" or "vr"
  - `options (Object)`: some effects have options that allow them to be customized

Options:

- key: `starfield`<br/>
  options:

  - `ySpeed (number|Array[number])` - default: `[4, 8]` - An array specifying the min and max y speed of the stars in the field. If only one value is provided, all stars are the same speed.
  - `rotationSpeed (number)` - default: `0` - Speed of starfield rotation in radians per frame. Small numbers are appropriate (e.g. 0.0001)!
  - `starCount (number)` - default: `400` - Quantity of stars in the field. Increasing this number will increase the visual density of the stars on screen.

- key: `vr`<br/>
  options: none

#### mission_icon

- type: `String`

The `filePath` of an image file used in the Mission Computer as an icon for this level. The file path is built relative to the top level extension `images` directory.

## Examples

`/levels/fog_owl/level.json`

```json
{
  "title": "Fog Owl",
  "description": "The Cloud Exploration vehicle designated Fog Owl.",
  "is_mission": false,
  "backgroundEffect": {
    "key": "starfield",
    "options": { "baseSpeed": 0.03, "direction": "topToBottom" }
  },
  "backgroundMusic": "fogowl_629966b",
  "flavorTextOverrides": {
    "crewPod": "It looks like this pod is configured for a different user. I should use <span class=\"highlight\">my VR pod</span> instead. It's the <span class=\"highlight\">open pod with the green light on top</span>.",
    "crewComplement": "Beds for a bridge crew of four... When the Owl's ready to fly, I should <span class=\"highlight\">recruit a team</span> for the mission.",
    "chestNothing": "Does <span class=\"highlight\">this chest</span> open? Guess not... Well, it was worth a shot.",
    "replacementParts": "Replacement parts for a neural Cloud interface. Never hurts to be prepared.",
    "standupSet": "\"What did the zero say to the eight? <span class=\"highlight\">Nice belt!</span>\" ... Sadly, that's the best one in this standup routine. I hope whoever wrote this iterates a few more times before going on stage.",
    "fuel": "Wonder what kind of fuel this thing runs on...",
    "navigationSystemOffline": "The <span class=\"highlight\">navigation system</span> lets the ship travel to different parts of The Cloud. Looks like it's still offline...",
    "battleTactics": "Notes on battle tactics when facing the forces of the <span class=\"red\">Legacy Systems</span>. Someone expects trouble once we get the ship online...",
    "airlock": "An airlock, I think. If this is a virtual environment, will I still get <span class=\"highlight\">sucked out into space</span> if I open it? Not sure I want to find out."
  }
}
```
