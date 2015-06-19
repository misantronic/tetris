// brick setup
b = B[(M = Math)[f="floor"](M[f](M.random() * 7))];
P = { x: 12, y: 0};		// brick position
i = 0;					// brick index
g = [];					// grid in the time of the interval
G = []; 				// overall grid
L = "length";
I = setInterval(function(o, c, bb, x, y, by, bx) {
	if(!b[i]) i=0;

	bb = b[i];

	// draw grid
	for (y = 0; y < 24; y++) {
		g[y] = [];
		if(!G[y]) G[y] = [];
		for (x = 0; x < 30; x++) {
			g[y][x] = G[y][x];
		}
	}

	// draw brick
	for (y = 0; y < 24; y++) {
		for (x = 0; x < 30; x++) {
			if(x == P.x && y == P.y) {
				for (by = 0; by < bb[L]; by++) {
					for (bx = 0; bx < bb[by][L]; bx++) {
						g[y+by][x+bx] = bb[by][bx];

						// check collision
						if(G[y+by+1] && G[y+by+1][x+bx]) c = 1
					}
				}
			}
		}
	}

	// draw html
	o = "";
	for (y = 0; y < 24; y++) {
		for (x = 0; x < 30; x++) {
			o += g[y][x] ? "X" : " "
		}
		o += "\n";
	}

	p.innerHTML = o;

	P.y++;

	if(P.y + bb[L] == 25 || c) {
		b = B[M[f](M[f](M.random() * (7)))];
		P.x = 12;
		P.y = i = 0;
		G = g.slice(0);
	}
}, 100);

// key events
onkeydown = function(e, x) {
	// move
	x = e["keyCode"];

	// move brick
	x == 39 ? P.x++ : x == 37 ? P.x-- : x == 38 && i++;
};
