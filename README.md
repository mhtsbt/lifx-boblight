lifx-boblight
=============

Use your lifx-bulb togheter with boblight

This project is still a WIP!


How to use this script?
=============

1. Make sure you have installed node and bobligthd.
2. run npm install in the lifx-boblight directory 
3. add the following device to your boblightd config: 
```
[device]
name            device1
output          node /path-of-your-script/lifx-boblight/bobx.js
channels        3
type            popen
interval        5000
debug           off
```
enjoy! 
