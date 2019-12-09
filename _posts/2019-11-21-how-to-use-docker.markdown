---
layout: tutorial
title:  "How to: Use Docker"
date:   2019-11-21 09:53:59 -0500
categories: tutorials docker
difficulty: Beginner
resources:
  - title: Docker Example Jekyll Source Code Exercise
    files:
        - url: /assets/files/docker-example-jekyll/docker-example-jekyll-start.tar.gz
          file_type: tar.gz
        - url: /assets/files/docker-example-jekyll/docker-example-jekyll-start.zip
          file_type: zip
  - title: Docker Example Jekyll Solution
    files:
        - url: /assets/files/docker-example-jekyll/docker-example-jekyll-solution.tar.gz
          file_type: tar.gz
        - url: /assets/files/docker-example-jekyll/docker-example-jekyll-solution.zip
          file_type: zip
---
Docker is a great tool for running your applications both locally and remote environments, including
Production. This tutorial will show you how you can use Docker for your
projects.

To get started, you will want to make sure you have Docker Desktop installed on your local machine.
To download it if you are on a Mac or Windows machine, click
[here](https://www.docker.com/products/docker-desktop) and follow the prompts to install Docker. This will
automatically install the `docker` and `docker-compose` commands for you, which are helpful for spinning
up Docker containers.

Once you have downloaded Docker Desktop, if you are on a Mac, you should see a Docker icon
(a whale with boxes on top of it) on the top menu bar. If you are using Windows, it should be on the bottom right.
If you see the Docker icon with nothing changing in the icon (you'll see what I mean as Docker is starting up), that means you are good to go.

Once you see the icon, open up your terminal and run the commands `docker -v` and `docker-compose -v`. If the
installation was successful, you should see versions for each command.

Now that we have the docker commands working, let's navigate to a directory and create a sample project.
In this example, we will create a `docker-compose.yml` file to spin up a Jekyll server on port 4000. In the directory
you want to add this project, enter the following commands:

{% highlight bash %}
# Create the directory to host our project.
mkdir docker-example-jekyll

# Navigate to our new directory to host the project.
cd docker-example-jekyll

# Create the docker-compose.yml file.
touch docker-compose.yml
{% endhighlight %}

Open up the docker-compose.yml file and paste in the following code and save:

{% highlight yaml %}
version: '2'

services:
  jekyll:
    image: jekyll/jekyll:latest
    command: jekyll serve --watch --force_polling --verbose
    ports:
      - 4000:4000
    volumes:
      - .:/srv/jekyll
{% endhighlight %}

Now that you have content in the docker-compose.yml file, it's time to attempt to spin
up the containers listed in that file. To do this, run the command `docker-compose up`.

The Docker containers should be running now. To verify this, open a new tab in your terminal
and enter `docker ps`. This will show all of your running Docker containers. Assuming your container
is running, you will see at least one container running.

Now point your browser to `http://localhost:4000` and if everything is working properly, you should
see a brand new Jekyll site, which is running on the Docker container you just spun up.
