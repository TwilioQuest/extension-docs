# TwilioQuest Extensions Documentation

This is the source code/content for the [TwilioQuest Extensions documentation site](https://twilioquest.github.io/extension-docs/). If you are interested in creating new content for TwilioQuest, start there!

## Contributing Documentation

This website is built using [Vuepress](https://vuepress.vuejs.org/). To run the doc site locally, fork/clone this repository on your computer. Then, with [Node.js and npm installed](https://nodejs.org/en/download/), install dependencies for the doc site using:

```
npm install
```

Next, you can run the website in development mode with:

```
npm run dev
```

Most of the documentation content can be found in Markdown files under `src/guide` or `src/api`. Vuepress configuration and theme can be found in the `src/.vuepress` folder (you should not need to edit this to contribute content). Site navigation is configured in `src/.vuepress/config.js` if it is necessary to modify the left or top nav.

Whenever a pull request is merged into the `main` branch of this repository, a [new version of the website](https://twilioquest.github.io/extension-docs/) is deployed a few minutes later.

## Getting Help

If you need help with TwilioQuest extension authoring (or help editing our documentation website), there are two places to go:

* Our [community forums](https://community.twilio.com/twilioquest)
* The `#extension-dev` channel on the [TwilioQuest Discord](https://twil.io/tq-discord)

While the TwilioQuest team does not maintain an SLA on either channel, we try to check in on these channels as time permits. We also have a number of awesome community members who are quick to jump in and help.

## License

The code and content of the documentation website are available under an MIT license.