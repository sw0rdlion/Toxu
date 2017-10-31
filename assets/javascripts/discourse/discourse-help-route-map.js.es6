export default function() {
	this.route('help', function(){
	  this.route('index', {path: '/'});
	});
}
