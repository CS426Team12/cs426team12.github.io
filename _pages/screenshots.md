---
layout: page
title: Screenshots
permalink: /screenshots/
nav: true
nav_order: 2
---

{% assign raw_screenshots = site.static_files | where_exp: "f", "f.path contains '/assets/img/screenshots/'" %}
{% assign screenshots = raw_screenshots | where_exp: "f", "f.path contains '.png' or f.path contains '.jpg' or f.path contains '.jpeg' or f.path contains '.gif' or f.path contains '.tiff'" %}

{% comment %} Render a simple accessible carousel using the ordered list if provided. {% endcomment %}
{% if screenshots and screenshots.size > 0 %}
  <div class="screenshots-carousel" data-carousel>
    <button class="carousel-btn carousel-prev" aria-label="Previous">‹</button>
    <div class="carousel-track-wrap">
      <div class="carousel-track">
        {% assign shown = "" %}
        {% if site.data.screenshots and site.data.screenshots.order %}
          {% for name in site.data.screenshots.order %}
            {% for f in screenshots %}
              {% assign fname = f.path | split: '/' | last %}
              {% if fname == name %}
                {% assign caption = site.data.screenshots[name] %}
                <div class="carousel-slide" data-fname="{{ fname }}">
                  {% include figure.liquid path=f.path title=f.name caption=caption %}
                </div>
                {% capture shown %}{{ shown }}{{ name }}, {% endcapture %}
                {% break %}
              {% endif %}
            {% endfor %}
          {% endfor %}
          {% for f in screenshots %}
            {% assign fname = f.path | split: '/' | last %}
            {% unless shown contains fname %}
              {% assign caption = site.data.screenshots[fname] %}
              <div class="carousel-slide" data-fname="{{ fname }}">
                {% include figure.liquid path=f.path title=f.name caption=caption %}
              </div>
            {% endunless %}
          {% endfor %}
        {% else %}
          {% for f in screenshots %}
            {% assign fname = f.path | split: '/' | last %}
            {% assign caption = site.data.screenshots[fname] %}
            <div class="carousel-slide" data-fname="{{ fname }}">
              {% include figure.liquid path=f.path title=f.name caption=caption %}
            </div>
          {% endfor %}
        {% endif %}
      </div>
    </div>
    <button class="carousel-btn carousel-next" aria-label="Next">›</button>
    <div class="carousel-dots" role="tablist" aria-label="Screenshots navigation"></div>
  </div>
  <script src="{{ '/assets/js/screenshots-carousel.js' | relative_url }}" defer></script>
{% else %}
  _No screenshots uploaded yet. Place images under `/assets/img/screenshots/` and they will appear here._
{% endif %}
