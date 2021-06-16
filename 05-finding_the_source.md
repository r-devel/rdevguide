# Finding the Source 

This chapter discusses how you can have an overview of the R codebase. For instance, where to find the implmentation of a base function written in R and where to find a primitive implementation written C. You may want to find the source code of a function just out of curiosity or maybe to gain more insight into what a particular function is actually doing. Whatever be the case, reading the source code will help you to learn a lot about any function.

## Finding R source code

1. Find the R function with the code of interest. You will always be able to print the top-level function (or use `View(function_name)` in RStudio). Looking at the code for the body of this function will reveal what you need to do next:

  * Can already see code of interest: stop here or skip to step 3 to find the corresponding file in the R sources.

  * Code of interest is in nested R function: go to step 2.

  * Top-level function is an S3 generic, identified by a call to `UseMethod()`. Use `methods(function_name)` to see available methods, then go to step 2.
  
  * Code of interest is in compiled code, identified by a call to `.C()`, `.Call()`, `.Fortran()`, `.External()`, or `.Internal()` and `.Primitive()`: go to section on compiled code.
 
2. Nested functions or S3 methods may not be exported by the package they are in. If this is the case, the simplest way to view the code is to use `getAnywhere()` or `getS3method()`. Now you can keep looking at nested R functions till you find the code of interest or hit a call to compiled code.

3. Find an R function in the R sources. Two options here:

  * Search on the internet: For R Core packages, search on the GitHub mirror (https://github.com/r-devel/r-svn); for recommended packages, use the CRAN mirror (https://github.com/cran) - this will link to the source on GitHub if available, e.g. https://github.com/cran/survival. Note that GitHub search ignores wildcard characters
  
```
 . , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ]
```

but this does not include `-` so you can search for a function or S3 method as follows:

```
"body <- function" extension:R
"quantile.ecdf <- function" extension:R
```

  * Search in the R sources using grep: The [Getting Started](#GetStart) chapter discusses how to download the R sources directly or from the svn repository. Now if the sources are in `~/R-devel`, you can search as follows:
  
```  
grep -R "body <- function" ~/R-devel/src
grep -R "quantile <- function" ~/R-devel/src/library
```

Note: The above procedure does not cover S4, R6 or RC generics or methods. Refer [accessing R source](https://github.com/jennybc/access-r-source) for further details.

## Finding C source code

1. If  `.Internal()` or `.Primitive()`, find entry point in `names.c` as described in the Jenny Bryan's post of [accessing R source](https://github.com/jennybc/access-r-source). For all other calls to compiled code, you can find the entry point from within R. For instance, the body of complete.cases() is

```
.External(C_compcases, ...)
```

`C_compcases` inherits from class "NativeSymbolInfo" and we can extract the name of the entry point via

```
stats:::C_compcases$name
```

We know that it is in the stats package as we see that when we print complete.cases or look at the help file. This shows us that the entry point is simply "compcases" and in fact that is the general convention in R code, that you simply remove the `C_` prefix (sometimes `.F_` for Fortran code) in the name of the object passed to the first argument of the call.

2. Once you have the entry point, search as for R code. In the case of searching on GitHub, restrict the search to files with the relevant extension

```
compcases extension:c
lowesw extension:f
```

similarly for grep

```
grep -R --include=*.c "compcases" ~/R-devel/src/library/
```

Note: 

1. Many editors (like RStudio, ESS) support [ctags](https://en.wikipedia.org/wiki/Ctags) for code browsing, making it easy to jump to definitions of functions. `R CMD rtags` can generate ctags for any R code (Credit: Deepayan Sarkar).

2. A more sophisticated system is called GNU GLOBAL, which also supports
finding all references (calls) to a function. 

3. GitHub has a code navigation feature via the library tree-sitter. Unfortunately, it does not have R support yet. An [R driver for tree-sitter](https://github.com/r-lib/tree-sitter-r) made by Jim Hester is available.

## See also

[Read the R source](https://blog.r-hub.io/2019/05/14/read-the-source/) blogpost.
