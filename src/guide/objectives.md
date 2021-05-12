# Creating Objectives

::: warning WIP ⚠️

This guide is still a work in progress!

:::

## Examples

This is a validator that uses an asynchronous network request to check if a user entered a valid GitHub username in an objective.

```js
const got = require("got");

module.exports = async (helper) => {
  const username = helper.getNormalizedInput("username", { lowerCase: false });

  if (!username) {
    return helper.fail(`Please enter the username of your GitHub account!`);
  }

  try {
    const response = await got(`https://api.github.com/users/${username}`, {
      throwHttpErrors: false,
    });

    if (response.statusCode === 200) {
      return helper.success(
        `We found your GitHub user, ${username}. Good job!`,
        [{ name: "GITHUB_USERNAME", value: username }]
      );
    } else {
      helper.fail(
        `We couldn't find the GitHub user, ${username}. Is there a typo in the username?`
      );
    }
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate your GitHub username!
      
      ${err}`
    );
  }
};
```

This validator is an example of parsing a user supplied GitHub URL and using it's pieces to dynamically display a user's profile image inside of the Validator response text.

```js
// parsing a URL for a GitHub repository link like so:
// https://github.com/twilioquest/twilioquest-extension-template

module.exports = async function(helper) {
  const { userUrl } = helper.validationFields;

  let parsedUserUrl;

  try {
    parsedUserUrl = new URL(userUrl);
  } catch (err) {
    return helper.fail(`
    "${userUrl}" is not a valid URL.
    `);
  }

  if (!parsedUserUrl.hostname.toLowerCase().includes("github.com")) {
    return helper.fail(`
    "${userUrl}" is not a Github URL.
    `);
  }

  const partsOfPathName = parsedUserUrl.pathname.toLowerCase().split("/");
  // const [, user, repository] = partsOfPathname;
  const user = partsOfPathName[1];
  const repository = partsOfPathName[2];

  if (user !== "twilioquest") {
    return helper.fail(`
    "${userUrl}" is not owned by TwilioQuest!
    `);
  }

  if (!repository) {
    return helper.fail(`
    "${userUrl}" does not contain a repository link!
    `);
  }

  let avatar_url;

  try {
    const response = await fetch(
      `https://api.github.com/users/${user}`
    ).then((response) => response.json());

    avatar_url = response.avatar_url;
  } catch (err) {
    console.log(`Failed to request profile image for "${user}"`);
  }

  return helper.success(`
  We found the repository "${repository}" owned by "${user}"!
  <img src="${avatar_url}" alt="User's profile image" />
  `);
};
```
