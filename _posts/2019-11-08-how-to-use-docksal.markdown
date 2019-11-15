---
layout: post
title:  "How to: Use Docksal"
date:   2019-11-08 12:00:59 -0500
categories: docksal development
---
Docksal is a Docker container service for PHP projects such as Drupal or Laravel that provides tools like composer, npm, and drush. It is available for Windows, Mac, and Linux operating systems. Personally, I really like using it and I think you will too once you get it working. Below are the available content management systems that Docksal supports:

* Drupal
* WordPress
* Laravel
* Magento
* Grav

### Installation

You can find the installation instructions on [Docksal’s website](https://docksal.io/installation).

### Setting up your first project

Once you have installed docksal, navigate to the directory you want to add your project and in the Terminal, enter the command `fin project create`. The fin command is provided by Docksal when you install it. If Docksal is working correctly, you will a prompt to enter the machine name of your project (i.e. `foo_bar`). Type in what you’d like to call the project and hit Enter. You should then see a screen select what type of project you would like. In this example, we will go with option 1, which is Drupal 8. Once you enter 1, type `y` for yes to proceed and hit enter. Once you enter in `y`, Docksal will download all the Drupal code and will set up a new site for you by creating all the database files and [settings.php](https://api.drupal.org/api/drupal/sites%21default%21default.settings.php/8.2.x) file.

Once everything is completed, point your browser to [http://foo-bar.docksal](http://foo-bar.docksal) and you should see your new Drupal site.
