exports.action = function(data, callback, config, SARAH){
  var exec = require('child_process').exec;
  // Verify config
  phrase = data.phrase;
  console.log('Phrase: ' + phrase);
  exec('wget -o plugins/raspeak/logWGET.txt -O plugins/raspeak/rasphrase.mp3 --user-agent="" "http://translate.google.com/translate_tts?ie=utf-8&tl=fr&q=' + phrase + '"');
  exec('omxplayer -o ' + config.modules.raspeak.output + ' plugins/raspeak/rasphrase.mp3');
  callback({'tts' : 'Action effectuée'});
}
