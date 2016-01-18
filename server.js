var fs = require('fs'),
  JSONStream = require('JSONStream'),
  es = require('event-stream');

var getStream = function () {
    var jsonData = 'data.json',
        stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        parser = JSONStream.parse('*');
        return stream.pipe(parser);
};

 getStream()
  .pipe(es.map(function(data) {
    console.log(data[0]);
  }));
