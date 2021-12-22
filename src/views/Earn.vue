<template>
    <div>
        <b-card header-tag="header">
            <template #header >
                <div class="d-flex justify-content-between p-2">
                    <h1 class="mb-0 d-inline">درآمد (Earn)</h1>
                    <b-button pill variant="outline-secondary" class="mt-2 py-0" id="guid-button">راهنما <font-awesome-icon icon="fa-solid fa-circle-exclamation" class="mr-2 "/></b-button>
                </div>
            </template>
            <div class="row">
                <div class="col-md-6">
                    <Calculator />
                </div>
                <div class="col-md-6 d-flex justify-content-around">
                    <div class="chart-container">
                        <doughnut-chart :data="chart_1_data" :options="chart_1_options">some text here</doughnut-chart>
                    </div>
                    <div class="chart-container">
                        <doughnut-chart :data="chart_1_data" :options="chart_1_options">some text here</doughnut-chart>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <p>لیست رمز ارزها و پاداش‌ها:</p>
                <b-table hover :fields="table_1.fields" :items="table_1.items">
                    <template #cell(name)="data">
                        <img :src="'/Icons/'+data.value+'.png'" alt="">&nbsp;{{ data.value.toUpperCase() }}
                    </template>
                    <template #cell(unstaking)>
                        <a href="#"><img src="/Icons/Unstaking Icon.svg" alt=""></a>
                    </template>
                    <template #cell(staking)>
                        <a href="#"><img src="/Icons/Staking Icon.svg" alt=""></a>
                    </template>

                
                </b-table>
                <div class="d-flex justify-content-end">
                    <b-pagination> </b-pagination>
                </div>
            </div> 
        </b-card>
        <b-card header-tag="header" class="mt-3">
           
            <div class="mt-4">
                <p>تاریخچه‌ی تراکنش‌ها:</p>
                <b-table hover :fields="table_2.fields" :items="table_2.items">
                    <template #cell(name)="data">
                        <img :src="'/Icons/'+data.value+'.png'" alt="">&nbsp;{{ data.value.toUpperCase() }}
                    </template>
                    <template #cell(status)="data">
                        <b-badge pill variant="success" v-if="data.value=='success'" class="w-25 p-2">موفق</b-badge>
                        <b-badge pill variant="danger" v-if="data.value=='failed'" class="w-25 p-2">ناموفق</b-badge>
                    </template>

                
                </b-table>
                <div class="d-flex justify-content-end">
                    <b-pagination> </b-pagination>
                </div>
            </div> 
        </b-card>
        
    </div>
</template>
<script>
import Calculator from '../components/Calculator.vue'
import DoughnutChart from '../components/DoughnutChart.vue'

export default {
    name: 'Earn',
    components: {
        Calculator,
        DoughnutChart
    },
    data() {
        return {
            chart_1_data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }], 
            },
            chart_1_options: {
                responsive: true,
                cutoutPercentage: 70,
            },
            table_1: {
                fields: [
                    { key: 'name', label: 'نام ارز' },
                    { key: 'bonus', label: 'پاداش (٪)' },
                    { key: 'balance', label: 'موجودی کل' },
                    { key: 'stake_balance', label: 'موجودی استک' },
                    { key: 'paid_bonus', label: 'پاداش تسویه شده' },
                    { key: 'total_bonus', label: 'مجموع پاداش' },
                    { key: 'unstaking', label: 'آزاد سازی' },
                    { key: 'staking', label: 'استیک' },

                ],
                items: [
                    {"name": "btc", "bonus": 12, 'balance': 120, 'stake_balance': 0.00, 'paid_bonus': 0.00, 'total_bonus': 0.00},
                    {"name": "eth", "bonus": 12, 'balance': 120, 'stake_balance': 0.00, 'paid_bonus': 0.00, 'total_bonus': 0.00},
                    {"name": "dot", "bonus": 12, 'balance': 120, 'stake_balance': 0.00, 'paid_bonus': 0.00, 'total_bonus': 0.00},
                    {"name": "usdt", "bonus": 12, 'balance': 120, 'stake_balance': 0.00, 'paid_bonus': 0.00, 'total_bonus': 0.00},
                    {"name": "trx", "bonus": 12, 'balance': 120, 'stake_balance': 0.00, 'paid_bonus': 0.00, 'total_bonus': 0.00},
                ]
            },
            table_2: {
                fields: [
                    { key: 'name', label: 'نام ارز' },
                    { key: 'type', label: 'نوع تراکنش' },
                    { key: 'amount', label: 'مقدار' },
                    { key: 'date', label: 'تاریخ تراکنش' },
                    { key: 'status', label: 'وضعیت' }

                ],
                items: [
                    {"name": "btc", "type": "دریافت سود", 'amount': 0.123, 'date': "۸ نوامبر ۲۰۲۰-۸:۱۰ صبح", 'status': 'success'},
                    {"name": "btc", "type": "دریافت سود", 'amount': 0.123, 'date': "۸ نوامبر ۲۰۲۰-۸:۱۰ صبح", 'status': 'failed'},
                    {"name": "btc", "type": "دریافت سود", 'amount': 0.123, 'date': "۸ نوامبر ۲۰۲۰-۸:۱۰ صبح", 'status': 'success'},
                    {"name": "btc", "type": "دریافت سود", 'amount': 0.123, 'date': "۸ نوامبر ۲۰۲۰-۸:۱۰ صبح", 'status': 'failed'},
                    {"name": "btc", "type": "دریافت سود", 'amount': 0.123, 'date': "۸ نوامبر ۲۰۲۰-۸:۱۰ صبح", 'status': 'success'},
                    {"name": "btc", "type": "دریافت سود", 'amount': 0.123, 'date': "۸ نوامبر ۲۰۲۰-۸:۱۰ صبح", 'status': 'success'},
                ]
            }
        }
    },

}
</script>
<style scoped lang="scss">
    .card {
        header {
            background-color: inherit;
            button {
                height: 20px;
                width: 70px;
                font-size: 10px;
            }
        }
    }

    .chart-container {
        width: 200px;
        height: 200px;
        display: inline-block;
    }

</style>
