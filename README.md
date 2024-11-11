# p5-RCS (RASTERING and COLOR SEPARATION)

Project of using what was done with p5.riso to explore new ways and tools combinations to process images with rasterizing functions and color separation (not only focused on the Risograph printers), in an attempt to help graphics designers managing their virtual workspaces.

## Project Information Flow

Below is a step-by-step flow of how files and information move through the project in a Vue + Vite setup.

```plaintext
Navigation.vue, OtherComponent.vue, etc.  <--- Define reusable components
           │
           ▼
         App.vue   <--- Root component, imports and combines all components
           │
           ▼
         main.js  <--- Entry point, mounts App.vue to index.html
           │
           ▼
        index.html <--- Main HTML template (contains <div id="app"></div>)
           │
           ▼
          Vite    <--- Development server and build tool for bundling
           │
           ▼
        Browser   <--- Final rendering of HTML, CSS, and JavaScript
```
