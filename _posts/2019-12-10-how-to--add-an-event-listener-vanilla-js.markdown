---
layout: tutorial
title:  "How to: Add an event listener in vanilla JavaScript"
date:   2019-12-10 14:38:00 -0500
categories: tutorials javascript
difficulty: Beginner
tags:
  - JavaScript
  - Event Driven Programming
  - Vanilla JavaScript
---
Adding an event listener in vanilla JavaScript can come in handy,
especially when you don't want to add in an additional JavaScript
library, such as jQuery. To follow along, I'd recommend using either
[JSFiddle](https://jsfiddle.net/) or [CodePen](https://codepen.io/)
so you can see your changes in real-time.

In this example, we'll use this HTML:

{% highlight html %}
<button class="button">Click Me!</button>
{% endhighlight %}

Here's how you can add an event listener:
{% highlight javascript %}
// This will be the click handler. When the user clicks the button, they
// will get an alert message displaying "Hello, world!".
const handleClick = () => {
  alert('Hello, world!');
};

// Get the button element.
const buttonElement = document.querySelector('.button');

// Add the event handler so it gets fired when the user clicks
// the button.
buttonElement.addEventListener('click', handleClick);

{% endhighlight %}

*Note: the style shown for the button uses arrow functions, which are part of [ES6](http://es6-features.org/#Constants).*

Now that you've added the JavaScript, if you click the button, you should see the
message "Hello, world!" displayed in an alert.
