---
layout: post
title:  Git Command Reference
date:   2020-01-12 17:30:00 -0500
categories: posts git
tags:
  - Git
  - Command Line
  - Version Control
---
Below is a reference of what I think are the most useful git commands which I frequently use:

`git init`

Initializes a new git repository.

`git add <file_path_to_add>`

Stage a file or directory to be committed. This command I use on a daily basis.

`git commit -m "Your commit message."`

Commit files that are staged.

`git status`

This one is probably the most frequently used git command. This command shows you a list of local file changes since the last commit. If a file is untracked or has been modified and has not been staged, it will display as red text. Otherwise, it will display as green text.

`git log`

Show a list of commits for the branch (or commit) checked out. Git refers to this as HEAD.

`git clone <remote_repository_url>`

This allows you to essentially download a Git repository from a remote server, such as GitHub.

`git checkout <resource>`

This command can do a few different things. It can do any of the following:
* Checkout a branch.
  Example: git checkout master
* Checkout a specific commit.
  Example: git checkout <hash>
* Revert a modified file that has been
  committed but not not staged.
  Example: git checkout /src/helloworld.js

`git commit --amend`

Modify an existing commit message.

`git stash save`

Stash all untracked changes so they can be reapplied later.

### Commands with potential side effects if you’re not careful

`git reset --hard`

This one you have to think twice about using. Basically, what it will do is revert all of your uncommitted changes.

`git checkout <commit_hash>; git push origin --force HEAD:master`

This command is what is called a “force push”, meaning it will allow you to undo commits to a specific branch. In the example command above, this takes the commit checked out and resets master to this commit.
