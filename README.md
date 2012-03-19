# XLR8R

XLR8R is a small web-based app that creates 3D sound effect based on accelerometer data sent by iOS 4.2+ devices. It uses the following technologies:

* DeviceOrientation API (available in Mobile Safari on iOS 4.2+ devices)
* Web Audio API (available in latest versions of Google Chrome)
* Websocket support in socket.io (node.js module)

### Install

* Install [node.js][1] and [npm][2]  
* Run `npm install` to fetch node dependencies ([express][3] framework and [socket.io][4])

### Having fun with XLR8R

* Start the server by running `node server.js`
* Plug in headphones into your computer
* Open `http://<server host>:8888/room` on your computer's browser
* Open `http://<server host>:8888` on your iPhone/iPod
* Move your mobile device and you should see the red dot moving in computer's browser as well as the audio sample moving accordingly (the graphic representation is a top view where the red dot is the audio source and the green dot is you)

### Notes

Chrome Web Audio support on Linux doesn't output clear sound, seems to work better on Windows.

[1]: http://nodejs.org/
[2]: http://npmjs.org/
[3]: http://expressjs.com/
[4]: http://socket.io/
