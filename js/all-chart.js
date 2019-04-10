window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)',
	
	0: 'rgb(255, 99, 132)',
	1: 'rgb(255, 159, 64)',
	2: 'rgb(255, 205, 86)',
	3: 'rgb(75, 192, 192)',
	4: 'rgb(54, 162, 235)',
	5: 'rgb(153, 102, 255)',
	6: 'rgb(201, 203, 207)',
};

var configChartLineIn = {
	type: 'line',
	data: {
		labels: [],
		datasets: []
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'ราคาในประเทศ'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'เดือน'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'ราคา'
				}
			}]
		}
	}
};

var configChartLineOut = {
	type: 'line',
	data: {
		labels: [],
		datasets: []
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'ราคาส่งออกโดยเฉลี่ย'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'เดือน'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'ราคา'
				}
			}]
		}
	}
};

$(function() {
	window.myLineIn = new Chart($("#chart-line-in")[0], configChartLineIn);
	window.myLineOut = new Chart($("#chart-line-out")[0], configChartLineOut);
});
