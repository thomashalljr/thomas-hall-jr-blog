---
title: "How to fix MySQL error: Access denied for user"
description: "Rails wasn't configured to connect to MySQL, and this sequence of events exposed the issue."
date: 2019-03-23 20:39:59 -0400
---

Well, here it goes, my first blog post. Let's kick it off with a MySQL error.

```
Mysql2::Error: Access denied for user 'root'@'localhost' (using password: NO)
```

The issue surfaced after creating the first model in a Ruby on Rails app and then trying to start rails server in development. It turns out config/database.yml wasn’t set up with the right MySQL credentials. After saving this file with the correct username and password, and then restarting rails server, my website didn’t receive the error anymore.

Here are some related links for anyone with this kind of problem.

[https://coderwall.com/p/vua9aa/access-denied-for-user-root-localhost-using-password-no-mysql2-error](https://coderwall.com/p/vua9aa/access-denied-for-user-root-localhost-using-password-no-mysql2-error)

[https://stackoverflow.com/questions/6886583/ruby-on-rails-mysql-error-access-denied-for-user-rootlocalhost](https://stackoverflow.com/questions/6886583/ruby-on-rails-mysql-error-access-denied-for-user-rootlocalhost)
