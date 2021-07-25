---
layout: page
title: Blog
permalink: /blog/
---

<ul>
  {% for post in collections.posts.resources %}
    <li>
      <a href="{{ post.relative_url }}" class="text-xl">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
