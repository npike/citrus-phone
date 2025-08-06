window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedNumber = urlParams.get('phone');
    const decodedDiv = document.getElementById('decodedNumber');

    if (encodedNumber) {
        try {
            const phoneNumber = atob(encodedNumber);
            decodedDiv.innerHTML = `<a href="tel:${phoneNumber}">${phoneNumber}</a>`;
        } catch (e) {
            decodedDiv.innerHTML = `<p>Error: Invalid phone number format.</p>`;
        }
    } else {
        decodedDiv.innerHTML = `<p>No phone number found.</p>`;
    }
};