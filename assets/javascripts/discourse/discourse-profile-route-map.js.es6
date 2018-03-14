export default function() {
	this.route('profile', function(){
	  this.route('index', {path: '/'});
	});
}
