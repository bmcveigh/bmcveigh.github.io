---
layout: tutorial
title:  "Using Jekyll and GitHub Pages for Blogs"
date:   2019-12-02 15:42:00 -0500
categories: posts jekyll
difficulty: Intermediate
tags:
 - Blogging
 - Jekyll
 - GitHub Pages
prerequisites:
 - title: 'How to: Use Docker'
   url: '/tutorials/docker/2019/11/21/how-to-use-docker.html'
---
Blogging in my opinion is an enjoyable experience; however, there is one thing
that made blogging kind of difficult to sustain up until now, and that is managing a
database. Sometimes you want to create content locally or keeping a database can be tricky
since you're not supposed to create a database using version control. If you are fairly technical
and feel a similar pain as I do, I have a solution for you; I recommend using
[Jekyll](https://jekyllrb.com) and [GitHub Pages](https://pages.github.com). Instead of manually
managing content and doing database backups, you can store all of your content using Git and
Markdown templates (if you're not familiar, this is what GitHub uses for README.md files).

### How do I get started?

To get started, from the method I will provide you with in this example, you will need to use
Docker Desktop. If you are not familiar on how to use Docker, see the prerequisite. You will also
need to download the source code provided by this project to start creating your Jekyll blog.
