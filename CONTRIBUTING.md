# Contributing to SkillUP

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the SkillUP Quiz project which is hosted on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
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

## I don't want to read this whole thing I just have a question!!!

> **Note:** Please don't file an issue to ask a question.You'll get faster results by just contacting us on our slack handles above.

## What should I know before I get started?

### Github

This is the key thing you need to know before hopping on board, we strongly suggest you go through the below resources if you are not aware of Git & Github principles.

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

We will follow a straight forward design language. Its good, if you go through the current code by either forking or cloning the repository. We strongly suggest to stick with the current design guidelines. We will be updating this guide with more detailed guidelines & boilerplate code if possible.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for SkillUP. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](#bug-issue-template), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* Make sure it is actually a bug before you create a issue
* Note down the trail, on how the bug occurred.
* Do a small search and check if this issue has already been reported.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined what exactly your bug is related to, create an issue on the repository and provide the following information by filling in [the template](#bug-issue-template).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**

* **Are you able to reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

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
Title of the pull request(if you want, you can include file name to be more specific in this)

summary of the changes(you should mention the changes which you did in the pull request)

Fixes or Closes <url of the issue>(Fixes and closes will be chosen by you according to the type of issue)
```

Here is an example of the good commit for your convenience:

```
configure.py: Fix docstring typo

This fixes the typo and changes
it from wether --> whether.

Fixes https://github.com/coala/coala/issues/4018
```

* configure.py: Fix docstring typo: Describe the change in
  maximum of 60 characters.
* This fixes.. ..whether.: Describe the reasoning of your changes
  in maximum of 80 characters per line.
* Closes https://github.com/coala/coala/issues/7971: Mention the URL
  of the issue it closes or fixes.

Here is an example of the bad commit:

```
Fixing docstring typo in the which was in spelling of whether.
```

* This will take a lot of time for code maintainers to investiage that where was the change to have a look on the changes you made.

_You can see that the commit is more readable and understandable in the good commit example._

**So we would request you to follow our commit guidelines.** By following this standard we want to have maintability of the code.

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

Now you should have a github account for contributing to the code base. If you don't have one already, then sign up [here](https://github.com/signup/free)

### Fork the Project

Create your own _fork_ of the project (if you have not yet). Go to the project repository:

* https://github.com/UdacityFrontEndScholarship/quiz-app

and click the “Fork” button.

Now you have your own repository for the project. If your username in GitHub is `nickname` then the address of the forked project will look something like:

* https://github.com/nickname/quiz-app

### Clone the Project

On your computer browse to where you would like to keep the project, and clone (download) the latest
code from the original repository::

    $ git clone https://github.com/UdacityFrontEndScholarship/quiz-app.git
    $ cd quiz-app

## Styleguides

### Git Commit Messages

* Proper & meaningful commit messages are the best way to keep code and organized.
* Always write a commit message, even if its for small change.

### Code Styleguide

_To be Updated shortly_

## Additional Notes

We will be available in case if you are stuck somewhere, feel free to reach out to us, if any assistance is needed.

Happy coding!
