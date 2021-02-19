
const animator = new Animator();


$(document.body).ready(function () {

    animator.hideAndFade($(`#initialText`))
    // animator.hideAndSlide($("#section1"));
    // animator.hideAndSlide($("#section2"));
    // animator.hideAndSlide($("#section3"));
})

function Animator() {

    this.hideAndFade = function (selector) {
        return $(selector).hide().fadeIn(2000);
    }
    this.hideAndSlide = function (selector) {
        return $(selector).hide().slideDown(2500);
    }
}


$.getJSON("https://v1.nocodeapi.com/wildneisuane/instagram/eSVqFcdQmuYWXiPj?limit=9", function (data) {
    console.log(data);

    var image = data.data[0].media_url
    var image1 = data.data[1].media_url
    var image2 = data.data[2].media_url
    var image3 = data.data[3].media_url
    var image4 = data.data[4].media_url
    var image5 = data.data[5].media_url
    var image6 = data.data[6].media_url
    var image7 = data.data[7].media_url
    var image8 = data.data[8].media_url

    console.log(image, image1,image2);

    $('.photo1').append('<img class="img-fluid instagramPhoto" href="https://www.instagram.com/premiumcleaning_usa/" src="' + image + '">');
    $('.photo2').append('<img class="img-fluid instagramPhoto" src="' + image1 + '">');
    $('.photo3').append('<img class="img-fluid instagramPhoto" src="' + image2 + '">');
    $('.photo4').append('<img class="img-fluid instagramPhoto" src="' + image3 + '">');
    $('.photo5').append('<img class="img-fluid instagramPhoto" src="' + image4 + '">');
    $('.photo6').append('<img class="img-fluid instagramPhoto" src="' + image5 + '">');
    $('.photo7').append('<img class="img-fluid instagramPhoto" src="' + image6 + '">');
    $('.photo8').append('<img class="img-fluid instagramPhoto" src="' + image7 + '">');
    $('.photo9').append('<img class="img-fluid instagramPhoto" src="' + image8 + '">');

    // for (x in data.data) {
    //     $('ul').append('<li><img src="' + data.data[x].media_url + '"></li>');
    //     $('ul').append('<p> @' + data.data[x].username + '<p/>');
    // }
})














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