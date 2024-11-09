<template>
    <div>
        <h1>Choose an Animation</h1>

        <!-- Loop over the list of button names and create a button for each -->
        <div class="buttons-container">
            <button v-for="button in buttonNames" :key="button" @click="selectSketch(button)">
                {{ button }}
            </button>
        </div>

        <!-- Container to load the p5 sketch -->
        <div id="sketch-container"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // List of button names
            buttonNames: [
                "Animation", "Animation2", "Capture", "CMYK-Compression", "Color_test",
                "Cutout", "Dither", "Dither-test", "ExtractMapped", "Halftone",
                "Image_And_Text", "Instance_mode", "Smudge"
            ]
        };
    },
    methods: {
        selectSketch(buttonName) {
            // Remove any previous sketches from the container
            const container = document.getElementById("sketch-container");
            container.innerHTML = ''; // Clear the sketch container

            // Set the selected sketch path (e.g., /assets/examples/Animation/sketch.js)
            this.selectedSketch = `/assets/examples/${buttonName}/sketch.js`;
            console.log(this.selectedSketch)

            // Dynamically load the new sketch
            this.loadSketch(this.selectedSketch);
        },

    }
};
</script>

<style scoped>
/* Style the buttons */
.buttons-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}

button:hover {
    background-color: #2980b9;
}

#sketch-container {
    border: 1px solid #000;
    margin-top: 20px;
    height: 400px;
    /* Adjust based on your needs */
}
</style>