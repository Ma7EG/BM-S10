document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('score-form');
    const result = document.getElementById('res');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const scoreInput = document.getElementById('score').value;
        const score = parseFloat(scoreInput);

        if (isNaN(score)) {
            result.textContent = 'Input A vaild NUM';
        } else {
            let grade;
            switch (true) {

                case (score > 100 || score < 0):
                    grade = 'Invalid Score';
                    break;
                case (score === 100):
                    grade = 'مفيش منك اتنين والله';
                    break;
                case (score >= 85):
                    grade = 'You got an A';
                    break;
                case (score >= 75):
                    grade = 'You got a B';
                    break;
                case (score >= 65):
                    grade = 'You got a C';
                    break;
                case (score >= 50):
                    grade = 'You got a D';
                    break;
                default:
                    grade = 'You got an F';
            }
            result.textContent = grade;
        }
      
       
            // let grade;
            // switch (true) {
            //     case (isNaN(score)) :
            //         grade = 'Input A valid NUM';
            //         break;

            //     case (score > 100 || score < 0):
            //         grade = 'Invalid Score';
            //         break;
            //     case (score === 100):
            //         grade = 'مفيش منك اتنين والله';
            //         break;
            //     case (score >= 85):
            //         grade = 'You got an A';
            //         break;
            //     case (score >= 75):
            //         grade = 'You got a B';
            //         break;
            //     case (score >= 65):
            //         grade = 'You got a C';
            //         break;
            //     case (score >= 50):
            //         grade = 'You got a D';
            //         break;
            //     default:
            //         grade = 'You got an F';
            // }
            // result.textContent = grade;
        
    });
});
