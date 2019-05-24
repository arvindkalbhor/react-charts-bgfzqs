import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Doughnut, Pie } from 'react-chartjs-2';
import { pieceLabel } from 'chartjs-plugin-labels';

//reference
//https://emn178.github.io/chartjs-plugin-labels/samples/demo/
//https://www.chartjs.org/docs/latest/charts/doughnut.html
//https://github.com/emn178/chartjs-plugin-labels

// const data = {
// 	labels: [
// 		'Red',
// 		'Green',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [25, 25, 25],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		]
// 	}],
//   options:[{
//     pieceLabel: {
//    render: ''
//     }
//   }]
// };

// const data = {
// 	labels: [
// 		'Red',
// 		'Blue',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [50, 20, 30],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
//     hoverBorderColor:[
//       '#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
//     ],
//     hoverBorderWidth:[
//       10,10,10
//     ],
//     borderColor:[
//       '#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
//     ],
//     borderWidth:[5,5,5]
// 	}],
//   options:[{
//     pieceLabel: {
//    render: 'sdfd'
//     }
//   }],
//   text: '20%',
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data: {
        labels: ['Red',
          'Blue',
          'Yellow'],
        datasets: [{
          data: ['50', '20', '30'],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBorderColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBorderWidth: [
            10, 10, 10
          ],
          borderColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          borderWidth: [5, 5, 5]
        }],
        options: {
          pieceLabel: {
            labels: [{
              render: function(){return 'label'},
            },
            {
              render: 'label',
            },
            {
              render: 'label',
            }
            ]
          }
        },
        text: '20',
      }
    };
  }

  componentDidMount() {
    // let data = this.state.data;
    // data.options[0].pieceLabel.render = 'label'
    // this.setState({
    //   data: data
    // })
    // console.log(pieceLabel)
    // var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    // Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    //   draw: function() {
    //     originalDoughnutDraw.apply(this, arguments);

    //     var chart = this.chart;
    //     var width = chart.chart.width,
    //         height = chart.chart.height,
    //         ctx = chart.chart.ctx;

    //     var fontSize = (height / 114).toFixed(2);
    //     ctx.font = fontSize + "em sans-serif";
    //     ctx.textBaseline = "middle";

    //     var sum = 0;
    //     for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
    //       sum += chart.config.data.datasets[0].data[i];
    //     }

    //     var text = sum,
    //         textX = Math.round((width - ctx.measureText(text).width) / 2),
    //         textY = height / 2;

    //     // ctx.fillText(0,textX, textY);
    //   }
    // });
  }

  render() {
    let test = pieceLabel;//
    return (
      <div>
        <Pie data={this.state.data} />
        <Doughnut data={this.state.data} />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
