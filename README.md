[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

# A Guide for Contributing to R Core
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-37-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This guide is a work in progress, inspired by http://devguide.python.org/. It is deployed at https://contributor.r-project.org/rdevguide/.

## Background Resources

A list of existing resources on R core development that we can use for reference or that we should document in the guide is given in the [Wiki for this repo](https://github.com/r-devel/rdevguide/wiki).

## Contributing

### Without write access

Corrections, suggestions and general improvements are welcome as [issue submissions](issues/new).

You can also suggest changes by editing the `.qmd` files that are in the `chapters/` folder at the root of this repository and submitting a pull request. Please target your pull requests to the `main` branch.

### With write access

You can push directly to `main` for small fixes. Please use PRs to `main` for discussing larger updates - try to limit to one section or at least one chapter in each PR, so that changes are easier to review.

## Editing notes

* Images must be included in the source, not provided as URLs, for the PDF book to compile.
* Images should have alt text for accessibility - note this is shown as a caption in the EPUB version.

## Technical details

Deployment is done via GitHub Actions, as specified in the [publish.yml](https://github.com/r-devel/rdevguide/blob/main/.github/workflows/publish.yml) workflow:

- whenever there's a push to main, the book is built and its content is put on the `gh-pages` branch, triggering the github-pages bot to deploy to <https://contributor.r-project.org/rdevguide/> .

If you want to render the guide locally, you need to download and install the Quarto CLI (command line interface) as documented on the [Quarto website](https://quarto.org/docs/get-started/). Then, from the command line (not the R console), run:

```quarto preview``` 

to preview changes in real time, or:

```quarto render```  

to generate the book in the `_book/` folder. This will also generate the PDF and ePub versions of the book, so takes a little longer. You can open the HTML version of the guide from the command line via `open _book/index.html`.  

If you are using RStudio, VS Code or Positron, you can use the Preview button (VS Code/Positron) or Render button (RStudio) instead.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Acknowledgements

This book started using Sean Kross' [minimal bookdown example](https://github.com/seankross/bookdown-start) as described on their [blog](http://seankross.com/2016/11/17/How-to-Start-a-Bookdown-Book.html).

This README borowed ideas from [ropensci/dev_guide](https://github.com/ropensci/dev_guide).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.heatherturner.net/"><img src="https://avatars.githubusercontent.com/u/3343008?v=4?s=100" width="100px;" alt="Heather Turner"/><br /><sub><b>Heather Turner</b></sub></a><br /><a href="#content-hturner" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=hturner" title="Code">💻</a> <a href="#maintenance-hturner" title="Maintenance">🚧</a> <a href="#mentoring-hturner" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-hturner" title="Project Management">📆</a> <a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Ahturner" title="Reviewed Pull Requests">👀</a> <a href="#fundingFinding-hturner" title="Funding Finding">🔍</a> <a href="#question-hturner" title="Answering Questions">💬</a> <a href="#eventOrganizing-hturner" title="Event Organizing">📋</a> <a href="#talk-hturner" title="Talks">📢</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://saranjeetkaur.github.io/About-Me/"><img src="https://avatars.githubusercontent.com/u/28556616?v=4?s=100" width="100px;" alt="Saranjeet Kaur"/><br /><sub><b>Saranjeet Kaur</b></sub></a><br /><a href="#content-SaranjeetKaur" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=SaranjeetKaur" title="Documentation">📖</a> <a href="#ideas-SaranjeetKaur" title="Ideas, Planning, & Feedback">🤔</a> <a href="#fundingFinding-SaranjeetKaur" title="Funding Finding">🔍</a> <a href="#question-SaranjeetKaur" title="Answering Questions">💬</a> <a href="#eventOrganizing-SaranjeetKaur" title="Event Organizing">📋</a> <a href="#talk-SaranjeetKaur" title="Talks">📢</a> <a href="#video-SaranjeetKaur" title="Videos">📹</a> <a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3ASaranjeetKaur" title="Reviewed Pull Requests">👀</a> <a href="#example-SaranjeetKaur" title="Examples">💡</a> <a href="#research-SaranjeetKaur" title="Research">🔬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://maya.rbind.io"><img src="https://avatars.githubusercontent.com/u/6053906?v=4?s=100" width="100px;" alt="Maya Gans"/><br /><sub><b>Maya Gans</b></sub></a><br /><a href="#infra-MayaGans" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.willingconsulting.com"><img src="https://avatars.githubusercontent.com/u/2680980?v=4?s=100" width="100px;" alt="Carol Willing"/><br /><sub><b>Carol Willing</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Awillingc" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://llrs.dev"><img src="https://avatars.githubusercontent.com/u/6818218?v=4?s=100" width="100px;" alt="Lluís"/><br /><sub><b>Lluís</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Allrs" title="Reviewed Pull Requests">👀</a> <a href="#content-llrs" title="Content">🖋</a> <a href="#question-llrs" title="Answering Questions">💬</a> <a href="#research-llrs" title="Research">🔬</a> <a href="https://github.com/r-devel/rdevguide/commits?author=llrs" title="Documentation">📖</a> <a href="#example-llrs" title="Examples">💡</a> <a href="#maintenance-llrs" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://tdhock.github.io"><img src="https://avatars.githubusercontent.com/u/932850?v=4?s=100" width="100px;" alt="Toby Dylan Hocking"/><br /><sub><b>Toby Dylan Hocking</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Atdhock" title="Reviewed Pull Requests">👀</a> <a href="#example-tdhock" title="Examples">💡</a> <a href="#research-tdhock" title="Research">🔬</a> <a href="#question-tdhock" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bettinagruen"><img src="https://avatars.githubusercontent.com/u/3341603?v=4?s=100" width="100px;" alt="bettinagruen"/><br /><sub><b>bettinagruen</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Abettinagruen" title="Reviewed Pull Requests">👀</a> <a href="#research-bettinagruen" title="Research">🔬</a> <a href="#question-bettinagruen" title="Answering Questions">💬</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://stat.ethz.ch/~maechler"><img src="https://avatars.githubusercontent.com/u/995722?v=4?s=100" width="100px;" alt="Martin Mächler"/><br /><sub><b>Martin Mächler</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Ammaechler" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.talarify.co.za"><img src="https://avatars.githubusercontent.com/u/7215014?v=4?s=100" width="100px;" alt="Anelda van der Walt"/><br /><sub><b>Anelda van der Walt</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Aanelda" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://mine-cr.com"><img src="https://avatars.githubusercontent.com/u/5965649?v=4?s=100" width="100px;" alt="Mine Cetinkaya-Rundel"/><br /><sub><b>Mine Cetinkaya-Rundel</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Amine-cetinkaya-rundel" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MichaelChirico"><img src="https://avatars.githubusercontent.com/u/7606389?v=4?s=100" width="100px;" alt="Michael Chirico"/><br /><sub><b>Michael Chirico</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3AMichaelChirico" title="Reviewed Pull Requests">👀</a> <a href="#question-MichaelChirico" title="Answering Questions">💬</a> <a href="#content-MichaelChirico" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=MichaelChirico" title="Documentation">📖</a> <a href="#research-MichaelChirico" title="Research">🔬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://officialjoomlabook.com"><img src="https://avatars.githubusercontent.com/u/754813?v=4?s=100" width="100px;" alt="Elin Waring"/><br /><sub><b>Elin Waring</b></sub></a><br /><a href="#question-elinw" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lawremi"><img src="https://avatars.githubusercontent.com/u/158190?v=4?s=100" width="100px;" alt="Michael Lawrence"/><br /><sub><b>Michael Lawrence</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Alawremi" title="Reviewed Pull Requests">👀</a> <a href="#ideas-lawremi" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-lawremi" title="Mentoring">🧑‍🏫</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gmbecker"><img src="https://avatars.githubusercontent.com/u/908721?v=4?s=100" width="100px;" alt="Gabe Becker"/><br /><sub><b>Gabe Becker</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Agmbecker" title="Reviewed Pull Requests">👀</a> <a href="#question-gmbecker" title="Answering Questions">💬</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/krlmlr"><img src="https://avatars.githubusercontent.com/u/1741643?v=4?s=100" width="100px;" alt="Kirill Müller"/><br /><sub><b>Kirill Müller</b></sub></a><br /><a href="#question-krlmlr" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lionel-"><img src="https://avatars.githubusercontent.com/u/4465050?v=4?s=100" width="100px;" alt="Lionel Henry"/><br /><sub><b>Lionel Henry</b></sub></a><br /><a href="#question-lionel-" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HayesJohnD"><img src="https://avatars.githubusercontent.com/u/66183716?v=4?s=100" width="100px;" alt="John Hayes"/><br /><sub><b>John Hayes</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3AHayesJohnD" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nbenn"><img src="https://avatars.githubusercontent.com/u/3158446?v=4?s=100" width="100px;" alt="nbenn"/><br /><sub><b>nbenn</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Anbenn" title="Reviewed Pull Requests">👀</a> <a href="#research-nbenn" title="Research">🔬</a> <a href="#question-nbenn" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/benubah"><img src="https://avatars.githubusercontent.com/u/11357251?v=4?s=100" width="100px;" alt="Ben"/><br /><sub><b>Ben</b></sub></a><br /><a href="#content-benubah" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Abenubah" title="Reviewed Pull Requests">👀</a> <a href="#research-benubah" title="Research">🔬</a> <a href="#question-benubah" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/itsdebartha"><img src="https://avatars.githubusercontent.com/u/53690728?v=4?s=100" width="100px;" alt="Debartha Paul"/><br /><sub><b>Debartha Paul</b></sub></a><br /><a href="#content-itsdebartha" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lgibson7"><img src="https://avatars.githubusercontent.com/u/87203716?v=4?s=100" width="100px;" alt="Lydia Gibson, MS, GStat"/><br /><sub><b>Lydia Gibson, MS, GStat</b></sub></a><br /><a href="#content-lgibson7" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=lgibson7" title="Documentation">📖</a> <a href="#ideas-lgibson7" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://patricia-loto.netlify.app/"><img src="https://avatars.githubusercontent.com/u/39300655?v=4?s=100" width="100px;" alt="Patricia A. Loto"/><br /><sub><b>Patricia A. Loto</b></sub></a><br /><a href="#content-PatriLoto" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=PatriLoto" title="Documentation">📖</a> <a href="#ideas-PatriLoto" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ivelasq.rbind.io"><img src="https://avatars.githubusercontent.com/u/12236152?v=4?s=100" width="100px;" alt="Isabella Velásquez"/><br /><sub><b>Isabella Velásquez</b></sub></a><br /><a href="#content-ivelasq" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=ivelasq" title="Documentation">📖</a> <a href="#ideas-ivelasq" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cjrace"><img src="https://avatars.githubusercontent.com/u/52536248?v=4?s=100" width="100px;" alt="Cam Race"/><br /><sub><b>Cam Race</b></sub></a><br /><a href="#infra-cjrace" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#content-cjrace" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=cjrace" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.pipinghotdata.com/"><img src="https://avatars.githubusercontent.com/u/17747575?v=4?s=100" width="100px;" alt="Shannon Pileggi"/><br /><sub><b>Shannon Pileggi</b></sub></a><br /><a href="#content-shannonpileggi" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=shannonpileggi" title="Documentation">📖</a> <a href="#ideas-shannonpileggi" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pmur002"><img src="https://avatars.githubusercontent.com/u/2044052?v=4?s=100" width="100px;" alt="Paul Murrell"/><br /><sub><b>Paul Murrell</b></sub></a><br /><a href="#content-pmur002" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://zkamvar.netlify.app"><img src="https://avatars.githubusercontent.com/u/3639446?v=4?s=100" width="100px;" alt="Zhian N. Kamvar"/><br /><sub><b>Zhian N. Kamvar</b></sub></a><br /><a href="#content-zkamvar" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=zkamvar" title="Documentation">📖</a> <a href="#ideas-zkamvar" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jmaspons"><img src="https://avatars.githubusercontent.com/u/102644?v=4?s=100" width="100px;" alt="Joan Maspons"/><br /><sub><b>Joan Maspons</b></sub></a><br /><a href="#infra-jmaspons" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://hanneoberman.github.io"><img src="https://avatars.githubusercontent.com/u/38891540?v=4?s=100" width="100px;" alt="Hanne Oberman"/><br /><sub><b>Hanne Oberman</b></sub></a><br /><a href="#content-hanneoberman" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.imbe.med.fau.de/person/sebastian-meyer/"><img src="https://avatars.githubusercontent.com/u/4366501?v=4?s=100" width="100px;" alt="Sebastian Meyer"/><br /><sub><b>Sebastian Meyer</b></sub></a><br /><a href="#ideas-bastistician" title="Ideas, Planning, & Feedback">🤔</a> <a href="#research-bastistician" title="Research">🔬</a> <a href="#question-bastistician" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.frick.ws"><img src="https://avatars.githubusercontent.com/u/12950918?v=4?s=100" width="100px;" alt="Hannah Frick"/><br /><sub><b>Hannah Frick</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/commits?author=hfrick" title="Documentation">📖</a> <a href="#ideas-hfrick" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SJaffa"><img src="https://avatars.githubusercontent.com/u/13678317?v=4?s=100" width="100px;" alt="S Jaffa"/><br /><sub><b>S Jaffa</b></sub></a><br /><a href="#content-SJaffa" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=SJaffa" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bjungbogati.com.np"><img src="https://avatars.githubusercontent.com/u/8600091?v=4?s=100" width="100px;" alt="Binod Jung Bogati"/><br /><sub><b>Binod Jung Bogati</b></sub></a><br /><a href="#content-bjungbogati" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=bjungbogati" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://daroczig.github.io"><img src="https://avatars.githubusercontent.com/u/495736?v=4?s=100" width="100px;" alt="Gergely Daróczi"/><br /><sub><b>Gergely Daróczi</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/pulls?q=is%3Apr+reviewed-by%3Adaroczig" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/razekmh"><img src="https://avatars.githubusercontent.com/u/44040283?v=4?s=100" width="100px;" alt="Mahmoud Abdelrazek"/><br /><sub><b>Mahmoud Abdelrazek</b></sub></a><br /><a href="#content-razekmh" title="Content">🖋</a> <a href="https://github.com/r-devel/rdevguide/commits?author=razekmh" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://ellakaye.co.uk"><img src="https://avatars.githubusercontent.com/u/7222491?v=4?s=100" width="100px;" alt="Ella Kaye"/><br /><sub><b>Ella Kaye</b></sub></a><br /><a href="https://github.com/r-devel/rdevguide/commits?author=EllaKaye" title="Code">💻</a> <a href="#infra-EllaKaye" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://carloscamara.es/en"><img src="https://avatars.githubusercontent.com/u/706549?v=4?s=100" width="100px;" alt="Carlos Cámara"/><br /><sub><b>Carlos Cámara</b></sub></a><br /><a href="#maintenance-ccamara" title="Maintenance">🚧</a> <a href="https://github.com/r-devel/rdevguide/commits?author=ccamara" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
