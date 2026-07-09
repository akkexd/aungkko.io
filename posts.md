---
layout: page
title: "Posts"
permalink: /posts/
---

<p class="page-description">
Technical notes on robotics software, ROS2 navigation, mobile robot experiments, Mech reactive dataflow, benchmarking, Linux development, and research preparation.
</p>

<div class="post-list">
  {% for post in site.posts %}
    <article class="post-preview">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>
