---
layout: post
title:  "How to: Creating a custom block plugin definition in Drupal 8"
date:   2019-11-20 10:23:59 -0500
categories: tutorials drupal
---
Sometimes in Drupal we need to create a custom block plugin definition if there is no existing block
that supports our development needs. In this tutorial, I will be showing you how to create a custom block plugin.

The first thing we want to do is to make sure the `src/Plugin/Block` directory exists inside your module. If it does not exist, go ahead and create it.

{% highlight php %}
namespace Drupal\hello_world\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hello, World!' Block.
 *
 * @Block(
 *   id = "hello_world_block",
 *   admin_label = @Translation("Hello world block"),
 *   category = @Translation("Hello World"),
 * )
 */
class HelloWorldBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#markup' => $this->t('Hello, World!'),
    ];
  }

}
{% endhighlight %}

Once you've added that code, clear your Drupal cache and go to `/admin/structure/blocks` and your block should
show up now.
