# Chat Application built with Stream Chat and VanilaJS 💬

## Overview

This chat application should you all set up with a chat application with Stream and Vanilajs


## Quick Instructions (localhost)


## Technology Used

The following technologies were used to build this API:

-   Javascript
-   [Stream Chat](https://getstream.io/chat/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [TimeAgo](https://www.npmjs.com/package/javascript-time-ago)
-   [Broweserify](https://www.npmjs.com/package/browserify) --- Because Stream is a node module.

## Support

-   User authorization
-   Group chat
-   Typing

Please see below for installation requirements.

## Requirements

-   Node.js (latest)
-   Yarn (latest)

## Installation

Clone this repo

```shell
git clone https://github.com/ezesundayeze/vanilajs-chat-app-stream.git && cd vanilajs-chat-app-stream
```

Install StreamChat

```shell
# using npm
npm install stream-chat axios javascript-time-ago

# using yarn
yarn add stream-chat axios javascript-time-ago
 
```

If you make any change to the javascript files you should use browserify to bundle it.

Browerify is a dev dependency we are using it to bundle our node packages --- stream, Axios, timeago to be used on the frontend.

```shell 

npm install browserify

browserify main.js -o bundle.js

browserify ./src/Login/index.js -o login.bundle.js
```

You can now run the `index.html` file in your public directory with any [live server](https://www.npmjs.com/package/live-server) or anything else.

