document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('visualizeButton').addEventListener('click', function() {
        const birthdateInput = document.getElementById('birthdate').value;
        const lifeExpectancyInput = document.getElementById('lifeExpectancy').value;

        if (!birthdateInput || !lifeExpectancyInput) {
            alert("Please enter both birthdate and life expectancy.");
            return;
        }

        const birthdate = new Date(birthdateInput);
        const lifeExpectancy = parseInt(lifeExpectancyInput);
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();

        // Adjust age if birthdate hasn't occurred yet this year
        if (today.getMonth() < birthdate.getMonth() ||
            (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
            age--;
        }

        const visualizationContainer = document.getElementById('visualization');
        visualizationContainer.innerHTML = ''; // Clear previous visualization

        for (let i = 0; i < lifeExpectancy; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            if (i < age) {
                circle.classList.add('completed');
            } else if (i === age) {
                circle.classList.add('current');
            } else {
                circle.classList.add('upcoming');
            }
            visualizationContainer.appendChild(circle);
        }
    });
});
