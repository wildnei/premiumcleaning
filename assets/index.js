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


// function addEffect(value1) {
//     this.divName = value1
//     this.addDivName = function () {
//         console.log(`$(${this.divName}).hide().fadeIn(2000)`)
//     }
// }

// const div1 = new addEffect("#initialText");

// div1.addDivName()

// $.ajax({
//     url: "https://graph.instagram.com/165734885159279?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJVRFFjX3o5NUsyQlZA1MFluM25uZA0syQXY2M1pXcFluQVF5RXZAtVDR6ZAjRaVTRsZAzlIOEMwbk5ScmdwLVVXSGc2cldwbnlqN1JoMld3TTMtd3J4Tkhjanpzem9MT0hzdGNWWnFUV1htaTJUU3Q2QgZDZD",
//     type: 'get',
//     }).then(function (response) {
//     console.log(response);
// })

// https://api.instagram.com/oauth/authorize
//   ? client_id = 935944573831494
//     & redirect_uri=https://wildnei.github.io/premiumcleaning/
//   & scope=user_profile, user_media
//     & response_type=code

// Instagram app ID: 165734885159279
// Token: IGQVJVYXJCTldBbm1Ua2FwT29WV1dxU1lyOVhadWx0Snc4elM4SzA1ZAjAzX1Njck5ETjZALcjJDUUFMbzJzZAmFxd1pWSkFJbGtNUXZAaMHZATMU11S3NTdDhvY0dyR1dlZATJSX1R4QkNuRVJab2tsQW54SAZDZD