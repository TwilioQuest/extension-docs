(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{428:function(e,o,t){"use strict";t.r(o);var i=t(45),s=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-locate-your-twilioquest-save-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-locate-your-twilioquest-save-file"}},[e._v("#")]),e._v(" How to Locate your TwilioQuest Save File")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Author:")]),e._v(" Ryan Kubik - "),t("strong",[e._v("Date:")]),e._v(" 5/24/22 - "),t("strong",[e._v("TQ Version:")]),e._v(" 3.5.1")])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("TwilioQuest saves all your player data in a JSON file called "),t("code",[e._v("config.json")]),e._v(". This guide will show you how to find this file. It can be useful to do this so you can back up your progress, move it to a new computer, or use it for debugging.")]),e._v(" "),t("h2",{attrs:{id:"where-is-the-save-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-is-the-save-file"}},[e._v("#")]),e._v(" Where is the Save File?")]),e._v(" "),t("p",[e._v("TwilioQuest stores data in the default application location on each operating system. In TwilioQuest "),t("code",[e._v("3.5+")]),e._v(" you can use the "),t("code",[e._v("Help > Open Save File")]),e._v(" option to open the save file.")]),e._v(" "),t("p",[e._v("In older versions of TwilioQuest, or to find the file without opening the game, these are the locations to check:")]),e._v(" "),t("ul",[t("li",[e._v("on Linux: "),t("code",[e._v("~/.config/TwilioQuest/config.json")])]),e._v(" "),t("li",[e._v("on macOS: "),t("code",[e._v("~/Library/Application Support/TwilioQuest/config.json")]),e._v(" "),t("ul",[t("li",[e._v("Library is a hidden folder on MacOS. If you cannot see the folder in Finder, try using the hotkey "),t("code",[e._v("cmd+shift+.")]),e._v(" to show hidden files.")])])]),e._v(" "),t("li",[e._v("on Windows: "),t("code",[e._v("C:\\Users\\<USER>\\AppData\\Roaming\\TwilioQuest\\config.json")])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Be careful modifying anything in this file! It's very possible to corrupt your save file if you make changes you don't understand!")])]),e._v(" "),t("h2",{attrs:{id:"move-your-save-to-a-new-computer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#move-your-save-to-a-new-computer"}},[e._v("#")]),e._v(" Move your Save to a New Computer")]),e._v(" "),t("p",[e._v("If you'd like to move your TwilioQuest progress to another computer, you should be able to copy this "),t("code",[e._v("config.json")]),e._v(" file over. After you've installed TwilioQuest, replace the new "),t("code",[e._v("config.json")]),e._v(" with your old one and restart the game!")]),e._v(" "),t("p",[e._v("Some missions of TwilioQuest might have data saved that is specific to your original computer. This can cause issues when moved to a new computer, especially if the new computer is using a different operating system.")]),e._v(" "),t("p",[e._v("If you run into issues with this process, ask for help on your situation in the "),t("a",{attrs:{href:"https://twil.io/tq-discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("TwilioQuest Discord"),t("OutboundLink")],1),e._v("!")]),e._v(" "),t("h2",{attrs:{id:"sharing-your-save-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sharing-your-save-file"}},[e._v("#")]),e._v(" Sharing your Save File")]),e._v(" "),t("p",[e._v("Sharing your save file can be very helpful in debugging efforts. We need to make sure to remove any sensitive information from your "),t("code",[e._v("config.json")]),e._v(" file first though.")]),e._v(" "),t("p",[e._v("TwilioQuest saves environment variables in its save file while you play. These contain information like your Twilio Account SID and Secret. You should never share these with other people!")]),e._v(" "),t("p",[e._v("We need to make sure to remove any details like this from the "),t("code",[e._v("config.json")]),e._v(" file before sending it to other people. Search the save file for the tag named "),t("code",[e._v('"env"')]),e._v(". This will contain all your environment variables, some of which might be secrets you should not share.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("If you're not sure you've removed the secrets from your save file ("),t("code",[e._v("config.json")]),e._v("), "),t("strong",[e._v("ask for help!")]),e._v(" Don't share your save file without checking for secrets first, you could expose your linked accounts!")])])])}),[],!1,null,null,null);o.default=s.exports}}]);