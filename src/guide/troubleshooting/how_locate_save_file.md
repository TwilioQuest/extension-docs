# How to Locate your TwilioQuest Save File

_**Author:** Ryan Kubik - **Date:** 5/24/22 - **TQ Version:** 3.5.1_

---

TwilioQuest saves all your player data in a JSON file called `config.json`. This guide will show you how to find this file. It can be useful to do this so you can back up your progress, move it to a new computer, or use it for debugging.

## Where is the Save File?

TwilioQuest stores data in the default application location on each operating system. In TwilioQuest `3.5+` you can use the `Help > Open Save File` option to open the save file.

In older versions of TwilioQuest, or to find the file without opening the game, these are the locations to check:

- on Linux: `~/.config/TwilioQuest/config.json`
- on macOS: `~/Library/Application Support/TwilioQuest/config.json`
  - Library is a hidden folder on MacOS. If you cannot see the folder in Finder, try using the hotkey `cmd+shift+.` to show hidden files.
- on Windows: `C:\Users\<USER>\AppData\Roaming\TwilioQuest\config.json`

::: warning

Be careful modifying anything in this file! It's very possible to corrupt your save file if you make changes you don't understand!

:::

## Move your Save to a New Computer

If you'd like to move your TwilioQuest progress to another computer, you should be able to copy this `config.json` file over. After you've installed TwilioQuest, replace the new `config.json` with your old one and restart the game!

Some missions of TwilioQuest might have data saved that is specific to your original computer. This can cause issues when moved to a new computer, especially if the new computer is using a different operating system.

If you run into issues with this process, ask for help on your situation in the [TwilioQuest Discord](https://twil.io/tq-discord)!

## Sharing your Save File

Sharing your save file can be very helpful in debugging efforts. We need to make sure to remove any sensitive information from your `config.json` file first though.

TwilioQuest saves environment variables in its save file while you play. These contain information like your Twilio Account SID and Secret. You should never share these with other people!

We need to make sure to remove any details like this from the `config.json` file before sending it to other people. Search the save file for the tag named `"env"`. This will contain all your environment variables, some of which might be secrets you should not share.

::: warning

If you're not sure you've removed the secrets from your save file (`config.json`), **ask for help!** Don't share your save file without checking for secrets first, you could expose your linked accounts!

:::
