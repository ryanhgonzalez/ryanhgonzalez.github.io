---
title: Git For Newbies
date: '2020-09-20T12:00:00.00Z'
description: 'Explaining Git to those who are new to software development.'
---

## Let's talk about version control, what is it?

Version control is a way to keep track of changes you make to your code or documents. It's like taking snapshots of your work over time so that you can go back to a previous point if something goes wrong or if you want to see how your work has progressed. Version control can also be helpful when working with others on a project. It allows multiple people to make changes to the same code or document without overwriting each other's work. Version control systems like Git provide a way to merge changes made by different people and resolve conflicts that might arise.

![Tree](./tree.jpg)

What if I didn't have version control? If that were the case, you might have to manually undo all the changes you made since the previous version, which could be very time-consuming and error-prone. With version control, you can simply go back to the previous version of the file and continue working from there.

## OK great, now what about Git? 

Git is a version control system that is widely used by software developers to keep track of changes to their code. It's a distributed system, which means that each person working on the project has their own copy of the code and can make changes independently.

### How does it do that?

Git stores changes in what are called 'commits'. Each commit represents a snapshot of the code at a particular point in time. When you make a commit, you're essentially saying 'this is the state of the code that I want to save'. Commits can be thought of as milestones in the development of the code.

> Git also uses the concept of 'branches' to allow for different versions of the code to exist simultaneously. A branch is a copy of the code that can be modified independently of the main 'master' branch. This can be useful when working on new features or fixing bugs, as it allows you to experiment without affecting the main codebase.

Finally, Git uses 'repositories' to store code and track changes. A repository is essentially a folder or directory that contains all the files for a project, as well as the history of changes made to those files. When you make a change to a file, Git tracks that change and creates a new commit in the repository.

## Using Git with Github

There are several tools available for working with Git, but one of the most popular is GitHub. GitHub provides a web-based interface for creating and managing Git repositories, as well as tools for collaborating with others and tracking changes to the code.

To get started with GitHub, you'll need to create an account on the website. Once you've done that, you can create a new repository by clicking on the 'New repository' button on the GitHub homepage. Give your repository a name, choose whether it should be public or private, and click 'Create repository'.

Once you've created your repository, you can start adding files to it. You can do this either by uploading files directly to GitHub or by using the Git command line interface. To use the command line interface, you'll need to install Git on your computer and then use a command like 'git clone' to create a local copy of the repository on your computer. You can then make changes to the files on your computer and use Git commands like 'git add', 'git commit', and 'git push' to update the repository on GitHub.

GitHub provides a number of tools for collaborating with others on a project. For example, you can invite other people to your repository and give them permission to make changes to the code. GitHub also provides a way to track changes to the code using 'pull requests'. A pull request is a way to propose changes to the code and get feedback from others before merging the changes into the main codebase.

Overall, GitHub provides a user-friendly interface for working with Git and collaborating with others on a project. By using GitHub, you can create, manage, and share Git repositories and track changes to the code over time.

## Setting up for first time use

To start using Git with GitHub, you'll first need to set up Git on your computer. Git is a command line tool, which means that you'll need to use a terminal or command prompt to interact with it.

The first step is to download and install Git from the Git website. Once you've installed Git, you can check that it's working by opening a terminal or command prompt and running the command 'git --version'. This should display the version of Git that you've installed.

Next, you'll need to configure Git with your name and email address. This information will be used to identify you as the author of commits that you make. To set your name and email address, run the following commands in the terminal, replacing 'Your Name' and 'your.email@example.com' with your own information:

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

Once you've configured Git, you can start using it to work with repositories on GitHub. To do this, you'll first need to clone a repository from GitHub onto your local computer. To clone a repository, go to the repository page on GitHub and click the 'Clone or download' button. This will give you a URL that you can use to clone the repository.

To clone the repository, open a terminal or command prompt and navigate to the directory where you want to store the repository. Then run the following command, replacing 'repository-url' with the URL that you copied from GitHub:

```bash
$ git clone repository-url
```

This will create a local copy of the repository on your computer. You can then make changes to the files in the repository and use Git commands like 'git add', 'git commit', and 'git push' to update the repository on GitHub.

