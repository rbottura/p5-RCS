<!-- /src/components/Navigation.vue -->
<template>
    <nav>
        <ul>
            <li v-for="(link, index) in links" :key="index" :class="{ active: isActive(link.path) }">
                <a :href="link.path">{{ link.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: "Animation", path: "/animation.html" },
                { name: "Animation2", path: "/animation2.html" },
                { name: "Capture", path: "/capture.html" },
                { name: "CMYK-Compression", path: "/cmyk-compression.html" },
                { name: "Color_test", path: "/color_test.html" },
                { name: "Cutout", path: "/cutout.html" },
                { name: "Dither", path: "/dither.html" },
                { name: "Dither-test", path: "/dither-test.html" },
                { name: "ExtractMapped", path: "/extract-mapped.html" },
                { name: "Halftone", path: "/halftone.html" },
                { name: "Image_And_Text", path: "/image-and-text.html" },
                { name: "Instance_mode", path: "/instance-mode.html" },
                { name: "Smudge", path: "/smudge.html" },
            ],
        };
    },
    methods: {
        // Check if the link path matches the current path to set the active class
        isActive(path) {
            return window.location.pathname === path;
        },
    },
};
</script>

<style scoped>
nav ul {
    list-style-type: none;
    padding: 0;
}

nav li {
    display: inline;
    margin-right: 15px;
}

nav li.active a {
    font-weight: bold;
    text-decoration: underline;
}
</style>