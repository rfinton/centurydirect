function animate(t,p,d) {
	var o = {};
	var r = {};
	o[t] = [p,-p];
	r[t] = [-p,p];

	$('#note')
		.velocity(o, {
			duration: d,
			easing: [0.445, 0.05, 0.55, 0.95],
			queue: false 
		})
		.velocity(r, {
			delay: d,
			duration: d,
			easing: [0.445, 0.05, 0.55, 0.95],
			queue: false,
			complete: function() {
				animate(t,p,d);
			}
		});
}

function present(h) {
	$('body').velocity('scroll');
	$('.company-logo').velocity('fadeIn', { duration: 0 });
	$('svg, rect').velocity({ width: '100%', height: '3000px' }, { duration: 0 });
}

function handler(s) {
	$('.hands').velocity({ translateX: ['0%','-100%'] }, { delay: 500, duration: 1000 });
	$('.note').velocity({ opacity: [1,0] }, { duration: 3000, queue: false });
	$('#note').velocity({ 
		transformOriginY: '0px',
		opacity: [1,1], 
		scale: [s,1.3]
	}, {
		duration: 0,
		queue: false,
		complete: function() {
			animate('skewX', 2, 1200);
			animate('rotateY', 4, 2000);
			$('.stage-2, .page-footer').velocity( 'fadeIn', { delay: 500, duration: 1000 });
		}
	});
}


window.onload = function() {
	present(1);
	handler(1);
};