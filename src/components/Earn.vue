<template>
    <b-card header-tag="header" footer-tag="footer">
        <template #header >
            <div class="d-flex justify-content-between p-2">
                <h1 class="mb-0 d-inline">درآمد (Earn)</h1>
                <b-button pill variant="outline-secondary" class="mt-2 py-0" id="guid-button">راهنما <font-awesome-icon icon="fa-solid fa-circle-exclamation" class="mr-2 "/></b-button>
            </div>
        </template>
        <b-card-text>Header and footers using slots.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
       
      </b-card>
</template>
<script>
export default {

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
