---
layout: post
title:  "Why CMS-specific premium themes are more expensive"
date:   2019-12-20 10:40:00 -0500
categories: theming
tags:
 - Theming
 - Drupal
 - WordPress
 - Joomla
 - Front-end Development
 - HTML
 - CSS
---
Have you ever noticed that CMS-specific paid themes are more expensive than regular
HTML themes (particularly when browsing a site like [ThemeForest](https://themeforest.net/))?
Whether you realized it or not, there are some good reasons why I personally
think this is speaking from past and current experience. Here are four reasons why
I think this is:

### Reason 1: There is a potentially steep learning curve.

Theming on a specific CMS can have a steep learning curve, particularly with Drupal. Why?
Well, in the case of Drupal, a front-end developer may have to know some PHP, since Drupal
tends to use what are called [preprocess functions](https://www.drupal.org/docs/8/theming-drupal-8/modifying-attributes-in-a-theme-file). These functions allow you to pass additional data or modify
existing data into a template. In addition to preprocess functions, the front-end developer developing
the theme would also need to have an understanding [Twig](https://twig.symfony.com/) and its syntax,
which has a learning curve, although not nearly as steep as learning Drupal itself, especially if the
FED is used to PHP templates instead of Twig templates.

I know other CMS's such as [WordPress](https://wordpress.org/) or [Joomla](https://www.joomla.org/) have their own learning curve as well, but I am not as familiar with those CMS's as far as code goes so I really cannot say anything more about the learning curve. 

### Reason 2: It is more difficult to manipulate the DOM.

Often, front-end developers need to change the existing HTML markup to style an element a certain way.
For example, the published date may be placed in the wrong location and the FED needs to put it below
the title (let's say request from the customer). This is easy to do with static HTML, but is not always easy when developing a CMS-specific theme.

### Reason 3: Premium themes frequently look more modern and therefore more take longer to develop.

> Time is money and money is time.

This is most true especially with a CMS. Even before development starts, just creating a catchy design
that is UX-appealing takes time. Also, testing to make sure your theme is
[mobile responsive](https://en.wikipedia.org/wiki/Responsive_web_design) takes additional time to develop
as well.

### Reason 4: It takes more time to develop.

This one is a side-effect of reasons one and two. The potentially steep learning curve in addition to the potential difficulty manipulating the DOM make it take longer to develop than a static HTML theme.
