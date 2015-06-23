// brick setup
b = B[(M = Math)[f="floor"](M[f](M.random() * 7))];
P = { x: 8, y: 0};		// brick position
i = 0;					// brick index
g = [];					// grid in the time of the interval
G = []; 				// overall grid
L = "length";
I = setInterval(function(o, c, bb, x, y, by, bx, R, r) {
	if(!b[i]) i=0;

	bb = b[i];

	// draw grid
	for (y = 0; y < 30; y++) {
		g[y] = [];
		if(!G[y]) G[y] = [];
		for (x = 0; x < 17; x++) {
			g[y][x] = G[y][x];
		}
	}

	// draw brick
	R = {};
	for (y = 0; y < 30; y++) {
		R[y] = 1;
		for (x = 0; x < 17; x++) {
			if(x == P.x && y == P.y) {
				for (by = 0; by < bb[L]; by++) {
					for (bx = 0; bx < bb[by][L]; bx++) {
						if(bb[by][bx]) {
							g[y+by][x+bx] = bb[by][bx];

							// check collision
							if(G[y+by+1] && G[y+by+1][x+bx]) c = 1
						}
					}
				}
			}
			if(!g[y][x]) delete R[y];
		}
	}



	// draw html
	o = "";
	for (y = 0; y < 30; y++) {
		for (x = 0; x < 17; x++) {
			o += g[y][x] ? "<b></b>" : "<i></i>"
		}
		o += "\n";
	}

	p.innerHTML = o;

	P.y++;

	if(P.y + bb[L] == 31 || c) {
		b = B[M[f](M[f](M.random() * (7)))];
		P.x = 12;
		P.y = i = 0;
		G = g.slice(0);
	}

	// complete rows
	for(r in R) {
		for (y = r; y > 0; y--) {
			g[y] = g[y-1] ? g[y-1] : [];
		}
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
