---
layout: page
title: Portfolio
permalink: /portfolio/
---

<div class="grid gap-6 md:grid-cols-2">

  {% rendercontent "portfolio/card", url: "https://enjoymyrecipes.herokuapp.com/", image: "myrecipes-screenshot.jpg" %}
    MyRecipes: Ruby on Rails app
  {% endrendercontent %}

  {% rendercontent "portfolio/card", url: "https://enjoymymusic.herokuapp.com/", image: "mymusic-screenshot.jpg" %}
    MyMusic: JavaScript app
  {% endrendercontent %}

  {% rendercontent "portfolio/card", url: "https://tomodorotimer.herokuapp.com/", image: "tomodoro-timer-screenshot.jpg" %}
    Tomodoro Timer: React app
  {% endrendercontent %}

  {% rendercontent "portfolio/card", url: "https://github.com/thomashalljr", image: "github-logo.jpg" %}
    Check out my profile on GitHub!
  {% endrendercontent %}

</div>
