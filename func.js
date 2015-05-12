// function basics

var identity = function(x){return x;};

var bind = Function.prototype.call.bind(Function.prototype.bind);

function applier(f){
	return function(args){
		return f.apply(null, args);
	}
}

function collectArgs(){
	return Array.prototype.slice.call(arguments);
}

var arrayOfOne = function(x){return x ? [x] : [];};

var compose = function(f, g){
	var fns = Array.prototype.slice.call(arguments).reverse();
	return function(x){
		fns.forEach(function(f){
			x = f(x);
		});
		return x;
	}
};

function mapper(f){
	return function(a){
		return a.map(f);
	};
}

var attrGetter = function(attr){
	return function(o){
		return o[attr];
	};
};

var methodCaller = function(method){
	return function(o){
		return o[method]();
	};
};

function flatten(arrays){
	return Array.prototype.concat.apply([], arrays);
}

// debug tools

function log(x){
	console.log(x);
}

// string tools

function splitter(separator){
	return function(s){
		return s.split(separator);
	};
}

function prefixer(prefix){
	return function(s){
		return prefix + s;
	};
}

// async tools

function then(def, fs){
	fs.forEach(function(f){
		def = def.then(f);
	});
	return def;
}

// dom tools

var children = function(){
	return this.childNodes;
};

function selector(s){
	return function(e){
		return $(s, e);
	}
}
