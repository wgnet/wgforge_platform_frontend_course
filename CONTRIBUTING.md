# WG Forge Platform Frontend course materials

## Contents

- [Reference](#reference)
- [Development setup](#development-setup)
- [Build & Deployment](#build-deployment)

## Reference

Presentations made with [Spectacle](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

## Development setup

1. Install dependencies

   ```sh
   npm install
   ```


2. Start the webpack server. The server will run at [`localhost:3000`](http://localhost:3000).

   ```sh
   npm start -- %presentation_name%
   ```

   E.g., following command will launch presentation from `00_introduction` folder

   ```sh
   npm start -- 00_introduction
   ```

3. To start new presentation copy boilerplate folder

   ```sh
   cp -a boilerplate %new_presentation_title%
   ```


## Build & Deployment

Building the dist version of the project is as easy as running

   ```sh
   npm run build -- %presentation_name%
   ```

To build new presentation for hosting with GitHub Pages:

   ```sh
   git add docs/%presentation_name%
   git commit -m 'Add %presentation_name%'
   ```

Then push it to remote.

Cheers! ✌️
