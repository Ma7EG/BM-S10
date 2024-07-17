document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('score-form');
    const result = document.getElementById('res');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const scoreInput = document.getElementById('score').value;
        const score = parseFloat(scoreInput);

        if (isNaN(score)) {
            result.textContent = 'Input A vaild NUM';
        } else if (score > 100 || score < 0) {
            result.textContent = 'Invalid Score';
        } else if (score === 100) {
            result.textContent = 'مفيش منك اتنين والله';
        } else if (score >= 85) {
            result.textContent = 'You got an A';
        } else if (score >= 75) {
            result.textContent = 'You got a B';
        } else if (score >= 65) {
            result.textContent = 'You got a C';
        } else if (score >= 50) {
            result.textContent = 'You got a D';
        } else {
            result.textContent = 'You got an F';
        }
    });
});
