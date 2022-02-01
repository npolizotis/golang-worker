require("./polyfill_performance.js");
require("./wasm_exec.js");

exports.Go = {
    New() {
	 return new Go()	
    },
}

