<template>
    <nav class="navigation">
        <ul>
            <li><a href="/">Home</a></li>
            <li v-for="example in examples" :key="example">
                <!-- Create a link that navigates to the specific example HTML file -->
                <a :href="`/assets/examples/${example}/index.html`">{{ formatName(example) }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            examples: [
                "Animation",
                "Animation2",
                "Capture",
                "CMYK-Compression",
                "Color_test",
                "Cutout",
                "Dither",
                "Dither-test",
                "ExtractMapped",
                "Halftone",
                "Image_And_Text",
                "Instance_mode",
                "Smudge"
            ],
        };
    },
    methods: {
        // Format the name for display if needed (e.g., replace underscores)
        formatName(name) {
            return name.replace(/_/g, " ");
        }
    }
};
</script>

<style scoped>
.navigation {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
}

.navigation ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    min-width: 90vw;
    padding: 0;
    gap: 10px;
}

.navigation li {
    max-width: 100em;
}

.navigation a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

.navigation a:hover {
    color: #0056b3;
}
</style>