Overall, setting up Git on your computer is a necessary first step for using Git with GitHub. By configuring Git and cloning repositories, you can start collaborating with others on projects and tracking changes to your code over time.

## Git basic commands

When working with Git and GitHub, it's important to understand the basic workflow for making changes to a repository and sharing those changes with others. The workflow typically involves the following steps:

> **Create a new branch:** Before making any changes to a repository, it's a good idea to create a new branch. A branch is a separate line of development that allows you to work on changes without affecting the main codebase. To create a new branch, you can use the 'git branch' command followed by the name of the new branch. For example:

```bash
$ git branch new-feature
```

This creates a new branch called 'new-feature' that you can use to work on your changes.

> **Make changes:** Once you've created a new branch, you can make changes to the files in the repository. You can do this using any text editor or IDE that you're comfortable with. Once you've made your changes, you'll need to stage them using the 'git add' command. For example:

```bash
$ git add file1.txt file2.txt
```

This stages the changes you've made to the files 'file1.txt' and 'file2.txt' for the next commit.

> **Commit changes:** Once you've staged your changes, you can commit them to the repository using the 'git commit' command. When you commit changes, you'll need to provide a commit message that describes the changes you've made. For example:

```bash
$ git commit -m "Add new feature to file1.txt"
```

This creates a new commit with the message "Add new feature to file1.txt" that includes the changes you've made.

> **Push changes:** Once you've committed your changes to your local repository, you'll need to push them to the remote repository on GitHub. To do this, use the 'git push' command followed by the name of the branch you're working on. For example:

```bash
$ git push origin new-feature
```

This pushes the changes you've made in the 'new-feature' branch to the 'origin' remote repository on GitHub.

> **Open a pull request:** After you've pushed your changes to GitHub, you can open a pull request to propose your changes for inclusion in the main codebase. A pull request is a way to start a discussion about your changes and get feedback from others before they're merged into the main codebase. To open a pull request, go to the repository page on GitHub and click the 'New pull request' button.

Overall, the workflow for making changes to a repository and sharing those changes with others involves creating a new branch, making changes, committing those changes, pushing them to the remote repository, and opening a pull request. By understanding this workflow, you can collaborate with others on projects and track changes to your code over time.

## Git advanced commands

Git provides several commands for collaborating with others on a repository and resolving conflicts that arise when multiple people are working on the same codebase. Here are some common Git commands for collaborating with others on GitHub:

1. **Forking a repository:** If you find a repository on GitHub that you want to contribute to, you can fork the repository to create a copy of it in your own GitHub account. To fork a repository, go to the repository page on GitHub and click the 'Fork' button in the top right corner. This creates a copy of the repository in your account that you can work on.

2. **Creating a pull request:** If you've made changes to a repository that you want to contribute back to the original repository, you can create a pull request. A pull request is a request to merge your changes into the original repository. To create a pull request, go to the repository page on GitHub and click the 'New pull request' button. You'll need to select the branch with your changes and the branch that you want to merge your changes into.

3. **Reviewing and merging pull requests:** If you're the owner of a repository or a collaborator with write access, you can review and merge pull requests. To do this, go to the pull request page on GitHub and review the changes that have been made. If you're satisfied with the changes, you can merge the pull request into the main codebase by clicking the 'Merge' button.

4. **Resolving conflicts:** When multiple people are working on the same codebase, conflicts can arise when two or more people make changes to the same file or lines of code. Git provides tools for resolving these conflicts and merging changes from multiple sources. To resolve conflicts, you'll need to use Git commands like 'git merge' and 'git rebase'. These commands allow you to merge changes from different branches and resolve conflicts that arise.

Overall, collaborating with others on GitHub involves forking repositories, creating and reviewing pull requests, and resolving conflicts that arise when multiple people are working on the same codebase. By using Git commands and workflows, you can work effectively with others and contribute to open source projects on GitHub.

## Conclusion

Overall, using Git can improve your workflow, help you collaborate more effectively with others, and make managing and sharing your code easier. With the 7 steps outlined in this article, you can get started with Git and take your coding projects to the next level.