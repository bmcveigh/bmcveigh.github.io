---
layout: tutorial
title:  "How to: Create a React component"
date:   2019-11-21 09:54:59 -0500
categories: tutorials javascript react
description: In this tutorial, we will take a look at creating a new React component using JSX.
difficulty: Beginner
prerequisites:
- title: 'How To: Use Create React App'
  url: http://127.0.0.1:4001/tutorials/javascript/react/2019/11/21/how-to-use-create-react-app.html
tools_used:
- title: 'NodeJS'
  url: '#'
- title: 'NPM'
  url: '#'
---
React has a concept called components. Components are basically objects that represent something.
For example, we could have an image component or a table component. To build our component, we will
use create-react-app. If you are not familiar with create-react-app, see the prerequisite listed above.

In this tutorial, we will be creating a component called **HelloWorld**. To get started, let's create a
directory within src called components and another directory in components called HelloWorld.

Inside the HelloWorld directory, add a file called HelloWorld.js and paste in the following code:

{% highlight javascript %}
const HelloWorld = () => (
    <div>Hello, world!</div>
);

export default HelloWorld;
{% endhighlight %}

Now, inside App.js within your src directory, make sure to import the HelloWorld.js file and add
`<HelloWorld />` in between the opening and closing `<App />` tags.

Once you've done that, run `npm start` and you should now see the text **Hello, world!** on the page.
