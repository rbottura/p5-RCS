<template>
    <div id="sketch-container"></div>
</template>

<script>
export default {
    name: 'Sketch',
    mounted() {
        // Initialize p5.js sketch after the component has mounted
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(400, 400);
            };

            p.draw = () => {
                p.background(220);
                p.ellipse(p.mouseX, p.mouseY, 50, 50);
            };
        };

        new p5(sketch, document.getElementById('sketch-container'));
    },
};
</script>

<style scoped>
#sketch-container {
    border: 1px solid #000;
}
</style>