---
layout: post
title:  "Linux Command Reference"
date:   2019-11-27 13:45:00 -0500
categories: linux
tags:
  - Linux
  - CLI
---
Below are a list of Linux commands that I find useful:

{% highlight bash %}
# Zip a tarball
tar -cvzf my_tarball.tar.gz /path/to/item/to/compress

# Unzip a tarball
tar -xvzf file.tar.gz

# Sort all processes by memory in descending order
top -o %MEM

# Get a snapshot of all running processes
ps aux
{% endhighlight %}
