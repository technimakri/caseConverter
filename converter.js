let upperCase = document.getElementById('upper-case');
let lowerCase = document.getElementById('lower-case');
let properCase = document.getElementById('proper-case');
let sentenceCase = document.getElementById('sentence-case');
let textToConvert = document.getElementById('text-to-convert')
let saveText = document.getElementById('save-text-file')

function toSentenceCase(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
    return toReplace.toUpperCase();
  })
}

function toProperCase(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.replace(/^\w{1}|\s+\w{1}/gi, function(toReplace) {
    return toReplace.toUpperCase();
  })
}

function download(text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', 'text.txt');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

upperCase.addEventListener('click', function () {
  textToConvert.value = textToConvert.value.toUpperCase()
});

lowerCase.addEventListener('click', function () {
  textToConvert.value = textToConvert.value.toLowerCase()
});

properCase.addEventListener('click', function () {
  textToConvert.value = toProperCase(textToConvert.value)
});

sentenceCase.addEventListener('click', function () {
  textToConvert.value = toSentenceCase(textToConvert.value)
});

saveText.addEventListener('click', function () {
  download(textToConvert.value)
});


