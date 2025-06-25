export default async function loadComponent(targetSelector, componentPath) {
    try {
        const target = document.querySelector(targetSelector);
        if (!target) return;

        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Error loading ${componentPath}`);

        const html = await response.text();
        target.innerHTML = html;
    } catch (error) {
        console.error(`Component load failed: ${error.message}`);
    }
}
