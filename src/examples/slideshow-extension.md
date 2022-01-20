# Use iframe overlay component to create a slideshow

_Published: 1/19/2022 for TQ Version: 3.2.5_

TwilioQuest's world api has a [showOverlayComponent](/api/events.html#showoverlaycomponent) function. This function pops a UI component over top of the rest of the game.

There's a general purpose one called the `"iframe"` component that does this with an empty iframe. Author's can provide a URL to open this iframe with. This means that an extension can effectively create it's own custom UI screens within TwilioQuest.

## Slide Show Example Extension

The TwilioQuest [slideshow extension demonstrates](https://github.com/twilioquest/twilioquest-slideshow) how to display a locally running server app inside of TwilioQuest.

## Example Snippets

This snippet shows an example invocation of the `world.showOverlayComponent` function pulled from the slideshow extension demo.

This snippet is using the `props` feature to customize the `iframe` component. One of the important props seen here is `url`. This sets the URL that the iframe will open with. In this example, the iframe is opening a locally running URL on the player's computer.

This snippet is from the [config file](https://github.com/TwilioQuest/twilioquest-slideshow/blob/main/objects/slide/config.js) of the TQ Slideshow Extension's `slide` object.

```js
world.showOverlayComponent({
  key: "iframe",
  props: {
    url:
      "http://localhost:3000/" + event.target.iFramePathName + "?embedded=true",
    backgroundColor: "#06090f",
    fontColor: "#5dd463",
    borderless: false,
  },
});
```

This snippet is from a button on the TQ slideshow's local server app. It uses the [`window.postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API to close the `iframe` component.

This snippet is from the TQ slideshow extension [server side app](https://github.com/TwilioQuest/twilioquest-slideshow-slides/blob/main/src/components/Header.js#L19-L25).

```jsx
<button
  onClick={() => {
    window.parent.postMessage({ hide: true }, "*");
  }}
>
  X
</button>
```
