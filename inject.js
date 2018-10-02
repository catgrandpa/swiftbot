var videoEl = document.querySelector('.phil-swift-damage .phil-swift-damage--container video');
if (videoEl == null) {
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'phil-swift-damage';
	div.style.cssText = ('position: fixed; bottom: 0px; z-index: 99999; right: 0px; height: 530px; width: 720px; pointer-events: none;');
	div.innerHTML = '<div class="phil-swift-damage--container" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="960" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
	var video = document.querySelector('.phil-swift-damage .phil-swift-damage--container video');
	video.style.visibility = "hidden";
	video.src = chrome.extension.getURL("/media/phillyswiftsdamagemontage.webm");
	video.load();
	video.addEventListener('loadeddata', function() {
	   video.style.visibility = "visible";
	   video.play();
	}, false);
	video.onerror = function() {
    	alert("that's a little TOO much damage. try a different page.");
	};
} else {
	videoEl.play();
}
