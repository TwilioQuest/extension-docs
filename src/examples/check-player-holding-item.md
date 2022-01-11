# How to check if a player is holding an item

_Published: 1/11/2022 for TQ Version: 3.2.4_

TwilioQuest has a central "context" that holds most of the data the game uses. You can see a lot of this data saved in your [save filed `config.json`](https://community.twilio.com/twilioquest/discussion/51/troubleshooting-tips).

There are `getContext` and `setContext` functions attached to the [world](/api/events.html#world-api) object that allow you to get and set these values. Look at this save file to get an idea of the properties you can use.

::: warning

Working with the context APIs tightly couples your extension to the internals of TwilioQuest. This may mean that your extension requires code fixes to keep working with future versions of TwilioQuest.

:::

## Checking player loadout

This is an example `events.js` file. It gets the current `loadout` context when the player interacts with an object with the `key` property `"test"`. You could trigger this logic on any event you wished.

The `loadout` object can have a property for each part of a player's equipment slot. If no items are equipped, any of these properties could be missing or set to `null`.

- `head`
- `body`
- `hand1`
- `hand2`
- `accessory1`
- `accessory2`
- `legs`
- `feet`

In this example, we're checking for the `body` property. Since it may be missing or null, we [use JavaScript's optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) to avoid a potential error.

If the name of the equipped object is the key `tshirt`, we show a notification. This snippet also logs the loadout object so you can inspect that data.

```js
module.exports = function(event, world) {
  if (event.name === "playerDidInteract" && event.target.key === "test") {
    const loadout = world.getContext("loadout");

    if (loadout.body?.name === "tshirt") {
      world.showNotification("I'm wearing a t shirt!");
    }

    console.log({ loadout });
  }
};
```
