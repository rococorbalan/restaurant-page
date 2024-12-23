// contact.js
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter-x.svg"

function changeToContact(element, button){
    const contactBody = document.createElement("div")
    contactBody.classList.add("contact-body")

    const addressTitle = document.createElement("div")
    addressTitle.textContent = "Address"
    addressTitle.classList.add("content-title");

    const address = document.createElement("div")
    address.textContent = "123 Woodland Lane. Forest Grove, CA 90210"
    address.classList.add("content-body");

    const addressDiv = document.createElement("div");
    addressDiv.appendChild(addressTitle);
    addressDiv.appendChild(address);

    const phoneTitle = document.createElement("div")
    phoneTitle.classList.add("content-title");
    phoneTitle.textContent = "Phone Number"

    const phoneNumber = document.createElement("div")
    phoneNumber.textContent = "(555) 987-6543"
    phoneNumber.classList.add("content-body");

    const phoneDiv = document.createElement("div");
    phoneDiv.appendChild(phoneTitle);
    phoneDiv.appendChild(phoneNumber);

    const socials = document.createElement("div");
    socials.classList.add("socials")

    const instagramLogo = document.createElement("img")
    instagramLogo.src = instagram;
    const twitterLogo = document.createElement("img")
    twitterLogo.src = twitter;

    socials.appendChild(instagramLogo);
    socials.appendChild(twitterLogo);

    contactBody.appendChild(addressDiv);
    contactBody.appendChild(phoneDiv);
    contactBody.appendChild(socials);

    element.appendChild(contactBody);

    button.classList.add("contact");
}

export { changeToContact };