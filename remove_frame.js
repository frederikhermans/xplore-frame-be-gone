frames = document.getElementsByTagName('frame');

if (frames.length == 2) {
	top.location = frames[1].getAttribute('src');
}
