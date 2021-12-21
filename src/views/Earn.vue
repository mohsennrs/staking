<template>
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
            <div class="col-md-6">

            </div>
        </div>
       
      </b-card>
</template>
<script>
import Calculator from '../components/Calculator.vue'
export default {
    name: 'Earn',
    components: {
        Calculator
    }
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
</style>
