// brick setup
b = B[(M = Math)[f="floor"](M[f](M.random() * 7))];
P = { x: 8, y: 0};		// brick position
i = 0;					// brick index
g = [];					// grid in the time of the interval
G = []; 				// overall grid
L = "length";
I = setInterval(function(hit) {
	F = b[i]; // current brick

	// draw grid
	for (y = 0; y < 30; y++) {
		g[y] = [];
		if(!G[y]) G[y] = [];
		for (x = 0; x < 17; x++) {
			g[y][x] = G[y][x];
		}
	}

	// draw brick
	H = {}; // hit map
	for (y = 0; y < 30; y++) {
		H[y] = 1;
		for (x = 0; x < 17; x++) {
			if(x == P.x && y == P.y) {
				for (j = 0; j < F[L]; j++) {
					for (k = 0; k < F[j][L]; k++) {
						if(F[j][k]) {
							g[y+j][x+k] = F[j][k];

							// check collision
							if(G[y+j+1] && G[y+j+1][x+k]) hit = 1
						}
					}
				}
			}
			if(!g[y][x]) delete H[y];
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

	if(P.y + F[L] == 31 || hit) {
		b = B[M[f](M[f](M.random() * (7)))];
		P.x = 8;
		P.y = i = 0;
		G = g.slice(0);
	}

	// complete rows
	for(r in H) {
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
	if(!b[i])i=0;
};
