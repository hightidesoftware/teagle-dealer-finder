import { countries } from './countries';
import './style.css';

// Add country options to the select element
const select = document.querySelector('#country');
countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.value;
    option.textContent = country.label;
    select?.appendChild(option);
});

// HTML elements
const contactForm: HTMLFormElement | null = document.querySelector('#contact-form');
const errorMessage: HTMLElement | null = document.querySelector('.error-message');
const successMessage: HTMLElement | null = document.querySelector('.success-message');

// Form submission
contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    contactForm.inert = true; // Disable the form while submitting

    // Grab the form values
    const formValues = Object.fromEntries(new FormData(contactForm));

    // TEMPORARY - Disable sending the emails whilst we test, save us from spamming Teagle with random test messages!
    formValues.send_email = 'false';

    // The request payload
    console.log(formValues);

    // POST to the connect endpoint
    // fetch('https://connect.teagle.co.uk/api/enquiries', {
    fetch('http://localhost:7071/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
    })
        // Parse JSON response
        .then(async (response) => {
            if (!response.ok) throw await response.json();
            return response.json();
        })
        // API successful
        .then(() => {
            successMessage!.style.display = 'block';
            contactForm.style.display = 'none';
        })
        // API returned an error
        .catch((error) => {
            console.log(error);
            errorMessage!.innerHTML = error?.message || 'Something went wrong.';
            contactForm.inert = false;
        });
});
