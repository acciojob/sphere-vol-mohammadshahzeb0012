function volume_sphere() {
    // Retrieve the radius value entered by the user
    const radius = parseFloat(document.getElementById('radius').value);

    // Validate the input: ensure the radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere using the formula V = (4/3) * pi * r^3
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume in the output field rounded to four decimal places
        document.getElementById('volume').value = volume.toFixed(4);
    }

    // Prevent form submission
    return false;
} 

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
