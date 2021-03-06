/*
	This is an example of a set implemented in javascript

	References:
	http://www.javascriptexamples.org/2011/01/17/how-to-implement-a-set-in-javascript/

	Mark Veltzer <mark@veltzer.net>
*/
var Set=function() {
	this.items={};
	for(var i in arguments) {
		this.add(arguments[i]);
	}
};
Set.prototype.add=function(o) {
	this.items[o]=true;
};
Set.prototype.remove=function(o) {
	delete this.items[o];
};
Set.prototype.addObject=function(o) {
	for(var prop in o) {
		this.add(prop);
	}
};
Set.prototype.removeObject=function(o) {
	for(var prop in o) {
		this.remove(prop);
	}
};
Set.prototype.clear=function() {
	this.items={};
};
Set.prototype.toString=function() {
	var a=[];
	for(var x in this.items) {
		a.push(x);
	}
	return a.join(',');
};
Set.prototype.foreach=function(func) {
	for(var x in this.items) {
		func(x);
	}
};
