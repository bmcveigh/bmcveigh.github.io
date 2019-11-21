---
layout: tutorial
title:  "How to: Use Create React App"
date:   2019-11-21 09:53:59 -0500
categories: tutorials javascript react
description: In this tutorial, we will take a look at creating a new React site using create-react-app.
tools_used:
- title: 'NodeJS'
  url: '#'
- title: 'NPM'
  url: '#'
---
### Overview

To create your React application, there is a tool I recommend using called
**Create React App**. This, like the React library itself, is developed and
maintained by Facebook. In this tutorial, I will show you how to create
a new React site using create-react-app.

If you do not have NodeJS installed, make sure to [download and install it](https://nodejs.org/en/download/);
we will need this to use npm.

Once NodeJS is downloaded, you will need to install npx. To do this, you can
run it by typing in

`npm install -g npx`

Once npx is installed successfully without any issues, navigate to the directory
you would like to save your react project and enter these commands:

{% highlight bash %}
npx create-react-app my-app
cd my-app
npm start
{% endhighlight %}
