document.addEventListener("DOMContentLoaded", () => {
    const sceneEl = document.querySelector('a-scene');
    
    // Mendeteksi hero mana yang muncul berdasarkan index
    sceneEl.addEventListener("targetFound", (event) => {
        const index = event.target.components["mindar-image-target"].data.targetIndex;
        const heroNames = ["Layla", "Rafaela", "Freya"];
        console.log("Hero yang ditemukan: " + heroNames[index]);
        alert("Hero " + heroNames[index] + " telah muncul!");
    });
});