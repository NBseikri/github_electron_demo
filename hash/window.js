// Run this function after the page has loaded
$(function () {
var crypto = require('crypto') // https://nodejs.org/api/crypto.html

$('#text-input').bind('input propertychange', function () {
  var text = this.value

  var t0MD5 = performance.now();
  // MD5
  var md5 = crypto.createHash('md5').update(text, 'utf8').digest('hex')
  $('#md5-output').text(md5)

  // SHA-1
  var sha1 = crypto.createHash('sha1').update(text, 'utf8').digest('hex')
  $('#sha1-output').text(sha1)

  // SHA
  var sha = crypto.createHash('sha').update(text, 'utf8').digest('hex')
  $('#sha-output').text(sha)

  // SHA-256
  var sha256 = crypto.createHash('sha256').update(text, 'utf8').digest('hex')
  $('#sha256-output').text(sha256)

  // SHA-512
  var sha512 = crypto.createHash('sha512').update(text, 'utf8').digest('hex')
  $('#sha512-output').text(sha512)
})

// Focus input box
$('#text-input').focus()

})

var fs = require('fs');

document.ondrop = function (file) {
  file.preventDefault();
  var filePath = file.dataTransfer.files[0].path;
  console.log(filePath);
  var fs = require('fs');

  var content = fs.readFile(filePath, 'utf-8', function (err, data) {
          if(err){
              alert("An error ocurred reading the file :" + err.message);
              return;
          }
          // Change how to handle the file content
          console.log("The file content is : " + data);

    var d = data;
    var crypto = require('crypto') 

    var md5 = crypto.createHash('md5').update(d, 'utf8').digest('hex')
    $('#md5-output').text(md5)

    // SHA-1
    var sha1 = crypto.createHash('sha1').update(d, 'utf8').digest('hex')
    $('#sha1-output').text(sha1)

    // SHA
    var sha = crypto.createHash('sha').update(d, 'utf8').digest('hex')
    $('#sha-output').text(sha)

    // SHA-256
    var sha256 = crypto.createHash('sha256').update(d, 'utf8').digest('hex')
    $('#sha256-output').text(sha256)

    // SHA-512
    var sha512 = crypto.createHash('sha512').update(d, 'utf8').digest('hex')
    $('#sha512-output').text(sha512)
      });
  
};