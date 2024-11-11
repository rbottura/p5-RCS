<template>
    <div id="sketch-container">
        <!-- This container holds the sketch when it's loaded -->
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Sketch container ready.");
    },
};
</script>

<style scoped>
#sketch-container {
    width: 100%;
    height: 100%;
}
</style>