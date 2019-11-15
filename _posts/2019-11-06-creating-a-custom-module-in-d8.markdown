---
layout: post
title:  "How to: Creating a custom module in Drupal 8"
date:   2019-11-06 12:00:59 -0500
categories: tutorials drupal
---
Creating a custom module in Drupal 8 can be as simple as creating only one file (even though that’s never a practical solution), so let’s get started.

The first thing you will need to do is open up your favorite IDE or text editor. Open up the Drupal code base in your IDE and navigate to the modules directory from the Drupal project root.

If there is no custom directory within modules, make sure to create it. This is the directory where you should save all of your custom modules.

Once you’ve verified that the directory exists, time to create the custom module. Let’s call the module hello_world, so let’s create a directory within custom called hello_world. When creating modules, if they have more than one word, the best practice in Drupal is to use [snake casing](https://en.wikipedia.org/wiki/Snake_case).

Once you have created the custom directory, we need to add what Drupal calls an `info` file. This file lets Drupal know information about the module, such as the module display name, the description, what version of Drupal to use, and any dependencies the module may have. To create the info file, create a new file called `hello_world.info.yml`. In that file, add the following code:

{% highlight yaml %}
name: Hello World
description: This is a simple module which displays the text "Hello, world!".
type: module
core: 8.x
package: Examples
{% endhighlight %}


Now that we’ve done that, if you go to `/admin/modules`, you should see the module show up on that page and you can install it. It should look like the screenshot shown below:

![Hello World module page](/assets/img/helloWorldModulePage.PNG)

Great, we’ve added the custom module, so let’s now let’s create a page called "Hello, World!". We will need to create a controller class to do this. In the hello_world module, create a directory called `src/Controller`. Inside the controller directory, create a PHP class called `HelloWorldController.php`. Your controller class should look like this:

{% highlight php %}
<?php
 
namespace Drupal\hello_world\Controller;
 
use Drupal\Core\Controller\ControllerBase;
 
class HelloWorldController extends ControllerBase {
 
    public function get() {
      // The t() method is provided by Drupal that
      // indicates that this text is translatable.
      // It is also used to sanitize text to prevent
      // cross-site scripting (XSS) attacks.
      // This returns what Drupal calls a render array.
      // See: https://www.drupal.org/docs/8/api/render-api/render-arrays
      return ['#markup' => $this->t('Hello, world!')];
    }
}
{% endhighlight %}

Once you have created that file, you will need to add a file called `hello_world.routing.yml`. In that file, add the following lines of code:

{% highlight yaml %}
hello_world.get:
  path: '/hello-world'
  defaults:
    _controller: '\Drupal\hello_world\Controller\HelloWorldController::get'
    _title: 'Hello, World!'
  requirements:
    _permission: 'access content'
{% endhighlight %}

Now we need to rebuild Drupal cache. If you are using Drush, run the command drush cr to rebuild the Drupal cache. Once that’s done, if you point your browser to `/hello-world`, you should see the text "Hello, world!" appear and voila!

![Hello World display page](/assets/img/helloWorldDisplayPage.PNG)
