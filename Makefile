build:
	@npm run build >/dev/null

build-and-run: build
	@node dist/cart.js

.PHONY: build
