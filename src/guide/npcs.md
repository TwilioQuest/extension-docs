# NPC Conversations

## Voice Overs

Voice over files are pulled from the `vo` directory inside of a level's `conversations` directory.

Each statement in a conversation file should have it's own voice over audio file. When a statement is "spoken" by an NPC conversation partner, TwilioQuest will look up the appropriate audio file.

TwilioQuest uses the conversation file name and statement id to look up voice over audio files. The basename of the file and the id of the statement are concatenated with an underscore.

For example:

`levels/cool_level/conversations/cool_npc.pug`

```pug
conversation
  statement#cool_speech
    responses

  statements
    statement#cool_speech
      text.
        I have a cool thing to say!
```

For the statement `id`'d as `cool_speech` given by the `cool_npc` conversation we would find the voice over audio file at the following file path:

`levels/cool_level/conversation/vo/cool_npc_cool_speech.mp3`
