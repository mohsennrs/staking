<template>
    <div>
        <b-card id="select_form" bg-variant="light" 
        style="max-width: 420px;height:200px;"
        >    
            <div>
                 <b-form-select variant="white" v-model="selected" :options="options">
                     <template #first>
                        <b-form-select-option :value="null" disabled>انتخاب ارز</b-form-select-option>
                    </template>
                 </b-form-select>
                <!-- <b-dropdown id="dropdown-1" text="انتخاب ارز" right class="m-md-2" variant="white" block menu-class="text-align-right">
                    <b-dropdown-item key="btc">
                        <img src="/Icons/btc.png" alt="BTC">
                        Bitcoin
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <img src="/Icons/eth.png" alt="BTC">
                        Etherium
                    </b-dropdown-item>
                </b-dropdown> -->
            </div>
            <div class="d-flex justify-content-between p-2 pt-5 staking-group">
                <b-button variant="white" :disabled="!selected">
                    <img src="/Icons/Unstaking Icon.svg" alt="Unstaking" class="pl-2"> 
                    آزادسازی
                </b-button>
                <b-button variant="white" :disabled="!selected">
                    <img src="/Icons/Staking Icon.svg" alt="Staking" class="pl-2"> 
                    استیک کردن
                </b-button>

            </div>
        </b-card>

    </div>
</template>
<script>
export default {
    data() {
        return {
            selected: null,
            options : [
                { html: '<img src="/Icons/btc.png" alt="BTC"> بیت کوین', value: 'btc' },
                { html: '<img src="/Icons/btc.png" alt="BTC"> اتریوم', value: 'eth' },
                { html: '<img src="/Icons/btc.png" alt="BTC"> پولکادات', value: 'dot' },
            ]
        }
    },
}
</script>
<style lang="scss">
    .dropdown-menu {
        text-align: right !important;
    }

   .btn {
        text-align: start !important;
        
    }

    .dropdown-toggle::after {
        position: absolute;
        left: 0;
        top: 15px;
        left: 10px;
    }

    .staking-group .btn {
        width: 150px;
        height: 40px;
    }

</style>