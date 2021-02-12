// Note this is for Jammming App


// let accessToken;

// const Spotify = {
//     getAccessToken() {
//         if (accessToken) {
//             return accessToken;
//         }

//         // check for accessToken match
//         const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
//         const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

//         if (accessTokenMatch && expiresInMatch) {
//             accessToken = accessTokenMatch[1];
//             const expiresIn = Number(expiresInMatch[1]);

//             // help you wipe the access token and URL parameters
//             window.setTimeout(() => accessToken = '', expiresIn * 1000);
//             window.history.pushState('Access Token', null, '/');

//             return accessToken;
//         }
//     }
// }

// export default Spotify;