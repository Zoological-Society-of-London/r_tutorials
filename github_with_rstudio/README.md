# Learning how to use GitHub

*This needs to be changed for RStudio*

Don't know *any* git or GitHub? Then this is for you! It's a very simple hands-on tutorial.

**Contents**

1. [Making changes](#a-making-changes)  
2. [Ignoring files](#b-ignoring-files)  
3. [Handling conflicts](#c-handling-conflicts)  
4. [Working with collaborators](#d-working-with-collaborators)
5. [Further](#further)

**Learning objectives**

* Store version-controlled projects online
* Work with collaborators on the same project

**Not covered**

* Command-line git tools
* Working with branches

**Required**

* GitHub GUI (install for [Windows](https://windows.github.com/) or [Mac](https://mac.github.com/))
* GitHub account (get an account [here](https://github.com/join))
* Good text-editor (e.g. [Atom](https://atom.io/), but notepad or similar will work)
* Internet connection

### Instructions

#### A. Making changes

Basic git usage is to have a repository online, make changes to a local copy on your machine, and then push those changes to the online version. This allows you to have a backup of all your code, have a history of all the steps you've taken for developing your code (which allows you to revert to previous versions if anything goes wrong) and work with collaborators.

>*Repo* -- or repository is a folder that is under version-control. It can be held online and across multiple computers, each copy is kept up-to-date by syncing. When under version-control, nothing is ever lost. All versions and deleted files are kept in the `.git/` folder and, in theory, everything is recoverable. A repo can contain both folders and files.

**1. Fork this repo**

Every repo on GitHub can be forked. Look for the fork button in the top right corner of this page to copy this repo to your own account.

<img src="https://help.github.com/assets/images/help/repository/fork_button.jpg" alt="Forking" style="width: 271px;"/>

>*Fork*  -- copy someone else's repo to your own account. Once its in your account, its yours to do what you want with (but make sure you read the licensing of a repo before forking, usually stored in a LICENSE.txt)

**2. Clone this repo to your local machine**

In your GitHub GUI, select the + sign in the top-left corner. And clone the recently forked repo. This will create a complete copy of the repository on your machine.

<img src="https://mac.github.com/images/screens/repositories.png" alt="Cloning" style="width: 271px;"/>

>*Clone*  -- copy a repo, to which you have access, to your own computer.

**3. Make a change**

With the repo on your machine, you can now make changes to it. Open the `script.md` file and adapt the poem to your liking or make any other change you like to the file e.g. replace sheep with goat:

```
## The goat

*The goat is alone.  
A single purple dot,  
in fields purple.*
```

**4. Commit and sync this repo**

Now you've made a change to `script.md`, you'll see the GUI tell you what changes you have made. Commit your change with a message e.g. "I made the poem better". Then click the sync button in the top-right corner and check your copy online: `https://github.com/[YOUR ACCOUNT NAME]/Teaching-github`. Also check out the history of `script.md` online or on your GUI.

<img src="https://mac.github.com/images/screens/sync.png" alt="Syncing" style="width: 271px;"/>

>*Commit*  -- A change with a message (e.g. corrected infinite loop in myscript.sh) that can then be pushed to GitHub. All changes made must be committed in order to sync them.

#### B. Ignoring files

Git will version control everything placed in the repo. This is not always helpful as you do not necessarily want all files and folders to be synced and not everything needs to be under version-control (e.g. automatically generated files). To control what is under version-control use the `.gitignore` file.

>*.gitignore* -- a text file that contains a list of files (or file patterns) that should be ignored.

**1. Open the .gitignore and ignore .csv files**

In your text editor, open the `.gitignore` file and add `*.csv` under 'Ignored files'. This tells git to ignore any file that ends with `.csv`. It is useful to ignore data files (like csv files) for multiple reasons: GitHub has a 1GB repo limit; it is pointless version controlling files that are automatically generated, this will make the `.git/` folder very large over time and slow-down simple git processes; large git repos take longer to perform simple tasks like cloning and syncing.

```
# Ignored files
.DS_Store
*.csv
```

Now you've edited a file, commit it with a message in your GUI e.g. 'Now ignoring csv files'

>*.DS_Store* -- in the .gitignore you will already find a file name. This is a Mac generated file, it is not part of the coding project and should be ignored. The file helps Macs perform spotlight searches.

**2. Add a .csv file to the repo**

Create a new file in the repo called 'test.csv'. Does the git detect it?

>*. prefix* -- in UNIX systems this makes a file invisible. If you cannot find your `.gitignore` open a terminal and use `ls -a` to see all files in a folder. You can also use a simple terminal text editor like nano to modify the file (`nano .gitignore`).

#### C. Handling conflicts

When multiple people work on a repo at once, conflicts can occur if more than one person has made a change to a file. These are termed merge conflicts and must be resolved before a repo can be synced.

**1. Creating a conflict**

You now have two copies of your repo, one on your machine and another on GitHub. Go to the GitHub repo and modify the `script.md`, use the pencil icon in the top-right. Edit the 'I expect this line to be a conflict' line to whatever you like. Commit your change directly on the GitHub version.

Now repeat what you did for the copy on your machine. Change the line you changed online to something different. Commit the change and try to sync the repo. This will create a 'merge-conflict' because your local copy has a committed change that conflicts with a committed change on the remote repo.

>To avoid conflicts it's best to commit and sync often; small and frequent is the aim of the game.

**2. Conflict resolution**

Git has recognised the conflict and has added to the file in conflict, something like this:

```
<<<<<<< HEAD
    [This is the text that is in your local copy]
=======
    [This is the test in the remote copy]
>>>>>>> master
```

It shows the lines in conflict and all you need to do is fix it manually. Either by merging the two lines or choosing one over the other.

Once you've corrected the file, commit the change. Git suggests a message for you, something like: 'Merge remote-tracking branch origin/master'.

#### D. Working with collaborators

Now you have a repo, you know how to commit changes to it and resolve conflicts, you just need to have some collaborators with whom to work.

* Go to the online repo
* Click on settings in the panel on the right
* Click on collaborators
* Add collaborators using their GitHub account names

<img src="https://help.github.com/assets/images/help/repository/repo-settings-collaborators.png" alt="Collaborators" style="width: 271px;"/>

Any collaborator can now sync ('push access') their changes to the repo online.

### Further

I've only introduced the GitHub GUI, with git command-line tools you're able to do a lot more. That said, 95% of what you use git and GitHub for is covered here (forking, cloning, committing and syncing). To learn more see the following links:

* [Git Documentation](https://git-scm.com/doc)
* [GitHub Guides](https://guides.github.com/)

GitHub is constantly growing and inventing new things, here are some useful things I know about:

* Pay for [private repos](https://github.com/pricing) that you and collaborators can see
* If you're a student you can apply for free privates repos through their [education package](https://education.github.com/pack)
* Highlight [issues](https://guides.github.com/features/issues/) with your code for others to see (and hopefully fix!)
* You can create [wikis](https://help.github.com/articles/about-github-wikis/) to explain your code
* Create [organisations](https://github.com/blog/674-introducing-organizations) that share repos which members of the group can push to
* Copy and paste snippets of code between people with [gist](https://gist.github.com/)
* Host [websites](https://pages.github.com/)
* GitHub supports [emoji](http://www.emoji-cheat-sheet.com/) (:sheep::cow::horse:)
