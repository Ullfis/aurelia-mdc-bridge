# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.17.0"></a>
# [0.17.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.16.0...v0.17.0) (2018-02-13)

## Material Components Web 0.30.0

**Read this before you upgrade!**

Much has changed in this version. If you use some or all of these components, please refactor your code. See changelog and documentation for details:

- `mdc-simple-menu`
- `mdc-select-css`
- `mdc-card`

There is also a new component:

- `mdc-chip`
- `mdc-chip-set`

This component is not fully implemented. But it’s a start.

Add this to your `aurelia.json` mdc-bundle dependencies:

```json
{
  "name": "@material/chips",
  "path": "../node_modules/@material/chips/dist",
  "main": "mdc.chips"
},
```

### Bug Fixes

* **mdc-button:** make card-action handle card classes ([084f43d](https://github.com/ullfis/aurelia-mdc-bridge/commit/084f43d))
* **mdc-checkbox:** update svg path's class ([a983a8b](https://github.com/ullfis/aurelia-mdc-bridge/commit/a983a8b))
* **mdc-menu:** error thrown when click empty list-item area ([78382eb](https://github.com/ullfis/aurelia-mdc-bridge/commit/78382eb))
* **mdc-select:** reflect mdc-menu changes ([5f34935](https://github.com/ullfis/aurelia-mdc-bridge/commit/5f34935))
* **mdc-text-field:** change bottom line class ([9188093](https://github.com/ullfis/aurelia-mdc-bridge/commit/9188093))


### Features

* **mdc-card-title:** remove component ([c0d0aac](https://github.com/ullfis/aurelia-mdc-bridge/commit/c0d0aac))
* material-components-web v0.30.0 ([89c8c19](https://github.com/ullfis/aurelia-mdc-bridge/commit/89c8c19))
* **mdc-card:** add stroked attribute ([a00ca5c](https://github.com/ullfis/aurelia-mdc-bridge/commit/a00ca5c))
* **mdc-card-actions:** remove vertical, add full-bleed.. ([64e76e2](https://github.com/ullfis/aurelia-mdc-bridge/commit/64e76e2))
* **mdc-card-horizontal:** remove component ([e7d6f85](https://github.com/ullfis/aurelia-mdc-bridge/commit/e7d6f85))
* **mdc-card-media:** add scaled attribute ([fff7ab5](https://github.com/ullfis/aurelia-mdc-bridge/commit/fff7ab5))
* **mdc-card-text:** remove component ([cdf2baf](https://github.com/ullfis/aurelia-mdc-bridge/commit/cdf2baf))
* **mdc-chip:** add new component ([7ef326c](https://github.com/ullfis/aurelia-mdc-bridge/commit/7ef326c))
* **mdc-menu:** mdc-simple-menu has been renamed to mdc-menu ([770d017](https://github.com/ullfis/aurelia-mdc-bridge/commit/770d017))
* **mdc-select:** add box attribute ([428136a](https://github.com/ullfis/aurelia-mdc-bridge/commit/428136a))
* **mdc-select-css:** remove component ([ddd7415](https://github.com/ullfis/aurelia-mdc-bridge/commit/ddd7415))



<a name="0.16.0"></a>
# [0.16.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.15.0...v0.16.0) (2018-02-02)


### Features

* **mdc-grid-cell:** make spans, order and align bindable ([f43c9f7](https://github.com/ullfis/aurelia-mdc-bridge/commit/f43c9f7)), closes [#35](https://github.com/ullfis/aurelia-mdc-bridge/issues/35)
* material components web version 0.29.0 ([b36044e](https://github.com/ullfis/aurelia-mdc-bridge/commit/b36044e))
* **mdc-select-css:** remove multi select ([cc06884](https://github.com/ullfis/aurelia-mdc-bridge/commit/cc06884))
* **mdc-tab-bar:** remove primary and accent attributes ([ac0819d](https://github.com/ullfis/aurelia-mdc-bridge/commit/ac0819d))
* **mdc-tab-bar-scroller:** remove primary and accent attribute ([d2daa95](https://github.com/ullfis/aurelia-mdc-bridge/commit/d2daa95))
* **mdc-text-field:** add valid function (get/set) ([1494690](https://github.com/ullfis/aurelia-mdc-bridge/commit/1494690)), closes [#38](https://github.com/ullfis/aurelia-mdc-bridge/issues/38)



<a name="0.15.0"></a>
# [0.15.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.14.5...v0.15.0) (2018-02-01)


### Bug Fixes

* **drawers:** rename drawer classes ([8274b12](https://github.com/ullfis/aurelia-mdc-bridge/commit/8274b12))
* **mdc-drawer:** change selected class ([16ccc87](https://github.com/ullfis/aurelia-mdc-bridge/commit/16ccc87))
* **mdc-list-item:** change start/end classes ([fe55cae](https://github.com/ullfis/aurelia-mdc-bridge/commit/fe55cae))


### Features

* update material-components-web to v0.28.0 ([dcda9aa](https://github.com/ullfis/aurelia-mdc-bridge/commit/dcda9aa))
* **mdc-icon-toggle:** add disabled attribute ([b728745](https://github.com/ullfis/aurelia-mdc-bridge/commit/b728745))
* **mdc-icon-toggle:** remove primary and accent attributes ([f163c81](https://github.com/ullfis/aurelia-mdc-bridge/commit/f163c81))



<a name="0.14.5"></a>
## [0.14.5](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.14.4...v0.14.5) (2017-12-14)


### Bug Fixes

* **mdc-list-item:** secondary text class ([b56ea91](https://github.com/ullfis/aurelia-mdc-bridge/commit/b56ea91))



<a name="0.14.4"></a>
## [0.14.4](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.14.3...v0.14.4) (2017-12-14)



<a name="0.14.3"></a>
## [0.14.3](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.14.0...v0.14.3) (2017-12-14)


### Bug Fixes

* **package:** add jspm config ([bb297ff](https://github.com/ullfis/aurelia-mdc-bridge/commit/bb297ff))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.13.0...v0.14.0) (2017-12-13)


### Bug Fixes

* **mdc-list-item:** rename secondary text class name ([3a873c6](https://github.com/ullfis/aurelia-mdc-bridge/commit/3a873c6))
* **mdc-select-css:** wrap select into div and add bottom line class ([98ebd18](https://github.com/ullfis/aurelia-mdc-bridge/commit/98ebd18))
* **mdc-text-field:** remove box binding from bottom line ([951f41e](https://github.com/ullfis/aurelia-mdc-bridge/commit/951f41e))
* **mdc-text-field:** rename helper-text classes ([6b12608](https://github.com/ullfis/aurelia-mdc-bridge/commit/6b12608))


### Features

* **mdc-select:** add label-text attribute ([5ed224e](https://github.com/ullfis/aurelia-mdc-bridge/commit/5ed224e))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.12.2...v0.13.0) (2017-11-23)


### Features

* **mdc-dialog:** add header and footer slots ([fca0ccc](https://github.com/ullfis/aurelia-mdc-bridge/commit/fca0ccc))



<a name="0.12.2"></a>
## [0.12.2](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.12.1...v0.12.2) (2017-11-23)


### Bug Fixes

* **mdc-toolbar:** remove containerless ([96f2dbf](https://github.com/ullfis/aurelia-mdc-bridge/commit/96f2dbf))



<a name="0.12.1"></a>
## [0.12.1](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.12.0...v0.12.1) (2017-11-23)


### Bug Fixes

* **mdc-select:** allow select input with custom items ([7bcad68](https://github.com/ullfis/aurelia-mdc-bridge/commit/7bcad68))
* **mdc-simple-menu:** allow select input with custom items ([f6a00e6](https://github.com/ullfis/aurelia-mdc-bridge/commit/f6a00e6))



<a name="0.12.0"></a>
# [0.12.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.11.0...v0.12.0) (2017-11-18)


### Bug Fixes

* **mdc:** update material-components-web to v0.25.0 ([f83b09d](https://github.com/ullfis/aurelia-mdc-bridge/commit/f83b09d))
* **mdc-linear-progress:** remove accent ([4d0715f](https://github.com/ullfis/aurelia-mdc-bridge/commit/4d0715f))
* **mdc-text-field:** rename mdc-textfield to mdc-text-field ([e78235a](https://github.com/ullfis/aurelia-mdc-bridge/commit/e78235a))


### Features

* **mdc-slider:** add discrete attribute ([3b27952](https://github.com/ullfis/aurelia-mdc-bridge/commit/3b27952))
* **mdc-slider:** add markers attribute ([1273d81](https://github.com/ullfis/aurelia-mdc-bridge/commit/1273d81))



<a name="0.11.0"></a>
# [0.11.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.10.1...v0.11.0) (2017-11-13)


### Features

* **mdc-list-item:** add selected attribute to use in drawers ([e807c36](https://github.com/ullfis/aurelia-mdc-bridge/commit/e807c36))



<a name="0.10.1"></a>
## [0.10.1](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.10.0...v0.10.1) (2017-11-11)


### Bug Fixes

* **mdc-drawer-persistent:** allow click event on A tag ([70e69e6](https://github.com/ullfis/aurelia-mdc-bridge/commit/70e69e6))
* **mdc-drawer-temporary:** allow click event on A tag ([f6b35a3](https://github.com/ullfis/aurelia-mdc-bridge/commit/f6b35a3))



<a name="0.10.0"></a>
# [0.10.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.9.3...v0.10.0) (2017-10-26)


### Bug Fixes

* **mdc-snackbar:** remove dependency of mdc-button ([b5c3519](https://github.com/ullfis/aurelia-mdc-bridge/commit/b5c3519))
* **mdc-textfield:** use the new registerInputInteractionHandler for registering blur & focus handlers ([911f4d9](https://github.com/ullfis/aurelia-mdc-bridge/commit/911f4d9))


### Features

* **mdc-button:** add stroked and unelevated attributes ([d7885ed](https://github.com/ullfis/aurelia-mdc-bridge/commit/d7885ed))
* **mdc-fab:** add exited and remove plain attribute ([3494a3c](https://github.com/ullfis/aurelia-mdc-bridge/commit/3494a3c))
* **mdc-textfield:** add leading and trailing icon ([99b0eae](https://github.com/ullfis/aurelia-mdc-bridge/commit/99b0eae))



<a name="0.9.3"></a>
## [0.9.3](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.9.2...v0.9.3) (2017-09-18)


### Bug Fixes

* **mdc-fab:** keep inner span during if-bind ([326d1ca](https://github.com/ullfis/aurelia-mdc-bridge/commit/326d1ca))



<a name="0.9.2"></a>
## [0.9.2](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.9.1...v0.9.2) (2017-09-18)


### Bug Fixes

* **mdc-fab:** set element classes during attached ([0e56fae](https://github.com/ullfis/aurelia-mdc-bridge/commit/0e56fae))



<a name="0.9.1"></a>
## [0.9.1](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.9.0...v0.9.1) (2017-09-18)


### Bug Fixes

* **mdc-button:** set element classes during attached ([f2cc820](https://github.com/ullfis/aurelia-mdc-bridge/commit/f2cc820)), closes [#17](https://github.com/ullfis/aurelia-mdc-bridge/issues/17)



<a name="0.9.0"></a>
# [0.9.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/v0.8.0...v0.9.0) (2017-09-18)


### Bug Fixes

* **mdc-list-item:** ugly focus box on selected item ([c0f89c6](https://github.com/ullfis/aurelia-mdc-bridge/commit/c0f89c6))


### Features

* **mdc-dialog:** make foundation public ([50eab29](https://github.com/ullfis/aurelia-mdc-bridge/commit/50eab29)), closes [#13](https://github.com/ullfis/aurelia-mdc-bridge/issues/13)



<a name="0.8.0"></a>
# [0.8.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.7.2...0.8.0) (2017-09-16)


### Bug Fixes

* **mdc-card-title:** card error using avatar icon ([5956229](https://github.com/ullfis/aurelia-mdc-bridge/commit/5956229))


### Features

* **mdc-dialog:**  add accept-disabled attribute ([c3b8e32](https://github.com/ullfis/aurelia-mdc-bridge/commit/c3b8e32))



<a name="0.7.2"></a>
## [0.7.2](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.7.1...0.7.2) (2017-09-14)


### Bug Fixes

* **mdc-dialog:** add colored action button option ([5c5eabc](https://github.com/ullfis/aurelia-mdc-bridge/commit/5c5eabc))
* **mdc-dialog:** hide header element if no header text ([caf22e2](https://github.com/ullfis/aurelia-mdc-bridge/commit/caf22e2))



<a name="0.7.1"></a>
## [0.7.1](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.7.0...0.7.1) (2017-09-05)


### Bug Fixes

* **mdc-toolbar:** flexible expand ratio event ([34e3721](https://github.com/ullfis/aurelia-mdc-bridge/commit/34e3721))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.6.2...0.7.0) (2017-08-05)


### Bug Fixes

* **mdc-list-item:** check boolean value of ripple attribute ([57081ab](https://github.com/ullfis/aurelia-mdc-bridge/commit/57081ab))
* **mdc-textfield:** stop focusedChanged event from onBlur and onFocus ([7d873ac](https://github.com/ullfis/aurelia-mdc-bridge/commit/7d873ac))


### Features

* **mdc-toolbar:** add flexible default behavior ([c267bc6](https://github.com/ullfis/aurelia-mdc-bridge/commit/c267bc6))



<a name="0.6.2"></a>
## [0.6.2](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.6.1...0.6.2) (2017-08-04)


### Bug Fixes

* **mdc-textfield:** fix error on blur ([06b4e87](https://github.com/ullfis/aurelia-mdc-bridge/commit/06b4e87))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.6.0...0.6.1) (2017-08-03)


### Bug Fixes

* **mdc-card-actions:** remove containerless ([3edcba5](https://github.com/ullfis/aurelia-mdc-bridge/commit/3edcba5))
* **mdc-card-horizontal:** remove containerless ([04199bc](https://github.com/ullfis/aurelia-mdc-bridge/commit/04199bc))
* **mdc-card-media:** remove containerless ([bbf47ed](https://github.com/ullfis/aurelia-mdc-bridge/commit/bbf47ed))
* **mdc-card-text:** remove containerless ([585308c](https://github.com/ullfis/aurelia-mdc-bridge/commit/585308c))
* **mdc-card-title:** remove containerless ([8d39bbc](https://github.com/ullfis/aurelia-mdc-bridge/commit/8d39bbc))
* **mdc-grid:** remove containerless ([20e0ec6](https://github.com/ullfis/aurelia-mdc-bridge/commit/20e0ec6))
* **mdc-icon-toggle:** remove containerless ([8c481b7](https://github.com/ullfis/aurelia-mdc-bridge/commit/8c481b7))
* **mdc-linear-progress:** remove containerless ([7de7ff9](https://github.com/ullfis/aurelia-mdc-bridge/commit/7de7ff9))
* **mdc-list:** remove containerless ([55549cd](https://github.com/ullfis/aurelia-mdc-bridge/commit/55549cd))
* **mdc-list-divider:** remove containerless ([41926bf](https://github.com/ullfis/aurelia-mdc-bridge/commit/41926bf))
* **mdc-list-item:** remove containerless ([c6a2b00](https://github.com/ullfis/aurelia-mdc-bridge/commit/c6a2b00))
* **mdc-radio:** remove containerless ([1be3b19](https://github.com/ullfis/aurelia-mdc-bridge/commit/1be3b19))
* **mdc-switch:** remove containerless ([ae772db](https://github.com/ullfis/aurelia-mdc-bridge/commit/ae772db))
* **mdc-tab-bar:** remove containerless ([7451c94](https://github.com/ullfis/aurelia-mdc-bridge/commit/7451c94))
* **mdc-tab-bar-scroller:** remove containerless ([b7fdcdc](https://github.com/ullfis/aurelia-mdc-bridge/commit/b7fdcdc))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.5.2...0.6.0) (2017-08-02)


### Features

* **mdc-textfield:** add blur and focus events also add focused attribute ([c6855c5](https://github.com/ullfis/aurelia-mdc-bridge/commit/c6855c5))
* **mdc-textfield:** add getNativeInput() function ([49ce058](https://github.com/ullfis/aurelia-mdc-bridge/commit/49ce058))



<a name="0.5.2"></a>
## [0.5.2](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.5.1...0.5.2) (2017-07-30)


### Bug Fixes

* **config-builder:** add .useRipples() in .useAll() ([9eb4c3c](https://github.com/ullfis/aurelia-mdc-bridge/commit/9eb4c3c))
* **mdc-dialog:** add on-opened and on-closed events ([48bb704](https://github.com/ullfis/aurelia-mdc-bridge/commit/48bb704))
* **mdc-textfield:** add focus function ([9ad669a](https://github.com/ullfis/aurelia-mdc-bridge/commit/9ad669a))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.5.0...0.5.1) (2017-07-29)


### Bug Fixes

* **mdc-list-divider:** find correct parent list element ([38f4249](https://github.com/ullfis/aurelia-mdc-bridge/commit/38f4249))
* **mdc-list-item:** find correct parent list element ([0c0cd4d](https://github.com/ullfis/aurelia-mdc-bridge/commit/0c0cd4d))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.4.1...0.5.0) (2017-07-29)


### Bug Fixes

* **config-builder:** export config-builder from library ([376debe](https://github.com/ullfis/aurelia-mdc-bridge/commit/376debe))


### Features

* add config builder ([e252ac6](https://github.com/ullfis/aurelia-mdc-bridge/commit/e252ac6))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.4.0...0.4.1) (2017-07-25)


### Bug Fixes

* **mdc-drawer-header:** correctly detect parent drawer type ([488b88c](https://github.com/ullfis/aurelia-mdc-bridge/commit/488b88c))
* **mdc-drawer-spacer:** correctly detect parent drawer type ([2f04995](https://github.com/ullfis/aurelia-mdc-bridge/commit/2f04995))
* **mdc-list:** make component containerless ([29ccd6e](https://github.com/ullfis/aurelia-mdc-bridge/commit/29ccd6e))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/ullfis/aurelia-mdc-bridge/compare/0.3.3...0.4.0) (2017-07-24)


### Features

* **mdc-button:** auto add ripple effect ([8af63bf](https://github.com/ullfis/aurelia-mdc-bridge/commit/8af63bf))
* **mdc-fab:** auto add ripple effect ([f8ae9a7](https://github.com/ullfis/aurelia-mdc-bridge/commit/f8ae9a7))
* **mdc-ripple:** add accent and primary ripple surface ([709393c](https://github.com/ullfis/aurelia-mdc-bridge/commit/709393c))



<a name="0.3.3"></a>
## 0.3.3 (2017-07-24)
