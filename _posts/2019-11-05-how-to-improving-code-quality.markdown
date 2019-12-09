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

### When you have repeated code, use either a method or a template.

Try to use functions or HTML templates when you have code or markup that repeats itself. Doing this will make your
code significantly easier to manage, and will therefore produce less bugs. For instance, in the case of reusable
templates, instead of this:

{% highlight html %}
<div class="row">
    <div class="col">
        Big fox
    </div>
    <div class="col">
        Small fox
    </div>
    <div class="col">
        Big dog
    </div>
    <div class="col">
        Small dog
    </div>
    <div class="col">
        Big sheep
    </div>
    <div class="col">
        Small sheep
    </div>
     <div class="col">
        You
    </div>
     <div class="col">
        Get
    </div>
     <div class="col">
        The
    </div>
     <div class="col">
        Idea
    </div>
</div>
{% endhighlight %}

you can have this:

**HTML template**
{% highlight html %}
{% raw %}
    <div class="row">
        <div class="col">
            {% animal.description %}
        </div>
    </div>
{% endraw %}
{% endhighlight %}

**Implementation**
{% highlight html %}
{% raw %}
    <div class="row">
        {% for animal in animals %}
            <div class="col">
                {% animal.description %}
            </div>
        {% endfor %}
    </div>
{% endraw %}
{% endhighlight %}

### Conclusion

Consistently following all of these concepts may not always be easy, but following these concepts will hopefully make your projects run more smoothly.
