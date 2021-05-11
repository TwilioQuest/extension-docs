# Conversation HTML

Conversation HTML is a [TWIML-like](https://www.twilio.com/docs/glossary/what-is-twilio-markup-language-twiml) XML format that describes how a conversation screen looks in TwilioQuest. We use the [pug templating language](https://pugjs.org/api/getting-started.html) to dynamically adjust this Conversation HTML document based on the player's interactions with the world.

## Conversation Tags

### `<conversation>` <Badge text="required"/>

This is the overarching meta tag that lives at the root of every Conversation HTML and contains all the other tags.

#### Attributes

- `display_name` - string that shows as the NPC conversation partner's name in the conversation screen

### `<statement>` <Badge text="required"/>

Describes the body of text that the NPC conversation partner is "speaking" to the player. This tag should be empty and the `id` should correspond to a matching `id`'d statement tag in the `statements` list tag below.

##### Attributes

- `id` <Badge text="required"/> - this attribute is a unique identifier of this statement. It should be unique across all other statements in this conversation HTML file. When this statement is "spoken" by the conversation NPC partner, TwilioQuest will check for a [corresponding voice over file](/guide/npcs.html#voice-overs).

### `<responses>` <Badge text="required"/>

This tag contains zero or more `<response>` tags that lists a players options on the current conversation screen. There will always be an extra appended "end this conversation" option, even if there are no child `<response>` tags.

#### `<response>`

Describes the content of an individual response option. The inner content of this object is an HTML string that renders as one of a player's response options.

##### Attributes

- `id` <Badge text="required"/> - this attribute is a unique identifier of this response option. It should be unique across all possible response options, even those in other conversation screens. When a player chooses an option, this id value is set to the `lastResponse` variable in the Conversation HTML's global scope.

### `<statements>` <Badge text="required"/>

This tag contains the all statements used in this conversation, not just on the current screen. The statements listed inside this tag will have `id`'s corresponding to a `statement` at the root level of the conversation.

#### `<statement>`

Describes a potentially spoken statement by an NPC conversation partner.

- `id` <Badge text="required"/> - this attribute is a unique identifier of this statement. It should be unique across all other statements in this conversation HTML file. When this statement is "spoken" by the conversation NPC partner, TwilioQuest will check for a [corresponding voice over file](/guide/npcs.html#voice-overs).
- `expression` - basename corresponding to an image that should be shown as the NPC conversation partner's portrait if this conversation needs to override the default image.

##### `<text>` <Badge text="required"/>

The contents of this tag will be rendered as HTML in the main section of a conversation screen. Using HTML `<span>` tags with some custom classes can be used to create some nice visual effects. As this is HTML, authors can use any inline CSS they wish.

Build in classes:

- `highlight`
- `red`
- `orange`

##### `<speech>`

This tag is optional, and only needs to be used if you're generating a voice over file with [Amazon Polly](https://aws.amazon.com/polly/). By default, using the inner text of the `<text>` tag works pretty well. Sometimes you'll need to use some [SSML Tags](https://docs.aws.amazon.com/polly/latest/dg/supportedtags.html) to customize your voice overs. Those tags live here.

::: tip A note about using the speech tag

This `<speech>` tag is not currently used externally for content authors. The TwilioQuest team uses a script to generate dialog for Cedric with this tag with our own AWS account. You might consider doing this with your own setup.

:::

## Examples

An initial conversation screen with Cedric written in "Conversation HTML":

```xml
<conversation display_name="Cedric">
  <statement id="default">
  </statement>

  <responses>
    <response id="who_are_you">Hello, who are you?</response>
  </responses>

  <statements>
    <statement id="default">
      <text>Hello, who are <span class="highlight">you?<span></text>
      <speech>
        Hello, <break strength="medium"></break> who are you?
      </speech>
    </statement>
  </statements>
</conversation>
```

The same conversation screen above written using a Pug Template:

```pug
conversation(display_name="Cedric")
  statement#default
    responses
      response#who_are_you.
        Hello, who are you?

  statements
    statement#default
      text.
        Hello, who are #[span.highlight you?]
      speech.
        Hello, #[break(strength="medium")] who are you?
```

A series of conversation screens dynamically generated based on the last response value:

```pug
conversation(display_name="Cedric")
  case lastResponse
    when "nice_to_meet"
    when "you_seem_nice"
      statement#final
      responses

    when "who_are_you"
      statement#cedric
      responses
        response#nice_to_meet.
          Nice to meet you!
        response#you_seem_nice.
          You seem nice!

    default
      statement#default
      responses
        response#who_are_you.
          Hello, who are you?

  statements
    statement#default
      text.
        Welcome aboard the #[span.highlight Fog Owl!]
      speech.
        Welcome aboard the #[break(strength="medium")] Fog Owl!
    statement#cedric
      text.
        I am Cedric, your Cloud navigational assistant!
    statement#final
      text.
        Thank you! Now get exploring!
```
