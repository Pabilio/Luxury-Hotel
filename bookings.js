// Set minimum date to Today for all date inputs
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(input => {
    input.setAttribute('min', today);
});

// Booking Logic: Check-out must be after Check-in
const checkIn = document.getElementById('check-in');
const checkOut = document.getElementById('check-out');

if(checkIn && checkOut) {
    checkIn.addEventListener('change', () => {
        checkOut.setAttribute('min', checkIn.value);
        if (checkOut.value < checkIn.value) {
            checkOut.value = checkIn.value;
        }
    });
}

// Form Submission UI Feedback
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        
        // Visual feedback
        btn.innerText = "Processing...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        setTimeout(() => {
            alert("Thank you! Your request for DHAHABU has been received.");
            btn.innerText = originalText;
            btn.style.opacity = "1";
            btn.disabled = false;
            this.reset();
        }, 2000);
    });
});