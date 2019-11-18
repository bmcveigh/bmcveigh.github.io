---
layout: post
title:  "How to: Configure Your Project to use Sass"
date:   2019-11-04 21:51:00 -0500
categories: tutorials sass
---
[Sass](https://sass-lang.com/) (short for Syntactically Awesome Stylesheets) is a great tool for front-end development, especially when you notice the drawbacks of CSS, particularly with selectors and duplicate styles. In this article, I will show you how to configure your project to use Sass.

To compile and use Sass, you will need to make sure you have the following tools installed, which I will discuss later in this tutorial:

* [NodeJS](https://nodejs.org/en/) (for running npm, gulp tasks, and dependencies) installed on your system.
* [npm](https://www.npmjs.com/) (this is part of NodeJS, but you may need to install it independently use it if you’re installing it on Linux)
* [GulpJS](https://gulpjs.com/) (used to run tasks like compiling Sass and JavaScript)

If you are using Windows, I recommend installing this in Ubuntu LTS from the Microsoft Store. It’s not required to run everything, but if you like the Linux CLI better, I highly recommend installing this. If you do decide to install it, make sure you download the latest version as a prerequisite.

### Step 1: Install NodeJS and npm

If you are on an Ubuntu-based Linux OS, run sudo apt install nodejs npm. If you are on a different flavor of Linux, you can run sudo yum install nodejs npm. If you want to install NodeJS through a GUI instead of a CLI, you can download it here.

### Step 2: Add gulp as a dependency in your project

In the CLI, navigate to the directory you want to install gulp and run:

`npm install gulp node-sass gulp-sass --save-dev`

### Step 3: Add the Gulp file

`touch gulpfile.js`

### Step 4: Open the gulpfile and paste the code below into the Gulp file.

{% highlight javascript %}
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('default', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
{% endhighlight %}

### Step 5: Create an index.scss directory

From within your theme, run `mkdir sass && touch sass/index.scss` if you do not already have a directory called sass.

### Step 6: Install Gulp globally on your local machine

`npm install -g gulp`

### Step 7: Run gulp to make sure it is working properly

`gulp`
