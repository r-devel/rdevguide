# Testing Pre-release R Versions {#TestRVer}

This chapter is inspired from the blog on [testing R before release](https://developer.r-project.org/Blog/public/2021/04/28/r-can-use-your-help-testing-r-before-release/index.html) and discusses how you can help with testing of pre-release versions of R. 

## Where to test?

Whenever possible use a fresh package library for testing, even better would be to use [virtual machines](#VM) for the testing. This would ensure that you do not damage your existing R installation.

### Virtual machine {#VM}

A free Windows 10 virtual machine is provided by Microsoft (with a 90-day limit) for building, testing, and checking R packages and R itself. Package maintainers who work on Linux and MacOS can use it to test their packages on Windows. Read the [instructions](https://svn.r-project.org/R-dev-web/trunk/WindowsBuilds/winutf8/ucrt3/vm.html) on how to automatically set up the machine to check R packages. Tomas Kalibera describes the details of using virtual machine in the blog [Virtual Windows machine for checking R packages](https://developer.r-project.org/Blog/public/2021/03/18/virtual-windows-machine-for-checking-r-packages/index.html). 

## What can you test?

You can test:

  * Your own programs.
  
  * Your own workflows.
  
  * Your special ways of installing or setting up R.
  
  * Things that interact with external libraries.
  
  * Interactive R packages.
  
Details of performing testing on various operating systems:

  * [Windows](https://developer.r-project.org/Blog/public/2021/04/28/r-can-use-your-help-testing-r-before-release/index.html#on-windows)
  
  * [macOS](https://developer.r-project.org/Blog/public/2021/04/28/r-can-use-your-help-testing-r-before-release/index.html#on-macos)
  
  * [Linux](https://developer.r-project.org/Blog/public/2021/04/28/r-can-use-your-help-testing-r-before-release/index.html#on-linux)
  
  * [Solaris](https://developer.r-project.org/Blog/public/2021/04/28/r-can-use-your-help-testing-r-before-release/index.html#on-solaris)
  
## Writing tests for R

Writing tests for R is much like writing tests for your own code. Tests need to be thorough, fast, isolated, consistently repeatable, and as simple as possible. 

When you are adding tests to an existing test file, it is also recommended that you study the other tests in that file; it will teach you which precautions you have to take to make your tests robust and portable. We try to have tests both for normal behaviour and for error conditions. Tests live in the `tests` directory.

## Benchmarks

Benchmarking is useful to test that a change does not degrade performance.
