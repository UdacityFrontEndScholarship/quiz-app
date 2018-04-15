# Contributing to SkillUP

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the SkillUP Quiz project which is hosted on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-don't-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)



* [Github](#github)
* [Bootstrap-4](#bootstrap-4)

* [React](#react)
  [Design Descisions](#design-decisions)
  [How Can I Contribute?](#how-can-i-contribute)
* [Reporting Bugs](#reporting-bugs)
* [Pull Requests](#pull-requests)
* [Project Setup Instructions](#project-setup-instructions)
* [Styleguides](#styleguides)
* [Git Commit Messages](#git-commit-messages)
* [Code Styleguide](#code-styleguide)
  [Additional Notes](#additional-notes)

## Code of Conduct

This project and everyone participating in it is/are maintained by the SkillUP Udacity members. By participating, you are expected to uphold this code. In case, you need to contact us, tag anyone of us in the Udacity Frontend Scholars Slack channel, below are our slack handles

* @ezioda004
* @Sunny Puri
* @Vanisha
* @kadumuri
* @Parul
* @lalitmee
* @Fayaz

## I don't want to read this whole thing, I just have a question!!!

> **Note:** Please don't file an issue to ask a question.You'll get faster results by just contacting us on our slack handles above.

## What should I know before I get started?

### Github

This is the key thing you need to know before hopping onboard, we strongly suggest you go through the below resources if you are not aware of Git & Github principles.

* [Intro to Git & Github for beginners](https://medium.com/@abhishekj/an-intro-to-git-and-github-1a0e2c7e3a2f)
* [How to contribute to Open Source](https://github.com/freeCodeCamp/how-to-contribute-to-open-source/blob/master/CONTRIBUTING.md)

### Bootstrap 4

We will be using Bootstrap 4 as the core CSS framework for this project.

* [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
* [Bootstrap 4 alternative documentation](https://www.w3schools.com/bootstrap4/default.asp)

### React

React JS for the behavior of this site

* [React](https://reactjs.org/)
* [React Tutorial](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA)

## Design Decisions

We will follow a straight forward design approach. Its good, if you go through the current code by either forking or cloning the repository. We strongly suggest you to stick with the current design guidelines. We will be updating this guide with more detailed guidelines & boilerplate code, if possible.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for SkillUP. Following these guidelines helps maintainers and the community members in understanding your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](#bug-issue-template), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems similar to the one you're experiencing, you should open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* Make sure it is actually a bug before you create an issue
* Note down the trail, on how the bug was found.
* Do a small search and check if this issue has already been reported.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined what exactly your bug is related to, create an issue on the repository and provide the following information by filling in [the template](#bug-issue-template).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as much detail as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets on the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**

* **Are you able to reproduce the issue?** If not, provide details on how often the problem occurs and under which conditions.

#### Bug Issue Template

_Will be provided shortly_

### Pull Requests

A pull request is a way to contribute to our project, you clone our project, make changes locally and submit a pull request.

#### Before making a Pull request

* Fill in pull request template (Will be provided shortly)
* Include screen shots in your pull request whenever possible.
* Follow our code guidelines.

Here are links and resources to get you started on Pull requests.

* [https://medium.com/server-side-swift-and-more/a-simple-guide-to-creating-a-github-pull-request-48fee0afd015](https://medium.com/server-side-swift-and-more/a-simple-guide-to-creating-a-github-pull-request-48fee0afd015)
* [https://github.com/freeCodeCamp/how-to-contribute-to-open-source/blob/master/CONTRIBUTING.md](https://github.com/freeCodeCamp/how-to-contribute-to-open-source/blob/master/CONTRIBUTING.md)

#### Pull Request Template

Most important part of the pull requests are the messages which you put as the commit message. That message is there for others to give a summary of what changes you did in the pull request. So we have a protocol for that messages.

We would like you to put your commit messages in the form which is described below:

```
Title of the pull request(if you want, you can include file name to be more specific)

Summary of the changes(you should mention the changes which you did in the pull request)

Fixes or Closes <url of the issue>(Fixes and closes will be chosen by you according to the type of issue)
```

Here is an example of a good commit message, for your convenience:

```
configure.py: Fix docstring typo

This fixes the typo and changes
it from wether --> whether.

Fixes https://github.com/coala/coala/issues/4018
```

* configure.py: Fix docstring typo: Describe the change in
  maximum of 60 characters.
* This fixes.. ..whether.: Describe the reasoning behind your changes
  in a maximum of 80 characters per line.
* Closes https://github.com/coala/coala/issues/7971: Mention the URL
  of the issue it closes or fixes.

Here is an example of the bad commit:

```
Fixing docstring typo in the which was in the spelling of whether.
```

* This will take a lot of time for code maintainers to investigate the change and to locate the files in which changes were made.

_You can see that the commit is more readable and understandable in the good commit example._

**So we would request you to follow our commit guidelines.** By following this standard we want to have maintainability of the code.

## Project Setup Instructions

The first step to contributing to the code base is to set up your project.

### Set up Git

#### Install Git

##### For Linux Systems:

Install git via your native package management system: ::

    $ yum install git

or::

    $ sudo apt-get install git

#### Windows and Mac OS X:

Download GitHub's software, which will install git with a nice GUI.

#### Configure Git Settings

To set user-name and email (replace them with your own)::

    $ git config user.name "Firstname Lastname"
    $ git config user.email "your_email@youremail.com"

The name should be your actual name, not your GitHub username.

#### Create Github Account

Now you should have a GitHub account for contributing to the code base. If you don't have one already, then sign up [here](https://github.com/signup/free)

### Fork the Project

Create your own _fork_ of the project (if you have not yet). Go to the project repository:

* https://github.com/UdacityFrontEndScholarship/quiz-app

and click the “Fork” button.

Now, you have your own repository for the project. If your GitHub username is `nickname` then the address of the forked project will look something like:

* https://github.com/nickname/quiz-app

### Clone the Project

On your computer browse to where you would like to keep the project, and clone (download) the latest
code from the original repository::

    $ git clone https://github.com/UdacityFrontEndScholarship/quiz-app.git
    $ cd quiz-app

[![git_clone_npm_install.jpg](https://s26.postimg.cc/rt0m60kix/git_clone_npm_install.jpg)](https://postimg.cc/image/4esmu32lh/)


### Install the Dependencies Required by the Project Locally

After `git clone` has finished cloning, enter the `quiz-app` directory that was created by using the following command:
(If you are already in `quiz-app` directory then skip this step).

    $ cd quiz-app

#### Installing Dependencies

Now to install the dependencies on your local machine, insert the following code and press enter:

    $ npm install    

This might take a while depending on your internet connection. Give it some time to install all the dependencies.

After all the dependencies have been installed successfully, you will see the message as in the image above that ends with:
`added (some number) packages in (some number)s`

Now you are all set to work on the project locally. To open the project development environment, run:

    $ npm start

[![npm_start.jpg](https://s26.postimg.cc/i8gzj4nh5/npm_start.jpg)](https://postimg.cc/image/4esmu2uvp/)

Now just wait a few seconds for the compilation to finish and it will automatically create a local server on your machine and also open up the `index.html` of the project in your default browser. This also has features like **live reload** so it will automatically refresh the page when you save your work. **Just make sure to save all of the files you might have edited or you will get compiling errors.**

You can **right click** on the `quiz-app` folder and open it in your favorite text editor to start contributing :)

## How to Sync your Fork with the Main Project Repository (Upstream)?

### Configuring a remote for a fork

Before you can sync, you will first need to add the source of the upstream repository where your local project can check for new commits/changes to the original project. To do this, open Git Bash from your `quiz-app` folder and run:

    $ git remote add upstream (link to the original project/upstream without brackets)

    In this case:

    $ git remote add upstream https://github.com/UdacityFrontEndScholarship/quiz-app.git

[![remote_add_upstream.jpg](https://s26.postimg.cc/hk3jma71l/remote_add_upstream.jpg)](https://postimg.cc/image/ke6ozq97p/)

If you run into any problems, please check this link below:

  * https://help.github.com/articles/configuring-a-remote-for-a-fork/

### Syncing a fork

Your fork is now ready to sync with the upstream repository for any new commits/changes. Now to actually sync the fork, open Git Bash from your local project directory and run:

    git fetch upstream

[![git_fetch_upstream.jpg](https://s26.postimg.cc/bj5up7s55/git_fetch_upstream.jpg)](https://postimg.cc/image/jonwndgdx/)

Then run this to check out your fork's local master branch:

    git checkout master

Now merge changes from the upstream repository into your master branch:

    git merge upstream/master

[![git_merge_upstream_master.jpg](https://s26.postimg.cc/wsth07lc9/git_merge_upstream_master.jpg)](https://postimg.cc/image/55grm405h/)

You might see file changes, insertions and deletions. But if your local branch did not have any unique commits, it will instead perform a **fast-forward** as in the image.

You may also follow the GitHub guide below for the same process.

  * https://help.github.com/articles/syncing-a-fork/

Now you will need to `push` these changes to your GitHub fork by running:

    git push (your fork's .git link without brackets)

[![git_pushto_fork.jpg](https://s26.postimg.cc/qgebqj2w9/git_pushto_fork.jpg)](https://postimg.cc/image/tn8va5nc5/)

Here is the GitHub guide for this if you would like to follow that instead:

  * https://help.github.com/articles/pushing-to-a-remote/

First you saved (fetched) the latest changes/commits from the original/upstream repository to your local project and then synced (pushed) those local changes to your forked repository on GitHub.

## Styleguides

### Git Commit Messages

* Proper & meaningful commit messages are the best way to keep code maintainable and organized.
* Always write a commit message, even if it's for small change.

### Code Styleguide

_To be Updated shortly_

## Additional Notes

We will be available in case if you are stuck somewhere, feel free to reach out to us if any assistance is needed.

Happy coding!

