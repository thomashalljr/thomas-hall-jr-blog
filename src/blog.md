---
layout: page
title: Blog
permalink: /blog/
---

<ul>
  {% for post in collections.posts.resources %}
    <li class="flex flex-col mb-10">
      <a href="{{ post.relative_url }}" class="text-2xl font-medium">{{ post.title }}</a>
      <p class="mt-1 mb-0">{{ post.description }}</p>
    </li>
  {% endfor %}
</ul>
