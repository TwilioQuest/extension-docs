(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{410:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-check-if-a-player-is-holding-an-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-check-if-a-player-is-holding-an-item"}},[t._v("#")]),t._v(" How to check if a player is holding an item")]),t._v(" "),a("p",[a("em",[t._v("Published: 1/11/2022 for TQ Version: 3.2.4")])]),t._v(" "),a("p",[t._v('TwilioQuest has a central "context" that holds most of the data the game uses. You can see a lot of this data saved in your '),a("a",{attrs:{href:"https://community.twilio.com/twilioquest/discussion/51/troubleshooting-tips",target:"_blank",rel:"noopener noreferrer"}},[t._v("save filed "),a("code",[t._v("config.json")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("There are "),a("code",[t._v("getContext")]),t._v(" and "),a("code",[t._v("setContext")]),t._v(" functions attached to the "),a("RouterLink",{attrs:{to:"/api/events.html#world-api"}},[t._v("world")]),t._v(" object that allow you to get and set these values. Look at this save file to get an idea of the properties you can use.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Working with the context APIs tightly couples your extension to the internals of TwilioQuest. This may mean that your extension requires code fixes to keep working with future versions of TwilioQuest.")])]),t._v(" "),a("h2",{attrs:{id:"checking-player-loadout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-player-loadout"}},[t._v("#")]),t._v(" Checking player loadout")]),t._v(" "),a("p",[t._v("This is an example "),a("code",[t._v("events.js")]),t._v(" file. It gets the current "),a("code",[t._v("loadout")]),t._v(" context when the player interacts with an object with the "),a("code",[t._v("key")]),t._v(" property "),a("code",[t._v('"test"')]),t._v(". You could trigger this logic on any event you wished.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("loadout")]),t._v(" object can have a property for each part of a player's equipment slot. If no items are equipped, any of these properties could be missing or set to "),a("code",[t._v("null")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("head")])]),t._v(" "),a("li",[a("code",[t._v("body")])]),t._v(" "),a("li",[a("code",[t._v("hand1")])]),t._v(" "),a("li",[a("code",[t._v("hand2")])]),t._v(" "),a("li",[a("code",[t._v("accessory1")])]),t._v(" "),a("li",[a("code",[t._v("accessory2")])]),t._v(" "),a("li",[a("code",[t._v("legs")])]),t._v(" "),a("li",[a("code",[t._v("feet")])])]),t._v(" "),a("p",[t._v("In this example, we're checking for the "),a("code",[t._v("body")]),t._v(" property. Since it may be missing or null, we "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",target:"_blank",rel:"noopener noreferrer"}},[t._v("use JavaScript's optional chaining"),a("OutboundLink")],1),t._v(" to avoid a potential error.")]),t._v(" "),a("p",[t._v("If the name of the equipped object is the key "),a("code",[t._v("tshirt")]),t._v(", we show a notification. This snippet also logs the loadout object so you can inspect that data.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"playerDidInteract"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loadout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"loadout"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loadout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tshirt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showNotification")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m wearing a t shirt!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" loadout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);