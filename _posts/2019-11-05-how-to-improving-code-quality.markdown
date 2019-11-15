---
layout: post
title:  "How to: Improving Code Quality"
date:   2019-11-05 12:00:59 -0500
categories: tutorials development
---
I wanted to share my experience on some concepts with explanations on how to improve code quality, which can be challenging when there is a tight deadline. This applies to software development in general, not just web development. Below are some concepts I found based on my experience with an explanation for each one:

### Choose the simplest, most robust approach.

Often times, applications that are more complicated have more bugs and are less user-friendly. If you find that your approach is too complicated and you are over-engineering your solution, revert your changes and start over again.

### Thoroughly test your solution.

Make sure to thoroughly test your software before you hand it off to the tech lead/QA for review. Also, make sure to test for regression to make sure you do not introduce new bugs. Also, writing unit and functional tests is also good to do.

### Use git for all of your custom code changes.

Using [git](https://git-scm.com/) to develop software is not only good practice, but it is also useful because it allows you to create new branches and revert your changes.

Consistently following all of these concepts may not always be easy, but following these concepts will hopefully make your projects run more smoothly.
