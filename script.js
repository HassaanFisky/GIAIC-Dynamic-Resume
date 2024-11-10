document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    alert("Thank you for reaching out! Your message has been sent.");
});
