---
layout: page
title: Innovation Day Poster
permalink: /innovation-day/
nav: true
nav_order: 4
---

{% assign raw_posters = site.static_files | where_exp: "f", "f.path contains '/assets/img/poster' or f.path contains '/assets/img/posters/'" %}
{% assign posters = raw_posters | where_exp: "f", "f.path contains '.png' or f.path contains '.jpg' or f.path contains '.jpeg' or f.path contains '.gif' or f.path contains '.tiff'" %}
{% if posters and posters.size > 0 %}
  {% assign poster = posters.first %}
  {% assign pname = poster.path | split: '/' | last %}
  {% assign pcaption = site.data.screenshots[pname] %}
  {% include figure.liquid path=poster.path title=poster.name caption=pcaption %}
{% else %}
  _No poster image found. Put your poster under `assets/img/poster` or `assets/img/posters/`_
{% endif %}
