# Frontend lecture mate

## Contents

- [Getting Started](#getting-started)
- [Build & Deployment](#build-deployment)

## Reference

The Spectacle core API is available in the [Spectacle Docs](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

## Getting Started

1. Download the boilerplate

   ```sh
   git clone git@github.com:FormidableLabs/spectacle-boilerplate.git
   ```

2. Remove existing version control

   ```sh
   rm -R .git
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Start the webpack server. The server will run at [`localhost:3000`](http://localhost:3000).

   ```sh
   npm start -- %lesson_name%
   ```

E.g., following command will launch presentation from `00_introduction` folder:

   ```sh
   npm start -- 00_introduction
   ```

## Build & Deployment

Building the dist version of the project is as easy as running

```sh
yarn build
```

If you want to deploy the slideshow to surge, run

```sh
yarn deploy
```
