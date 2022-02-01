import wasmModule from 'main.wasm'
import bundle from 'index.js'

const newGo = bundle.Go

export default {
	async fetch (request, env, ctx) {
		const headers = { 'Content-Type': 'text/html;charset=UTF-8' }

		const go = newGo.New()
		go.importObject.env["main.sayHello"] = () => {
			console.log("Hello from the imported function!");
		};

		let wasm=await WebAssembly.instantiate(wasmModule, go.importObject)

		go.run(wasm)
		//wasm.exports.runSayHello()
		wasm.exports.runSayHello()
		return new Response(`success: ${wasm.exports.multiply(2, 3)}`, { headers })
	}
}
