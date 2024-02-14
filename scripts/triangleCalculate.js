function calculateTriangleArea(){
    const baseValue = document.getElementById('base-value');
    const baseInput = baseValue.value;
    const base = parseFloat(baseInput);
    const heightValue = document.getElementById('height-value');
    const heightInput = heightValue.value;
    const height = parseFloat(heightInput);
        let area = 0.5 * base * height;
        const triangleArea = document.getElementById('triangle-area');
        triangleArea.innerText = area;
}