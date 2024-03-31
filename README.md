![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/laaraujo/laaraujo.dev/gh-pages-deploy.yml?branch=main)
![GitHub Actions Workflow Status](https://github.com/laaraujo/laaraujo.dev/actions/workflows/gh-pages-deploy.yml/badge.svg)


# laaraujo.dev

This repo servers both as my personal website and as a template for anyone wanting to deploy a static site in github actions with [11ty](https://www.11ty.dev/) (or any other static site generator for that matter)

## Setup
```sh
npm install
```

## Local development
```
npm install
npm run start
```

## Local build
```
npm run build
```

## CNAME file
[CNAME](./CNAME) file is needed only if you are using a custom domain with Github Pages. This is due to the fact that the Github Pages settings commits a CNAME file to the `gh-pages` branch for the selected domain, but it gets deleted after every commit if not present when pushing a new build.

## License
MIT License

* Feel free to just fork this and use it if you like it, just make sure to leave a star.
