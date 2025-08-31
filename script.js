// Simple quiz for recycle.html
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const feedback = document.getElementById('feedback');

    yesBtn.addEventListener('click', function() {
        feedback.textContent = 'Yes! Old phones can be recycled. Great job!';
        feedback.style.color = '#4CAF50';
    });

    noBtn.addEventListener('click', function() {
        feedback.textContent = 'Oops! Old phones can be recycled. Try again!';
        feedback.style.color = '#FF6B35';
    });
});
