# Objective Configuration

Configuration properties for your objective are editable in `levels/<level_name>/objectives/<objective_name>/objective.json`. Here is a breakdown of all the components of `objective.json`:

## Properties

### title

- type: `String`

This text is played at the top of the Hack Interface when the objective is opened.

### description

- type: `String`

This text is showed on the first page of the Hack Interface. It is intended to give the player a small bit of context about this objective. HTML elements are allowed in this string like `<strong>`.

### validation_fields

- type: `Array<ValidationField>`

This is a list of the user input fields a player will have access to. They're used to pass information into a `validator.js` file so that player's input can be validated as part of the objective validation process. Even objectives that have no need for player input should make use of the `prompt` type.

#### ValidationField

- type: `Object`
  - `name (String)`: this maps to the `name` property of the underlying HTML element.
  - `type (String)`: this picks the type of field to be created, it can be `prompt`, `textarea`, or any other `type` assignable to an HTML `input` element.
  - `placeholder (String)`: the placeholder value that appears in your input before players have applied input.
  - `label (String)`: the label placed above your input in the UI

This represents a set of information used to created inputs for the player to pass information into a validator. Some of these tags map to underlying HTML values, others do not.

### show_ide

- type: `Boolean`

Should this objective allow the player to open up the integrated QuestIDE.

> ⚠️ DEPRECATION WARNING ⚠️: This property is going to be removed in future versions of the game.

### rewards

- type: `Object`
  - `xp (Number)`: an integer to be added to the player's current XP total upon objective completion
  - `items Array<ItemKey>`: a list of items to be added to the player's inventory upon objective completion

This is an object that describes the experience and item rewards that a player receives if they pa the validation for this objective.

#### ItemKey

- type: `String`

This is a string corresponding to one of the item keys in the game. An item key is derived from the name of the folder that contains the item's information and image assets.

## Examples

`levels/fog_owl/objectives/owl_plant_tree1/objective.json`

```JSON
{
  "title": "Fog Owl: Plant a Tree!",
  "description": "Playing TwilioQuest supports reforestation in Australia. Click <strong>HACK</strong>, and Twilio will donate a dollar to plant a tree!",
  "validation_fields": [
    {
      "name": "prompt",
      "type": "prompt",
      "placeholder": "",
      "label": "Click HACK to plant a tree."
    }
  ],
  "show_ide": false,
  "rewards": {
    "xp": 100
  }
}
```
