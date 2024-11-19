# Issue Tracking {#IssueTrack}

Base R uses [Bugzilla](https://bugs.r-project.org/) for issue tracking and reporting bugs. 

## How to contribute to issue tracking?

Contributors can support issue tracking in R by

1. [Reporting bugs](#ReportingBugs) or [submitting feature requests](#FeatureRequests) (bug reports filed under the "Wishlist" component in Bugzilla),

2. [Reviewing bug reports](https://contributor.r-project.org/rdevguide/ReviewBugs.html) to help close reports where no fix is needed or to help narrow down the problem and identify what needs to be fixed, or

3. [Proposing changes](https://contributor.r-project.org/rdevguide/FixBug.html#FixBug) to code or documentation that will close an issue. 

## How to get a Bugzilla account?  {#bugzilla-account}

Anyone can browse the bug reports on Bugzilla, but you will need an account to file a bug report, to comment on an existing bug report, or to submit a proposed fix in the form of patch file. 

To get a Bugzilla account send an e-mail to `bug-report-request@r-project.org` from the address you want to use as your Bugzilla login. Briefly explain why you want a Bugzilla account and a volunteer will add you to R's Bugzilla members. After having successfully logged in to Bugzilla, you are good to go.

### Navigating Bugzilla {#Bugzilla}

An image of the existing home page of Bugzilla is shared below:

![Screenshot of the existing home page of Bugzilla.](img/bugzilla.png)

On the home page of Bugzilla, there are various buttons and links. There are four square buttons called as:

![Screenshot of the four square buttons on the home page of Bugzilla.](img/squarebuttons.png)

1. [File a bug](https://bugs.r-project.org/enter_bug.cgi): You will have to log in to Bugzilla to file a bug using this button

2. [Search](https://bugs.r-project.org/query.cgi): When you click this button you will get a page with 'Simple Search' and 'Advanced Search' options. Either of the search options could be used depending on what you are looking for.

3. [Log In](https://bugs.r-project.org/?GoAheadAndLogIn=1): Provide the appropriate email address and password here to log in to Bugzilla.

4. [Documentation](https://bugzilla.readthedocs.io/en/latest/using/index.html): Provides a user guide for R\'s Bugzilla.

Several useful shortcuts are available from the landing page:

1. [Enter a new bug report](https://bugs.r-project.org/enter_bug.cgi)

2. [Show open bugs new-to-old](https://bugs.r-project.org/buglist.cgi?bug_file_loc_type=allwordssubstr&bug_status=NEW&bug_status=ASSIGNED&bug_status=CONFIRMED&bug_status=REOPENED&bug_status=UNCONFIRMED&bugidtype=include&chfieldto=Now&cmdtype=doit&emailassigned_to1=1&emailassigned_to2=1&emailcc2=1&emailreporter2=1&emailtype1=substring&emailtype2=substring&field0-0-0=noop&long_desc_type=substring&order=bugs.delta_ts%20desc&query_format=advanced&short_desc_type=allwordssubstr&type0-0-0=noop)

3. [Search existing bug reports](https://bugs.r-project.org/query.cgi)

A [quick search](https://bugs.r-project.org/page.cgi?id=quicksearch.html) bar is available on the home page where you can enter a bug number to search or some search terms.

![Screenshot of the quick search bar on the home page of Bugzilla.](img/quicksearch.png)

There is also a section for Common Queries on the home page which includes links to bugs reported and changed in the last 24 hours and last 7 days.

![Screenshot of the Common Queries section on the home page of Bugzilla.](img/commonquery.png)

## Searching for Bugs to Contribute to {#searching}

When presented with a long list of bugs, it can often be a bit demotivating when it's not clear where to start.
To help with this, you can use the [**Advanced Search**](https://bugs.r-project.org/query.cgi?format=advanced).

![Screenshot of Advanced Search page showing the following fields: Summary, Product, Component, Status, Resolution](img/bugzilla-adv-search-home.png)

This presents several fields that you can use to narrow down your search.
You can find out what a particular field is by clicking on the header, which will take you to that section in the [**Bug Fields Information Page**](https://bugs.r-project.org/page.cgi?id=fields.html).

The default fields are:

 - [Summary](https://bugs.r-project.org/page.cgi?id=fields.html#short_desc): a short description of the bug
 - [Product](https://bugs.r-project.org/page.cgi?id=fields.html#product): either R or RTools.
 - [Component](https://bugs.r-project.org/page.cgi?id=fields.html#component): A specific component of the R toolchain such as Graphics, Documentation, and Models
 - [Status](https://bugs.r-project.org/page.cgi?id=fields.html#bug_status): The status of open or closed bugs. This will always default to showing open bugs (UNCONFIRMED, CONFIRMED, and IN_PROGRESS)
 - [Resolution](https://bugs.r-project.org/page.cgi?id=fields.html#resolution): The resolution for closed bugs.

You can select multiple items for each field as well.
Both **Product** and **Component** are what you navigate through when you go to [**Browse Issues**](https://bugs.r-project.org/describecomponents.cgi).

Below that are further filters that can help you find bugs you might want to work on:

 Detailed Bug Information: Narrow results by the following fields
 : Comments, URL, Keywords, Deadline, Bug Numbers, Version, Severity, Priority, Hardware, OS 
 Search By People
 : Narrow results to a role (i.e. Assignee, Reporter, Commenter, etc.) a person has on a bug 
 Search By Change History
 : Narrow results to how fields have changed during a specific time period
 Custom Search
 : Didn't find what you're looking for above? This area allows for ANDs, ORs, and other more complex searches.

These will be detailed in the subsections below


### Detailed Bug Information {#searching-dbi}

You can use this section to narrow down your search further to filter by things like OS type, R version, Keywords, and Priority.

It can be helpful, for example, to search for bugs labelled with `HELPWANTED`, which indicates bugs that may be suitable for anyone to work on regardless of expertise.

![Screenshot of expanded Detailed Bug Information section showing the following fields: Comment, URL, Keywords (with HELPWANTED entered), Deadline, inclusion/exclusion of bug numbers, Version, Severity, Priority, Hardware, and OS](img/bugzilla-adv-search-detailed-bug-info.png)


### Search By People {#searching-sbp}

You can use this to narrow down your search to only include results of a specific person or up to three people who have participated in any component of the bug's discusson.

![Screenshot of expanded Search By People section showing three fields allowing you to enter a person's name who can be any of the bug assignee, the reporter, a CC list member, or a commenter](img/bugzilla-adv-search-search-by-people.png)


### Search By Change History {#searching-sbch}

Use this to search for bugs where any of the status fields has been changed (which, depending on the change, could indicate that someone from R-Core has given some attention to the bug).
This also provides a date range to narrow your search.

![Screenshot of expanded Search by Change History section showing three fields: where ANY of the fields (multi-select list), changed to, and between (dates in YYYY-MM-DD format)](img/bugzilla-adv-search-search-by-change-history.png)
