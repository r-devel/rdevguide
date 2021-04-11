# Getting Started 

These instructions cover how to install R in Windows. The tools required to build R and R packages in Windows are also discussed.

## General instructions

1. If you install the latest version or R-patched or R-devel, it will not over-write the previous installation(s) in your Windows machine.

2. R uses a ‘major.minor.patchlevel’ version numbering scheme. Accordingly there are three main releases of R available to install:

   * The official release (`r-release`), 

   * The patched release (`r-patched`), and

   * The development (`r-devel`) release. 

The `r-devel` is the next minor or eventually major release development version of R. Mostly, bug fixes are introduced in `r-patched`, while `r-devel` is for introducing new features.

## Installing R

1. The binary builds of R for Windows can be downloaded and installed from [here](https://cran.r-project.org/bin/windows/base/). Along with the link to the latest stable release, this page also contains links to the binary builds of r-patched and r-devel. 

2. Click on the download links to download an executable installer.

3. Select the language while installing, read the public license information, and select destination location to the start the installation. You will be prompted to select components at this stage: `User installation`, `32-bit User installation`, `64-bit User installation`, or `Custom installation`. The default option may be opted for the questions from this step onwards to complete the installation. 

## Building R and R packages

### What tools you need to build R from source on Windows?

1. [RTools](https://github.com/r-windows/docs/blob/master/faq.md#what-is-rtools) is the toolchain bundle that you can use to build R base and R packages containing compiled code, on Windows.

2. You also need a distribution of $\LaTeX$ installed for building R and checking packages. The `MiKTeX` distribution of $\LaTeX$ that is used on CRAN can be downloaded from https://miktex.org.

### How to setup `RTools`?

1. The latest version of `RTools` can be downloaded from https://cran.r-project.org/bin/windows/Rtools/ and run in the Windows-style installer. You will need to know if you have a 32-bit or 64-bit Windows machine (right-click `This PC` in Windows Explorer and check the properties if you are unsure).

2. Don't forget to add `RTools` to the path as documented on the download page.

### How to build R?

To build R for Windows using `RTools` follow the instructions in this [README](https://github.com/r-windows/r-base#readme) file. There are two options available to build R. One is the quick development build and the other option is the full installer build.

For development and testing, you need only the quick development build. The quick build avoids building the manuals, which are generally not needed for development and testing. 

However, even for the quick build there are some [default requirements](https://github.com/r-windows/r-base/blob/master/quick-build.sh). For instance, `MikTeX` is to be installed in `C:/Program Files` and you have 64-bit R. If necessary, these defaults can be customised. The installation path of `MikTex` can be customised [here](https://github.com/r-windows/r-base/blob/50a229fc76c50a5fb42c0daa367466aaf2318171/quick-build.sh#L13) whereas the Windows bit can be customised [here](https://github.com/r-windows/r-base/blob/50a229fc76c50a5fb42c0daa367466aaf2318171/quick-build.sh#L6).

If you are a maintainer of the Windows CRAN releases then, the full installer build is available for building the complete installer as it appears on CRAN. It will build both the 32-bit and 64-bit R, the pdf manuals, and the installer program. You will use this to create the binary builds and not when building R from the source yourself.

## See also

1. [CRAN official website](https://cran.r-project.org)

2. [R installation and administration manual](https://cran.r-project.org/doc/manuals/r-patched/R-admin.html)

3. [R for Windows FAQ](https://cran.r-project.org/bin/windows/base/rw-FAQ.html)

4. [Rtools40 manual for Windows](https://cran.r-project.org/bin/windows/Rtools/)

5. [R FAQ](https://cran.r-project.org/doc/FAQ/R-FAQ.html)
