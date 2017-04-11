---
layout: post
date: 2016-04-11
title:  "Create a static site using Jekyll and Docker"
category: 
- brain-dump
tags:
- jekyll
---

The fastest and most convenient way to create and serve a new Jekyll site is via Docker especially
now that Docker is available as a first-class citizen for both of macOS and Windows operating
systems.

The Jekyll team build and maintain a Docker image that can further simply this: 
[jekyll/jekyll](https://hub.docker.com/r/jekyll/jekyll/). Usage instructions for this Docker image 
are available in the image's [GitHub repo](https://github.com/jekyll/docker/wiki/Usage:-Running).

In short, to create a brand new website, create a directory on your computer (e.g. `/Users/behrangsa/my-blog`)
and then spin off a new Jekyll container and pass proper CLI arguments to create your site:

{% highlight shell linenos %}
$ cd /Users/behrangsa/my-blog
$ docker run --rm --label=my-blog
         --volume=$(pwd):/srv/jekyll
         -it -p 4000 jekyll/jekyll
         jekyll new /srv/jekyll
{% endhighlight %}

This will create the site skeleton in `/Users/behrangsa/my-blog`. From now on you can spin off
Jekyll containers with appropriate CLI arguments as you do when running Jekyll outside docker.

For example, to serve your site locally, you would execute the following command:

{% highlight shell linenos %}
$ docker run --rm --label=my-blog
         --volume=$(pwd):/srv/jekyll
         -it -p 4000 jekyll/jekyll
         jekyll serve -w
{% endhighlight %}

Now your site is available to be browsed at [localhost:4000](http://localhost:4000). 