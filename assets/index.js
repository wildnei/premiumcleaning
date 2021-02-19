const animator = new Animator();


$(document.body).ready(function () {

    animator.hideAndFade($(`#initialText`))
    animator.hideAndSlide($("#section1"));
    animator.hideAndSlide($("#section2"));
    animator.hideAndSlide($("#section3"));
})

function Animator() {
    
    this.hideAndFade = function (selector) {
        return $(selector).hide().fadeIn(1000);
    }
    this.hideAndSlide = function (selector) {
        return $(selector).hide().slideDown(2500);
    }
 }





var token = 'IGQVJYZA2NPV25YeTVrTFlYZAzNubW12cVFrSWlza3RvVFo3YkVUU1MwU3NmYjF4RUdUQkpYeTVtSVE5N2NiMFU3ME8tcVBtZAXZAzS1FBamE1TnFxMTNwRXRLbk1uVnVNc2duNVF2bktISlRyRzRIY2p2NwZDZD',
    userId = 935944573831494, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 4; // how much photos do you want to get

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userId + '/media/recent', // or /users/self/media/recent for Sandbox
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token, count: num_photos },
    success: function (data) {
        console.log(data);
        for (x in data.data) {
            $('ul').append('<li><img src="' + data.data[x].images.low_resolution.url + '"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
            // data.data[x].images.thumbnail.url - URL of image 150х150
            // data.data[x].images.standard_resolution.url - URL of image 612х612
            // data.data[x].link - Instagram post URL 
        }
    },
    error: function (data) {
        console.log(data); // send the error notifications to console
    }
});

// https://api.instagram.com/oauth/authorize
//   ? client_id = 935944573831494
//     & redirect_uri=https://wildnei.github.io/premiumcleaning/
//   & scope=user_profile, user_media
//     & response_type=code

// Instagram app ID: 165734885159279
// Token: IGQVJYZA2NPV25YeTVrTFlYZAzNubW12cVFrSWlza3RvVFo3YkVUU1MwU3NmYjF4RUdUQkpYeTVtSVE5N2NiMFU3ME8tcVBtZAXZAzS1FBamE1TnFxMTNwRXRLbk1uVnVNc2duNVF2bktISlRyRzRIY2p2NwZDZD



// function Instagram(title) {
//     this.title = title;
// }

// const instagramPhoto = new Instagram('Superman');

// Instagram.prototype.logInfo = function () {
//     console.log(`${this.media_url} was released in ${this.media_url}`);
// };

// Instagram.prototype.getMovieInfo = function () {
//     $.ajax({
//         url: `https://graph.instagram.com/165734885159279?fields={fields}&access_token=IGQVJVYXJCTldBbm1Ua2FwT29WV1dxU1lyOVhadWx0Snc4elM4SzA1ZAjAzX1Njck5ETjZALcjJDUUFMbzJzZAmFxd1pWSkFJbGtNUXZAaMHZATMU11S3NTdDhvY0dyR1dlZATJSX1R4QkNuRVJab2tsQW54SAZDZD`
//     }).then(data => {
//         //set info properties
//         this.media_url = data.media_url;
//     }).catch(err => console.error(err));
// }

// Instagram.prototype.createCard = function () {
//     return `
//   <div class='card'>${this.media_url}</div>`
// }

// intagramPhoto.logInfo();
// const html = superman.createCard();
// $(body).append(html)