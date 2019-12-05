---
layout: tutorial
title: Getting elements using a CSS selector (not jQuery)
categories: tutorials javascript
description: Learn how to get a DOM element via a CSS selector without using jQuery.
difficulty: Beginner
date:   2019-11-25 17:53:00 -0500
tags: 
  - Tutorials
  - JavaScript
---
Until recently, I discovered that you can retrieve HTML DOM elements using CSS selectors. This can be done by calling `document.querySelector('.your-class')` in your JS code. Previously, I was using jQuery to do this.

Here is an example:
{% highlight javascript %}
// Instantiate the existing button DOM element.
const buttonElement = document.querySelector('.my-button');

// Click the button.
buttonElement.click();
{% endhighlight %}

Here’s what the HTML would look like, keeping it Vanilla JS:
{% highlight html %}
<!-- The button that will be clicked by JS, and maybe by you too. :-) -->
<button class="my-button" onclick="alert('Hello, world!');">My very special button</button>
{% endhighlight %}

You can see an example of this in CodePen [here](https://codepen.io/bribread22/pen/vYYqJBy).
Notice how when you load the page, you get the alert pop-up displaying "Hello, world!"
This means the JavaScript is clicking the button.
