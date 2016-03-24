const tap = require('tap');
const is = require('./');


tap.equal(is(13).thirteen(), true);

tap.equal(is('13').thirteen(), true);

tap.equal(is('thirteen').thirteen(), true);
tap.equal(is('Thirteen').thirteen(), true);
tap.equal(is('Rem Hadley').thirteen(), true);

tap.equal(is('https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg').thirteen(), true);
tap.equal(is('http://www.metal-archives.com/images/1/5/3/7/153772.jpg').thirteen(), false);

tap.equal(is(1101).thirteen(), true);
tap.equal(is('1101').thirteen(), true);

tap.equal(is("13i").thirteen(), true);
tap.equal(is("13+13i").thirteen(), true);
tap.equal(is("12i").thirteen(), false);
tap.equal(is("XIII").thirteen(), true);
