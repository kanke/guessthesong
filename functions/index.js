    // Copyright 2016, Google, Inc.
    // Licensed under the Apache License, Version 2.0 (the 'License');
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    //    http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an 'AS IS' BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.

    'use strict';

    process.env.DEBUG = 'actions-on-google:*';
    const App = require('actions-on-google').ApiAiApp;
    const functions = require('firebase-functions');
    var SpotifyWebApi = require('spotify-web-api-node');

    // [START YourAction]
    exports.yourAction = functions.https.onRequest((request, response) => {
      const app = new App({request, response});
      console.log('Request headers: ' + JSON.stringify(request.headers));
      console.log('Request body: ' + JSON.stringify(request.body));

    var accessToken = app.getUser().accessToken;
    var OAuth2 = google.auth.OAuth2;
    var oauth2Client = new OAuth2(
    441928656438-vc7tb8evhnblppjc32cvotb8at5vhf7e.apps.googleusercontent.com,
    WVJ0oL3n1eyH-DEf_9nE4UFx
    );
        
    oauth2Client.setCredentials({
    access_token: accessToken
    });
    
    app.getUser().authToken;
    function signInHandler(app) {
      if (app.getSignInStatus() === app.SignInStatus.OK) {
        let accessToken = app.getUser().accessToken;
        // access account data with the token
      } else {
        app.tell('You need to sign-in before using the app.');
      }
    }

        var spotifyApi = new SpotifyWebApi();
        
        
      // Fulfill action business logic
      function responseHandler (app) {
        // Complete your fulfillment logic and send a response
        app.tell('Hello, World!');
      }

      const actionMap = new Map();
      actionMap.set('input.welcome', responseHandler);

      app.handleRequest(actionMap);
    });
    // [END YourAction]
