
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        // Here, you would normally handle the form submission to your server
    });

    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for subscribing!');
        // Similarly, handle the subscription request
    });

});
