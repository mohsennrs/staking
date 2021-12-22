<script>
import { Doughnut } from 'vue-chartjs'
export default {
    extends: Doughnut,
    props:['data', 'options'],
    mounted () {
        // this.addPlugin({
        //     id: 'my-plugin',
        //     beforeDraw: function(chart) {
        //         var width = chart.chart.width;
        //         var height = chart.chart.height;
        //         var ctx = chart.chart.ctx;

        //         ctx.restore();
        //         var fontSize = (height / 114).toFixed(2);
        //         ctx.font = fontSize + "em sans-serif";
        //         ctx.textBaseline = "middle";

        //         var text = 880;
        //         var textX = Math.round((width - ctx.measureText(text).width) / 2);
        //         var textY = height / 2;

        //         ctx.fillText(text, textX, textY);
        //         ctx.save();
        //     }
        // })
        this.renderChart(this.data, this.options);
    }
}
</script>