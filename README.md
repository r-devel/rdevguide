[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

# A Guide for Contributing to R Core
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-19-orange.svg?style=flat-square)](#contributors-)
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

## Editing notes

* Images must be included in the source, not provided as URLs, for the PDF book to compile.
* Images should have alt text for accessibility - note this is shown as a caption in the EPUB version.

## Technical details

Deployment is done via Travis CI:

- whenever there's a push to master, the book is built and its content is put in the `docs` directory.

If you want to render the guide locally, you need to install `bookdown`. Then use 

```bookdown::render_book('index.Rmd', 'bookdown::gitbook')```

and the book will be generated in the `docs` folder. You can open the guide on the command line via `open docs/index.html`. To preview the PDF or EPUB versions locally, replace `'bookdown::gitbook'` with `'bookdown::pdf_book'` or `'bookdown::epub_book`' as appropriate.

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
  <tbody>
    <tr>
      <td align="center"><a href="https://www.heatherturner.net/"><img src="https://avatars.githubusercontent.com/u/3343008?v=4?s=100" width="100px;" alt="Heather Turner"/><br /><sub><b>Heather Turner</b></sub></a><br /><a href="#content-hturner" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=hturner" title="Code">💻</a> <a href="#maintenance-hturner" title="Maintenance">🚧</a> <a href="#mentoring-hturner" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-hturner" title="Project Management">📆</a> <a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Ahturner" title="Reviewed Pull Requests">👀</a> <a href="#fundingFinding-hturner" title="Funding Finding">🔍</a> <a href="#question-hturner" title="Answering Questions">💬</a> <a href="#eventOrganizing-hturner" title="Event Organizing">📋</a> <a href="#talk-hturner" title="Talks">📢</a></td>
      <td align="center"><a href="https://saranjeetkaur.github.io/About-Me/"><img src="https://avatars.githubusercontent.com/u/28556616?v=4?s=100" width="100px;" alt="Saranjeet Kaur"/><br /><sub><b>Saranjeet Kaur</b></sub></a><br /><a href="#content-SaranjeetKaur" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=SaranjeetKaur" title="Documentation">📖</a> <a href="#ideas-SaranjeetKaur" title="Ideas, Planning, & Feedback">🤔</a> <a href="#fundingFinding-SaranjeetKaur" title="Funding Finding">🔍</a> <a href="#question-SaranjeetKaur" title="Answering Questions">💬</a> <a href="#eventOrganizing-SaranjeetKaur" title="Event Organizing">📋</a> <a href="#talk-SaranjeetKaur" title="Talks">📢</a> <a href="#video-SaranjeetKaur" title="Videos">📹</a> <a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3ASaranjeetKaur" title="Reviewed Pull Requests">👀</a> <a href="#example-SaranjeetKaur" title="Examples">💡</a> <a href="#research-SaranjeetKaur" title="Research">🔬</a></td>
      <td align="center"><a href="http://maya.rbind.io"><img src="https://avatars.githubusercontent.com/u/6053906?v=4?s=100" width="100px;" alt="Maya Gans"/><br /><sub><b>Maya Gans</b></sub></a><br /><a href="#infra-MayaGans" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center"><a href="https://www.willingconsulting.com"><img src="https://avatars.githubusercontent.com/u/2680980?v=4?s=100" width="100px;" alt="Carol Willing"/><br /><sub><b>Carol Willing</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Awillingc" title="Reviewed Pull Requests">👀</a></td>
      <td align="center"><a href="http://llrs.dev"><img src="https://avatars.githubusercontent.com/u/6818218?v=4?s=100" width="100px;" alt="Lluís"/><br /><sub><b>Lluís</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Allrs" title="Reviewed Pull Requests">👀</a> <a href="#content-llrs" title="Content">🖋</a> <a href="#question-llrs" title="Answering Questions">💬</a> <a href="#research-llrs" title="Research">🔬</a> <a href="https://github.com/r-devel/rdevguide/commits?author=llrs" title="Documentation">📖</a> <a href="#example-llrs" title="Examples">💡</a></td>
      <td align="center"><a href="http://tdhock.github.io"><img src="https://avatars.githubusercontent.com/u/932850?v=4?s=100" width="100px;" alt="Toby Dylan Hocking"/><br /><sub><b>Toby Dylan Hocking</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Atdhock" title="Reviewed Pull Requests">👀</a> <a href="#example-tdhock" title="Examples">💡</a> <a href="#research-tdhock" title="Research">🔬</a> <a href="#question-tdhock" title="Answering Questions">💬</a></td>
      <td align="center"><a href="https://github.com/bettinagruen"><img src="https://avatars.githubusercontent.com/u/3341603?v=4?s=100" width="100px;" alt="bettinagruen"/><br /><sub><b>bettinagruen</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Abettinagruen" title="Reviewed Pull Requests">👀</a> <a href="#research-bettinagruen" title="Research">🔬</a> <a href="#question-bettinagruen" title="Answering Questions">💬</a></td>
    </tr>
    <tr>
      <td align="center"><a href="http://stat.ethz.ch/~maechler"><img src="https://avatars.githubusercontent.com/u/995722?v=4?s=100" width="100px;" alt="Martin Mächler"/><br /><sub><b>Martin Mächler</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Ammaechler" title="Reviewed Pull Requests">👀</a></td>
      <td align="center"><a href="http://www.talarify.co.za"><img src="https://avatars.githubusercontent.com/u/7215014?v=4?s=100" width="100px;" alt="Anelda van der Walt"/><br /><sub><b>Anelda van der Walt</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Aanelda" title="Reviewed Pull Requests">👀</a></td>
      <td align="center"><a href="http://mine-cr.com"><img src="https://avatars.githubusercontent.com/u/5965649?v=4?s=100" width="100px;" alt="Mine Cetinkaya-Rundel"/><br /><sub><b>Mine Cetinkaya-Rundel</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Amine-cetinkaya-rundel" title="Reviewed Pull Requests">👀</a></td>
      <td align="center"><a href="https://github.com/MichaelChirico"><img src="https://avatars.githubusercontent.com/u/7606389?v=4?s=100" width="100px;" alt="Michael Chirico"/><br /><sub><b>Michael Chirico</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3AMichaelChirico" title="Reviewed Pull Requests">👀</a> <a href="#question-MichaelChirico" title="Answering Questions">💬</a> <a href="#content-MichaelChirico" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=MichaelChirico" title="Documentation">📖</a> <a href="#research-MichaelChirico" title="Research">🔬</a></td>
      <td align="center"><a href="http://officialjoomlabook.com"><img src="https://avatars.githubusercontent.com/u/754813?v=4?s=100" width="100px;" alt="Elin Waring"/><br /><sub><b>Elin Waring</b></sub></a><br /><a href="#question-elinw" title="Answering Questions">💬</a></td>
      <td align="center"><a href="https://github.com/lawremi"><img src="https://avatars.githubusercontent.com/u/158190?v=4?s=100" width="100px;" alt="Michael Lawrence"/><br /><sub><b>Michael Lawrence</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Alawremi" title="Reviewed Pull Requests">👀</a> <a href="#ideas-lawremi" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-lawremi" title="Mentoring">🧑‍🏫</a></td>
      <td align="center"><a href="https://github.com/gmbecker"><img src="https://avatars.githubusercontent.com/u/908721?v=4?s=100" width="100px;" alt="Gabe Becker"/><br /><sub><b>Gabe Becker</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Agmbecker" title="Reviewed Pull Requests">👀</a> <a href="#question-gmbecker" title="Answering Questions">💬</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/krlmlr"><img src="https://avatars.githubusercontent.com/u/1741643?v=4?s=100" width="100px;" alt="Kirill Müller"/><br /><sub><b>Kirill Müller</b></sub></a><br /><a href="#question-krlmlr" title="Answering Questions">💬</a></td>
      <td align="center"><a href="https://github.com/lionel-"><img src="https://avatars.githubusercontent.com/u/4465050?v=4?s=100" width="100px;" alt="Lionel Henry"/><br /><sub><b>Lionel Henry</b></sub></a><br /><a href="#question-lionel-" title="Answering Questions">💬</a></td>
      <td align="center"><a href="https://github.com/HayesJohnD"><img src="https://avatars.githubusercontent.com/u/66183716?v=4?s=100" width="100px;" alt="John Hayes"/><br /><sub><b>John Hayes</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3AHayesJohnD" title="Reviewed Pull Requests">👀</a></td>
      <td align="center"><a href="https://github.com/nbenn"><img src="https://avatars.githubusercontent.com/u/3158446?v=4?s=100" width="100px;" alt="nbenn"/><br /><sub><b>nbenn</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Anbenn" title="Reviewed Pull Requests">👀</a> <a href="#research-nbenn" title="Research">🔬</a> <a href="#question-nbenn" title="Answering Questions">💬</a></td>
      <td align="center"><a href="https://github.com/benubah"><img src="https://avatars.githubusercontent.com/u/11357251?v=4?s=100" width="100px;" alt="Ben"/><br /><sub><b>Ben</b></sub></a><br /><a href="#content-benubah" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Abenubah" title="Reviewed Pull Requests">👀</a> <a href="#research-benubah" title="Research">🔬</a> <a href="#question-benubah" title="Answering Questions">💬</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
