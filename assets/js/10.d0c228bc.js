(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{364:function(e,t,a){e.exports=a.p+"assets/img/npc_cedric_fog_owl.569bc3b1.png"},365:function(e,t,a){e.exports=a.p+"assets/img/npc_cedric_conversation_screen.cc07bfc6.png"},396:function(e,t,a){"use strict";a.r(t);var s=a(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"non-player-characters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#non-player-characters"}},[e._v("#")]),e._v(" Non Player Characters")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WIP ⚠️")]),e._v(" "),s("p",[e._v("This guide is still a work in progress!")])]),e._v(" "),s("h2",{attrs:{id:"what-is-an-npc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-npc"}},[e._v("#")]),e._v(" What is an NPC?")]),e._v(" "),s("p",[e._v("Non Player Characters (NPCs) are entities that represent other characters besides the player that live in The Cloud. These characters have their own avatars and names to give them unique identities. The primary way that players interact with NPCs is via conversations.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(364),alt:"NPC Cedric standing in the Fog Owl cockpit"}})]),e._v(" "),s("h2",{attrs:{id:"what-is-a-conversation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-conversation"}},[e._v("#")]),e._v(" What is a conversation?")]),e._v(" "),s("p",[e._v("When a player uses their interaction button on an NPC a conversation screen will launch. It looks like the screen below, and has a few different parts. An entire conversation is composed of one or more of these screens in a row.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(365),alt:"NPC Cedric first conversation screen"}})]),e._v(" "),s("h3",{attrs:{id:"portrait"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#portrait"}},[e._v("#")]),e._v(" Portrait")]),e._v(" "),s("p",[e._v("This is a close up picture of the NPC that is participating in the conversation. This image can be adjusted throughout the conversation to change the character's emotions.")]),e._v(" "),s("h3",{attrs:{id:"statement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statement"}},[e._v("#")]),e._v(" Statement")]),e._v(" "),s("p",[e._v("The text that the NPC is speaking to the player. This text uses HTML so it can be styled with highlights, italics, or other styles. If a character has voice over files, they'll be narrated to the player alongside this text.")]),e._v(" "),s("h3",{attrs:{id:"display-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-name"}},[e._v("#")]),e._v(" Display Name")]),e._v(" "),s("p",[e._v("This is the name of the NPC your player is conversing with. This is not tied to a specific conversation file, so it can change when a conversation is launched if needed.")]),e._v(" "),s("h3",{attrs:{id:"reponses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reponses"}},[e._v("#")]),e._v(" Reponses")]),e._v(" "),s("p",[e._v("This is a list of options the player receives for how they'd like to respond to the NPC they're talking to. When the player chooses a response, a new conversation screen displays and the conversation continues. Responses can be chosen by clicking or pressing the corresponding number.")]),e._v(" "),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("p",[e._v("Every individual response is best constructed as a short line of text from the perspective of the player speaking.")]),e._v(" "),s("h3",{attrs:{id:"end-conversation-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end-conversation-response"}},[e._v("#")]),e._v(" End Conversation Response")]),e._v(" "),s("p",[e._v("At the end of every conversation screen's responses, an "),s("code",[e._v("<end conversation>")]),e._v(" response option is appended. If this option is chosen then the conversation will be terminated.")]),e._v(" "),s("h2",{attrs:{id:"creating-an-npc-and-conversation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-npc-and-conversation"}},[e._v("#")]),e._v(" Creating an NPC and conversation")]),e._v(" "),s("p",[e._v("There are two main aspects to creating an NPC that a player interacts with in TwilioQuest, the object itself and its conversation file(s).")]),e._v(" "),s("h3",{attrs:{id:"creating-the-npc-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-npc-object"}},[e._v("#")]),e._v(" Creating the NPC object")]),e._v(" "),s("p",[e._v("An NPC object is a "),s("RouterLink",{attrs:{to:"/api/objects.html#non-player-characters-npcs"}},[e._v("built-in TwilioQuest object")]),e._v(" with a special property that corresponds to a conversation name.")],1),e._v(" "),s("p",[e._v("An NPC object can be placed into a level of TwilioQuest like any other game object. Check out the "),s("RouterLink",{attrs:{to:"/guide/maps.html"}},[e._v("guide on map editing")]),e._v(" to learn more.")],1),e._v(" "),s("h3",{attrs:{id:"create-a-conversation-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-conversation-file"}},[e._v("#")]),e._v(" Create a conversation file")]),e._v(" "),s("p",[e._v("The conversation file contains all of the information needed to describe the sequences of conversation screens a player will navigate through while talking to an NPC.")]),e._v(" "),s("p",[e._v("The name of this file base name is important. Conventionally, we title these after the name of the NPC that will speak the file. If an NPC has more than one conversation file, we'd called them something like "),s("code",[e._v("cedric_welcome")]),e._v(" and "),s("code",[e._v("cedric_congratulations")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"conversation-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conversation-html"}},[e._v("#")]),e._v(" Conversation HTML")]),e._v(" "),s("p",[e._v("TwilioQuest conversations are created using "),s("RouterLink",{attrs:{to:"/api/conversations.html#conversation-html"}},[e._v("Conversation HTML")]),e._v(". Conversation HTML is made of a variety of tags that describe a conversation screen. If you look at the list of "),s("RouterLink",{attrs:{to:"/api/conversations.html#conversation-tags"}},[e._v("conversation tags")]),e._v(" in the API documentation you'll see they correspond to the sections of "),s("RouterLink",{attrs:{to:"/guide/npcs.html#what-is-a-conversation"}},[e._v("the conversation screen above")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"playing-a-conversation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playing-a-conversation"}},[e._v("#")]),e._v(" Playing a conversation")]),e._v(" "),s("p",[e._v("There are a couple different ways to launch into a conversation.")]),e._v(" "),s("h4",{attrs:{id:"link-a-conversation-file-in-tiled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link-a-conversation-file-in-tiled"}},[e._v("#")]),e._v(" Link a conversation file in Tiled")]),e._v(" "),s("p",[e._v("Use the "),s("code",[e._v("conversation")]),e._v(" property of an "),s("RouterLink",{attrs:{to:"/api/objects.html#non-player-characters-npcs"}},[e._v("NPC object")]),e._v(" in Tiled and set it to the basename of the conversation file you want to play when a player interacts with that NPC.")],1),e._v(" "),s("h4",{attrs:{id:"use-the-world-api-to-dynamically-converse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-world-api-to-dynamically-converse"}},[e._v("#")]),e._v(" Use the world API to dynamically converse")]),e._v(" "),s("p",[e._v("You can dynamically play conversations using the "),s("RouterLink",{attrs:{to:"/api/events.html#startconversation"}},[e._v("startConversation")]),e._v(" function on the world API inside of a custom object or events.js file.")],1),e._v(" "),s("h2",{attrs:{id:"voice-overs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#voice-overs"}},[e._v("#")]),e._v(" Voice Overs")]),e._v(" "),s("p",[e._v("Voice over files are pulled from the "),s("code",[e._v("vo")]),e._v(" directory inside of a level's "),s("code",[e._v("conversations")]),e._v(" directory.")]),e._v(" "),s("p",[e._v('Each statement in a conversation file should have it\'s own voice over audio file. When a statement is "spoken" by an NPC conversation partner, TwilioQuest will look up the appropriate audio file.')]),e._v(" "),s("p",[e._v("TwilioQuest uses the conversation file name and statement id to look up voice over audio files. The basename of the file and the id of the statement are concatenated with an underscore.")]),e._v(" "),s("p",[e._v("For example:")]),e._v(" "),s("p",[s("code",[e._v("levels/cool_level/conversations/cool_npc.pug")])]),e._v(" "),s("div",{staticClass:"language-pug extra-class"},[s("pre",{pre:!0,attrs:{class:"language-pug"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[e._v("conversation")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[e._v("statement"),s("span",{pre:!0,attrs:{class:"token attr-id"}},[e._v("#cool_speech")])]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[e._v("responses")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[e._v("statements")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[e._v("statement"),s("span",{pre:!0,attrs:{class:"token attr-id"}},[e._v("#cool_speech")])]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[e._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token multiline-plain-text"}},[e._v("\n        I have a cool thing to say!")]),e._v("\n")])])]),s("p",[e._v("For the statement "),s("code",[e._v("id")]),e._v("'d as "),s("code",[e._v("cool_speech")]),e._v(" given by the "),s("code",[e._v("cool_npc")]),e._v(" conversation we would find the voice over audio file at the following file path:")]),e._v(" "),s("p",[s("code",[e._v("levels/cool_level/conversation/vo/cool_npc_cool_speech.mp3")])])])}),[],!1,null,null,null);t.default=n.exports}}]);