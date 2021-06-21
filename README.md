# A Guide to Contributing to R Core
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This guide is a work in progress, inspired by http://devguide.python.org/. It is currently deployed at https://forwards.github.io/rdevguide/.

## Background Resources

A list of existing resources on R core development that we can use for reference or that we should document in the guide is given in the [Wiki for this repo](https://github.com/forwards/rdevguide/wiki).

## Contributing

### Without write access

Corrections, suggestions and general improvements are welcome as [issue submissions](https://github.com/forwards/rdevguide/issues/new).

You can also suggest changes by editing the .Rmd files that are at the root of this repository and submitting a pull request. Please target your pull requests to the `master` branch.

### With write access

You can push directly to `master` for small fixes. Please use PRs to `master` for discussing larger updates - try to limit to one section or at least one chapter in each PR, so that changes are easier to review.

## Technical details

Deployment is done via Travis CI:

- whenever there's a push to master, the book is built and its content is put in the `docs` directory.

If you want to render the guide locally, you need to install `bookdown`. Then use 

```bookdown::render_book('index.Rmd', 'bookdown::gitbook')```

and the book will be generated in the `docs` folder. You can open the guide on the command line via `open docs/index.html`.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/forwards/rdevguide/blob/master/CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Acknowledgements

This book was started using Sean Kross' [minimal bookdown example](https://github.com/seankross/bookdown-start) as described on their [blog](http://seankross.com/2016/11/17/How-to-Start-a-Bookdown-Book.html).

This README borowed ideas from [ropensci/dev_guide](https://github.com/forwards/first-contributions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jakebolam.com"><img src="https://avatars.githubusercontent.com/u/3534236?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jake Bolam</b></sub></a><br /><a href="https://github.com/forwards/rdevguide/commits?author=jakebolam" title="Code">💻</a> <a href="#projectManagement-jakebolam" title="Project Management">📆</a> <a href="https://github.com/forwards/rdevguide/commits?author=jakebolam" title="Documentation">📖</a> <a href="#infra-jakebolam" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/forwards/rdevguide/commits?author=jakebolam" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!