---
layout: page
title: Blog
permalink: /blog/
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" class="text-xl">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
