# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.5.1](https://github.com/beatgig/synth/compare/@beatgig/synth-ui@1.5.0...@beatgig/synth-ui@1.5.1) (2020-01-23)


### Bug Fixes

* prevent SSR issues when referencing document ([48eef3e](https://github.com/beatgig/synth/commit/48eef3e8ca4183914f7c262cb87187fc87f075c9))





# [1.5.0](https://github.com/beatgig/synth/compare/@beatgig/synth-ui@1.4.0...@beatgig/synth-ui@1.5.0) (2019-12-23)


### Bug Fixes

* make `<Popup>` compatible with SSR ([a53d98a](https://github.com/beatgig/synth/commit/a53d98a3deabb52054a9e333bb516aef223bd5c9))


### Features

* add `<ArrowLeftIcon>` and `<ArrowRightIcon>` components ([9e37e15](https://github.com/beatgig/synth/commit/9e37e15e6d418839792bb7297104b1008222774b))
* add `<Slider>` component and docs ([c3a4fc7](https://github.com/beatgig/synth/commit/c3a4fc729ee84c47bf54cd59dae2fd39784fe48f))
* add centerX and centerY props to `<Flex>` component ([89b5468](https://github.com/beatgig/synth/commit/89b54689d65e896141bc9564116b56e9a4561c6f))
* add withoutPadding prop to `<Clickable>` component ([8e3c447](https://github.com/beatgig/synth/commit/8e3c4479a63b1d233e15cde55be4ea7eb157878d))
* change `<ArtistCard>` image aspect ratio ([4167669](https://github.com/beatgig/synth/commit/41676699aa1ac1178d5992581d5824f34b340ccb))
* change reducer init function name ([227a27e](https://github.com/beatgig/synth/commit/227a27e4a627e4ca12b2408427892240cce50db4))
* change sizing strategy for the `<Icon>` component ([395d621](https://github.com/beatgig/synth/commit/395d621e97ee0b9da485ad68e7e1e82fcf61a243))





# [1.4.0](https://github.com/beatgig/synth/compare/@beatgig/synth-ui@1.3.0...@beatgig/synth-ui@1.4.0) (2019-12-18)


### Bug Fixes

* add Icon component folder ([01ccbd4](https://github.com/beatgig/synth/commit/01ccbd4b8e4da04d7cbc624f7d03e59aa26b4c5b))
* pass className prop to inner Flex component ([b33ebcc](https://github.com/beatgig/synth/commit/b33ebcc7b5805f84bb8e4a194db48ca7334587b1))
* synth-ui CHANGELOG.md formatting ([c96910a](https://github.com/beatgig/synth/commit/c96910ac0e057b6211422e4ec2231ad3c677e793))


### Features

* add `<ArtistCard>` component and docs ([e3307c5](https://github.com/beatgig/synth/commit/e3307c5c36c18be6cf531cf7d9a3d35087b7621b))
* add `<Background>` component and docs ([9073443](https://github.com/beatgig/synth/commit/9073443b2d6bcce568079d7783fe556e5682a3b8))
* add <AspectRatio> component and docs ([3ba457a](https://github.com/beatgig/synth/commit/3ba457adbbc8250106b9fbb03869b46c75f85588))
* add <Box> component and docs ([f119602](https://github.com/beatgig/synth/commit/f119602707d6bb4b7afe48030dd33e3d4285a1a7))
* add <Rating> component and docs ([34beb10](https://github.com/beatgig/synth/commit/34beb1021f373fbe971c11903f61e6f04bd0af9c))
* add new `<Box>` and `<Text>` primitive components ([46699cc](https://github.com/beatgig/synth/commit/46699ccbe3d310cc3f6ad4a966bb35307a1729ee))
* make <GridItem> extend <Flex> ([e2234d2](https://github.com/beatgig/synth/commit/e2234d2468043bf74a88519a5030e92dadd8cf38))
* remove `<Artist>` component ([18791da](https://github.com/beatgig/synth/commit/18791da0e16634b2bc1cbd14ea72664f4c458063))





# [1.3.0](https://github.com/beatgig/synth/compare/@beatgig/synth-ui@1.2.0...@beatgig/synth-ui@1.3.0) (2019-12-12)


### Bug Fixes

* **types:** add xmlns to svgs and add currentColor as default fill ([ee2ef68](https://github.com/beatgig/synth/commit/ee2ef68))
* **types:** fix `<MenuDivider>` spacing ([04d34e1](https://github.com/beatgig/synth/commit/04d34e1))
* **types:** fix `<SearchInput>` missing semicolon on padding property ([1ebbefe](https://github.com/beatgig/synth/commit/1ebbefe))
* **types:** fix `<Select>` padding and background position ([4ba3dba](https://github.com/beatgig/synth/commit/4ba3dba))
* **types:** fix logo size properties ([a3575e1](https://github.com/beatgig/synth/commit/a3575e1))
* **types:** fix modal component exports ([686bbdb](https://github.com/beatgig/synth/commit/686bbdb))
* **types:** only add `<Spacer>` if the `<Button>` has any content ([9885223](https://github.com/beatgig/synth/commit/9885223))
* **types:** pass along className prop to `<Icon>` component ([0f657fb](https://github.com/beatgig/synth/commit/0f657fb))
* **types:** properly forward React refs ([4279dd5](https://github.com/beatgig/synth/commit/4279dd5))
* **types:** reference to wrong icon component when defining propTypes ([c763e77](https://github.com/beatgig/synth/commit/c763e77))
* **types:** set `<GridItem>` width correctly ([04a035f](https://github.com/beatgig/synth/commit/04a035f))
* **types:** various visual and functionality fixes ([74db414](https://github.com/beatgig/synth/commit/74db414))


### Features

* **types:** add `<Paragraph>` component ([b4051ee](https://github.com/beatgig/synth/commit/b4051ee))
* **types:** add popupProps and popupOptions ([7ed95ca](https://github.com/beatgig/synth/commit/7ed95ca))
* add `<Grid>` and `<GridItem>` components ([aed2455](https://github.com/beatgig/synth/commit/aed2455))
* add `<Modal>` and `<ConfirmationModal>` components ([1238079](https://github.com/beatgig/synth/commit/1238079))
* add intent prop to button components to control their color styles ([0a9b2c1](https://github.com/beatgig/synth/commit/0a9b2c1))





## [1.0.2](https://github.com/beatgig/synth/compare/@beatgig/synth-ui@1.0.1...@beatgig/synth-ui@1.0.2) (2019-09-13)

**Note:** Version bump only for package @beatgig/synth-ui
