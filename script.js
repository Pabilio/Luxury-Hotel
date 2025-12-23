// Initialize EmailJS (Replace with your keys)
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// City Selector Animation
function animateArrow() {
    const arrow = document.getElementById('arrow');
    arrow.style.transform = 'translateY(5px)';
    setTimeout(() => { arrow.style.transform = 'translateY(0)'; }, 300);
}

// Date Logic: No past dates
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = today;
});

// Form Submission with EmailJS
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        btn.innerText = "SENDING...";
        btn.disabled = true;

        // Use EmailJS sendForm
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                alert("Request Sent to Dhahabu Concierge!");
                this.reset();
                btn.innerText = "SUBMITTED";
                btn.disabled = false;
            }, (error) => {
                alert("Error sending. Check console.");
                console.error(error);
                btn.disabled = false;
                btn.innerText = "TRY AGAIN";
            });
    });
});