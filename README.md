JavaScript EventLoop / aSyncronous callback help
===================================

So earlier today, I've had a hard time to visualize and understand how JavaScript event loops functions. I decided to play with a few ways to help myself visualize and write ways in both sync and aSync ways without any tools from a very basic level.

Eventually I'd like to build this repo up to have various files to better learn/write/teach how JavaScript functions on a lower level.

In the meantime, I have uploaded a very simple app.js file, showing one synchronous method by not using a setTimeout , and one by using setTimeout to simulate an aSynchronous event.

You should get a console.log of about:

```

//aSYNC WAY
node app.js
doaSyncTask Start:  1433466765167
doaSyncTask-> iterator Done:  1433466765168
doaSyncTask Done:  1433466765168
iterator Start:  1433466765178
iterator End:  1433466765211
1000000
CallBack Finish Time:  1433466765211

//SYNC WAY
node app.js
doSyncTask Start:  1433466812565
iterator Start:  1433466812566
iterator End:  1433466812599
1000000
CallBack Finish Time:  1433466812605
doSyncTask-> iterator Done:  1433466812605
doSyncTask Done:  1433466812605
```
