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

# Find out who's using the most memory in MB
ps aux | awk '{print $6/2024 " MB\t\t" $11}' | sort -n

# Find a file named httpd.conf
sudo find / -type f -name "httpd.conf"

# Recursively look through files for a string
grep -r 'search string' /path/to/directory

# Recursively make a directory
mkdir -p dir/you/want/to/create

# Show mounted disk volumes
df
{% endhighlight %}

