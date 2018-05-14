# multiple-targets

A primer for multi browser targets

Roughly does this:
1) Use two production environments 'production' and 'production-legacy'
2) Alter `config/targets`
3) Alter `app/index.html` to ship different assets to legacy browsers
4) Alter `ember-cli-build` for legacy asset compilation
5) Build now means builds two targets (legacy goes to `dist-legacy/`) and copy legacy files into `dist/`


Open issues:
[ ] fingeprinting
[ ] build both `production-legacy` and `production` bundle in one `ember build`
