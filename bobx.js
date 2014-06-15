var lifx = require('lifx');
var lx   = lifx.init();
var converter = require("color-convert")();

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

var ready = false;

lx.on('bulb', function(b) {
	console.log('New bulb found: ' + b.name);
	lx.lightsOn();
	ready = true;
});

lx.on('gateway', function(g) {
	console.log('New gateway found: ' + g.ipAddress.ip);
});



process.stdin.on('data', function (text) {
	//console.log('received data:', util.inspect(text));

		//console.log( util.inspect(text));

	var lines = util.inspect(text).split('\n');
//console.log(lines);


	for(var l =0;l<lines.length;l++) {

		var data = lines[l];

	data = data.replace("\'","");
	data = data.split(" ");


	//console.log(text);

	data[0] = data[0]*255;
	data[1] = data[1]*255;
	data[2] = data[2]*255;

		//console.log(data);

		var output = converter.rgb(data[0], data[1], data[2]).hsl();

		//console.log(output);

		output[0] = Math.ceil((output[0]/360)*65535);
		output[1] = Math.ceil((output[1]/100)*65535);
		output[2] = Math.ceil((output[2]/100)*65535);

	//var output = converter.rgb(Math.ceil(data[0]), Math.ceil(data[1]), Math.ceil(data[2])).hsl();



	// hue,    saturation, luminance, whiteColour, fadeTime
	//lx.lightsColour(output[0], output[1], output[2], 0, 0); 
	if (ready) {
		//	lx.lightsColour(0x0000, 0xffff, 1000, 0, 0);
		//console.log(output);
		lx.lightsColour( output[0], output[1],  output[2], 0, 0);
	}
	//console.log(output[0].toString(16));

}

	//if (on) { lx.lightsOff(); on = false; } else { lx.lightsOn(); on = true; }

});