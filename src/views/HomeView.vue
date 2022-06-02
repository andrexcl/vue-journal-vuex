<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" width="50" height="50" />
        <h1>Hola Mundo</h1>

        <button @click="goToDaybook" class="btn btn-primary">Primary</button>
        <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
        <button @click="goToDaybook" class="btn btn-success">Success</button>
    </div>
</template>

<script>
export default {
    methods: {
        goToDaybook() {
            this.$router.push({ name: "no-entry" });
        },
    },
};
</script>
