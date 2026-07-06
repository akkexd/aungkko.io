---
layout: page
title: Posts
permalink: /posts/
---

# Posts

Technical notes on robotics software, ROS2 navigation, mobile robot experiments, Mech reactive dataflow, benchmarking, Linux development, and research preparation.

<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
