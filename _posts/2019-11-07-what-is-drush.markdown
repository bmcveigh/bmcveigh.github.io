---
layout: post
title:  "What is: Drush"
date:   2019-11-07 17:59:00 -0500
categories: tutorials drupal
---
Before we get started, let me describe what drush is: drush (short for Drupal shell) is a popular command line tool designed specifically for Drupal. It can do nearly anything related to the Drupal site like install/uninstall modules, rebuild cache, connect to the database, install a Drupal site from scratch, etc.

### Installation

There are multiple ways to install Drush; the way I like to install Drush is actually not by installing it at all. I use Docksal (based on Docker) to run Drush commands, but you can also install it using [Composer](https://getcomposer.org/), which is a PHP tool used to manage dependencies.

Some commands you can run:

| Command                  | Description                      |
|--------------------------|----------------------------------|
| `drush cr`               | Rebuilds Drupal cache.           |
| `drush en <module_name>` | Installs a module.               |
| `drush pmu <module_name` | Uninstall a module.              |
| `drush uli`              | Generates a one-time login link. |
| `drush si`               | Installs a new Drupal site.      |

The commands I listed above are just the tip of the iceberg. There are a lot more commands available. If you'd like to see a more detailed list of commands, you can visit [drushcommands.com](https://drushcommands.com/) to see more details.