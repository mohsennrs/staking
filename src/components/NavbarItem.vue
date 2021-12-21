<template>
    <div>
        <div class="card" dir="ltr">
            <div class="card-body d-flex pr-2">
                <img :src="icon" alt="btc">
                
                <div class="name-block mr-3">
                    <span class="name d-block">{{ name }}</span>
                    <span class="price-change small text-success">{{ change }}</span>
                </div>
                <div class="pt-1">
                    <span class="small">{{ price }}</span>&nbsp;
                    <span class="text-gray">USD</span>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavbarItem',
    props: ['icon', 'name', 'price', 'change'],
}
</script>
<style scoped lang="scss">
    .text-gray {
        color: #76808F;
    }
    .card {
        min-width: 150px;
        background-color: black;
        height: 39px;
        border-radius: 20px;
        padding: 5px;
        font-size: 10px;
        color: white;
        .card-body {
            padding: 0;
        }

        img {
            width: 27px;
            margin-right: 11px;

        }

    }
</style>
