---
layout: post
title:  "Troubleshooting: What to do if you receive an error in Docker Desktop like I did"
date:   2019-11-22 10:39:00 -0500
categories: troubleshooting docker
---
If you receive an error that looks like this [Unable to create: The running command stopped because the preference variable "ErrorActionPreference"](https://github.com/docker/for-win/issues/1538) on Docker Desktop for Windows 10,
it may be because you need a command to compile a mof file. What you will need to do is open your start menu, search
for "Command Prompt", right click "Run as Administrator", and paste in the following command:

`MOFCOMP %SYSTEMROOT%\System32\WindowsVirtualization.V2.mof`

Once this command has run, reset Docker Desktop and you should be able to start Docker Desktop without any errors now.
