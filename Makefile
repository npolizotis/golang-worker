all: dist js wasm
dist:
	mkdir dist
wasm:
	tinygo build -o dist/main.wasm -target wasm src/go/main.go
js: shim
	npm install && npm run build

shim: 
	cp src/js/shim.mjs dist/ 