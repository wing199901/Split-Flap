# Updating Split-Flap
To update split-flap, we follow these steps:
1. Generate Data
2. Replace Data
3. Capture Video
Follow the following steps in VSCode, unless stated otherwise

### 1. Generate Data
1. Edit `IDX_START` and `IDX_END` as needed
2. Open command prompt
3. Type and execute:
	`cd helper`
	`python helper-autodata.py`
4. Wait until file(s) is ready

### 2. Replace Data
1. Copy `splitflap-css-<date>-<time>.txt` content into custom.css file, in between the noted areas (see inside custom.css)
2. Copy `splitflap-<date>-<time>.txt` content into app.js file, in between the noted areas (see inside app.js)
2. Copy `splitflap-customjs-<date>-<time>.txt` content into custom.js file, in between the noted areas (see inside custom.js)
3. Replace `public\plugins\arrivals\airline_logos.png` as needed

### 3. Capture Video
1. Open command prompt
2. Make sure you are in the root folder
3. Type and execute:
    `nodemon .`
4. Open internet browser
5. Capture the screen, until the whole split flap cycle finishes
6. Edit and compress captured video as needed