---
title: Reset git credentials on a Mac
date: 2022-05-02T02:21:36.775Z
---

I tried doing a git push, but received this error:

```
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/thomashalljr/thomas-hall-jr-blog.git/'
```

So I needed to reset my git credentials using this command (note: after entering this multi-line command, you shouldn't get any output and that's okay).

```
git credential-osxkeychain erase
host=github.com
protocol=https
```

Then, the next time you git push, you should be prompted for your GitHub username and password. The username to enter was obvious, but GitHub stopped supporting account passwords for git authentication.

Instead, they accept personal access tokens. Here is a GitHub Docs article about [creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to use as your password. After entering your personal access token as your password in the command line, the next git push should be good to go.

Resources:

<https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain#deleting-your-credentials-via-the-command-line>

<https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token>

<https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/>
