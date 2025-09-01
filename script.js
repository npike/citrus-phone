window.onload = function() {
    // Send page view to Google Analytics, but strip out the query string
    gtag('config', 'G-ZM0KQ78SYL', {
        'page_path': window.location.pathname
    });

    const urlParams = new URLSearchParams(window.location.search);
    const encodedNumber1 = urlParams.get('phone');
    const encodedNumber2 = urlParams.get('phone2');
    const decodedDiv1 = document.getElementById('decodedNumber');
    const decodedDiv2 = document.getElementById('decodedNumber2');
    const label2 = document.getElementById('label2');
    const etsyLink = document.querySelector('footer a');
    const contactCard = document.getElementById('contact-card');
    const noPhoneMessage = document.getElementById('no-phone-message');
    const etsyListingLink = document.getElementById('etsy-listing-link');

    function addPhoneLinkListener(linkElement, eventName) {
        linkElement.addEventListener('click', function() {
            gtag('event', eventName, {
                'event_category': 'engagement',
                'event_label': 'phone_number_link'
            });
        });
    }

    if (encodedNumber1) {
        try {
            const phoneNumber = atob(encodedNumber1);
            decodedDiv1.innerHTML = `<a href="tel:${phoneNumber}" id="phoneLink1">${phoneNumber}</a>`;
            addPhoneLinkListener(document.getElementById('phoneLink1'), 'click_phone_link_1');
        } catch (e) {
            decodedDiv1.innerHTML = `<p>Error: Invalid phone number format.</p>`;
        }
    } else {
        contactCard.style.display = 'none';
        noPhoneMessage.style.display = 'block';
    }

    if (encodedNumber2) {
        try {
            const phoneNumber = atob(encodedNumber2);
            decodedDiv2.innerHTML = `<a href="tel:${phoneNumber}" id="phoneLink2">${phoneNumber}</a>`;
            addPhoneLinkListener(document.getElementById('phoneLink2'), 'click_phone_link_2');
        } catch (e) {
            decodedDiv2.innerHTML = `<p>Error: Invalid phone number format.</p>`;
        }
    } else {
        label2.style.display = 'none';
        decodedDiv2.style.display = 'none';
    }

    etsyLink.addEventListener('click', function() {
        gtag('event', 'click_etsy_link', {
            'event_category': 'engagement',
            'event_label': 'etsy_link'
        });
    });

    etsyListingLink.addEventListener('click', function() {
        gtag('event', 'click_etsy_listing_link', {
            'event_category': 'engagement',
            'event_label': 'etsy_listing_link'
        });
    });
};