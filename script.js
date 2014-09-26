if (localStorage.greeting) {
	console.log('localStorage is set');
	alert('Hello ' + localStorage.greeting);
}
else if (document.cookie !== 'localStorageIsSet'){
	// Use a cookie to track the storage make sure we dont reset it if it should be set
	localStorage.setItem('greeting', 'world');
	document.cookie = 'localStorageIsSet;expires=Thu, 01 Jan 2020 00:00:01 GMT;';
	console.log('localStorage is now set');
}
else {
	console.log('localStorage not set');
}
