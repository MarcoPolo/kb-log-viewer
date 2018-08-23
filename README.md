# KB App Log Viewer

Quick and dirty parser for Keybase app logs

# Usage
Basic

```tail -f ~/Library/Logs/Keybase.app.log | node index.js```

Filter with grep

```cat app-debug.log | grep "\sprovision:" | node index.js```

# Preview
![screen shot 2018-08-23 at 12 13 30 pm](https://user-images.githubusercontent.com/594035/44546844-0f010900-a6ce-11e8-9842-99c532ce628f.png)
