# KB App Log Viewer

Quick and dirty parser for Keybase app logs

# Usage
Basic

```tail -f ~/Library/Logs/Keybase.app.log | node index.js```

Filter with grep

```cat app-debug.log | grep "\sprovision:" | node index.js```
