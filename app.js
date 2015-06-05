var array = [];

function callback(array) {
	console.log(array.length);
	console.log('CallBack Finish Time: ', Date.now());
}

// Old Way
function doSyncTask(a,b,c) {
	console.log('doSyncTask Start: ', Date.now());
	
	if(a == true) {
		callback(iterator(b,c, array));
		console.log('doSyncTask-> iterator Done: ', Date.now());
	}
	console.log('doSyncTask Done: ', Date.now());
}

doSyncTask(true, 0, 1000000);

// aSync Way
function doaSyncTask(a,b,c) {
	console.log('doaSyncTask Start: ', Date.now());
	
	if(a == true) {
		setTimeout(function () {
			callback(iterator(b,c, array));
		}, 0);
		console.log('doaSyncTask-> iterator Done: ', Date.now());
	}
	console.log('doaSyncTask Done: ', Date.now());
}

//doaSyncTask(true, 0, 1000000);


function iterator(start, end, array) {
	console.log('iterator Start: ', Date.now());
	for(var i = start; i < end; i++) {
		array.push(i);
	}
	console.log('iterator End: ', Date.now());
	return array;
}