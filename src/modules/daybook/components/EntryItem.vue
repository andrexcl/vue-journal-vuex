<template>
    <div @click="$router.push({ name: 'entry', params: { id: 10 } })" class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        <div class="entry-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fuga libero doloribus iure accusamus ipsum cumque est recusandae provident iste? Obcaecati beatae similique atque minus aspernatur doloribus provident, aperiam voluptate.</div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: o.2s all ease-in;
}
.entry-container:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
}
.entry-description {
    font-size: 12px;
}
</style>
