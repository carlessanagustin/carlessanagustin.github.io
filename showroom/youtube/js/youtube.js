/**
 * @author carles san agustin
 *
 */

YouTubeClass = function(where) {
	var self = this;

	//self._init(where);
}
YouTubeClass.prototype._init = function(where) {
	var self = this;
	var player, tag, done=false, firstScriptTag; 

	tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";

	firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	self._onYouTubeIframeAPIReady(where);

}
YouTubeClass.prototype._onYouTubeIframeAPIReady = function(where) {
	var self = this;

	player = new YT.Player(where, {
		height : '390',
		width : '560',
		videoId : 'M7lc1UVf-VE'
	});
}

