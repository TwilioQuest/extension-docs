# Load relative images in Objective markdown files

_Published: 1/11/2022 for TQ Version: 3.2.5_

TwilioQuest is a web app wrapped in Electron and running on your computer. There are bundled images files we "host" in this local web app we host in the `public` directory of our build. If you investigate the build files you can probably find it.

Like most web servers, relative paths are relative to this `public` folder. This is handy if you have access to that folder (AKA are a TwilioQuest developer).

If you're trying to load an image from an extension though, this is more complicated. There's not a method to add your images to the root bundled public folder.

Instead, you'll need an absolute path to the image you'd like to display. You can do this on your own computer reliably since you know how all your folders are setup.

To make this reliable on another person's computer we'll need to learn about how TwilioQuest renders objective markdown. TwilioQuest uses [EJS](https://ejs.co/) to convert your markdown files into displayable HTML. This means that you can use EJS's scripting API to dynamically format your document.

TwilioQuest provides a few values in the EJS context. One of these is the `resolveAbsolutePath` function. If you give it a path string relative to the root of your extension, it will resolve it at render time to an absolute path. This function will also respect the extension override ordering.

This code snippet creates a variable called `imagePath` with a path to an image in the extension. It then uses the `<%=` syntax from EJS to set the value into the HTML document. Be sure not to miss the `=`!

```ejs
<% const imagePath = await resolveAbsolutePath("levels/vr_mission_template/images/shield.png") %>

![shield image](<%= imagePath %>)
```
