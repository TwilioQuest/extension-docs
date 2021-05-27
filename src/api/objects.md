# Built-in Game Objects

The `twilioquest-base` extension ships with some default scripted objects. We use these in official TwilioQuest content or provide them as helpful building blocks.

These objects are members of the `TwilioQuestObjects` tileset. These objects come with a bundle of pre-configured properties and custom scripting. Several of the objects below have many types. These are the same object's with functionality, but with different sprites or orientations.

## TwilioQuestObjects

### Chests

Chests in TwilioQuest are used to present objectives to your players that are optional. They do not block a player's progress. These are best suited for enrichment lessons that are not central to the mission's content.

#### Properties

- `objectiveName (String)` - This is the objective name that this chest should display in a Hack Interface when a player interacts with the chest.

- types: `chest-red`, `chest-autumn`, `chest-blue`, `chest-green`, `chest-light-blue`, `chest-light-red`, `chest-pink`, `chest-purple`, `chest-red-orange`

### Laser Barriers

Laser Barriers in TwilioQuest are conventionally used to present objectives to your players that are required. They prevent a player from progressing into the space they block off. Once their linked objective is completed they will open. These are best suited to be paired with a terminal that will launch essential educational content.

#### Properties

- `objectiveName (String)` - This is the objective name that should cause this laser barrier to open after it's completed.

- types: `laser-horizontal`, `laser-vertical`

### Terminals

Terminals are the conventional location for launching an objective that will open up a laser barrier.

- `objectiveName (String)` - This is the objective name that this terminal should display in a Hack Interface when a player interacts with the terminal.

- types: `terminal`

## Legacy Objects

These objects are created in Tiled differently than the new object format above. As time progresses, they'll be migrated to that new format.

### Transition Areas

- key

These trigger events when they're entered and exited by a player

### Exits

- level name
- map name

These could be replaced by transition areas?

### Player Entry Points

By convention, these points names are formatted like so `player_entryX` where `X` is a unique identifier (usually an incrementing number).

Each map should have at least one `player_entry1` entry point. This is where TwilioQuest will default to if no specific player entry point is provided when a map is loaded.

- key
- initialFacing

### Non Player Characters (NPCs)

- conversation

### Tile Objects

This infomration might belong in a guide?

### Generic Objects

This information might belong in a guide?

These are sometimes useful to do things like create an arbitrary region that triggers a piece of interaction text.
