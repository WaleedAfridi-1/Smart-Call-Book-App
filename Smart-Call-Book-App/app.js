// icons Variables
let add = document.querySelector(".add-icon");
let up = document.querySelector('#up-arrow');
let down = document.querySelector("#down-arrow");
let deleteBtn = document.querySelector('#delete');

// New call modal Variable 
let newCardModel = document.querySelector(".new-call-modal");

// cards container 
let cardCont = document.querySelector('#cards-cont');
// Form Variables 
let form = document.querySelector("#card-form");
let imgUrl = document.querySelector('#img-url');
let fullName = document.querySelector('#name');
let phone = document.querySelector('#phone');
let address = document.querySelector('#address');
let purpose = document.querySelector('#purpose');
// form buttons
let createBtn = document.querySelector('#create-btn');
let closeBtn = document.querySelector('#close-btn');

let emptyCard = document.querySelector('#empty-card')

// save To local storage 
function save_To_Local_Storage(dict) {
    if (localStorage.getItem('cards') === null) {
        let oldArry = [];
        oldArry.push(dict);
        localStorage.setItem('cards', JSON.stringify(oldArry));
    }
    else {
        let oldArry = localStorage.getItem('cards');
        oldArry = JSON.parse(oldArry);
        oldArry.push(dict);
        localStorage.setItem('cards', JSON.stringify(oldArry));
    }
}

// Input Form Showing 
add.addEventListener('click', function () {
    newCardModel.style.display = 'initial';
});
// Hiding Note
closeBtn.addEventListener('click', function () {
    newCardModel.style.display = 'none';
});

// creating note 
createBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Stop page reload

    let validImg = imgUrl.value.trim();
    let validName = fullName.value.trim();
    let validPhone = phone.value.trim();
    let validAddress = address.value.trim();
    let validPurpose = purpose.value.trim();

    if (validImg === '' || validName === '' || validPhone === '' || validAddress === '' || validPurpose === '') {
        return alert('Please fill all fields!');
    }

    form.submit();
    newCardModel.style.display = 'none';
});


// Show Cards Function 
async function showCards() {
    try {
        const response = await fetch('get_cards.php');
        const allCards = await response.json();

        cardCont.innerHTML = "";
        if (allCards.length === 0) {
            emptyCard.style.display = 'initial';
        } else {
            emptyCard.style.display = 'none';
        }

        allCards.forEach((task) => {
            let card = document.createElement('div');
            card.classList.add('cards');

            // creating img 
            let imgCont = document.createElement('div');
            imgCont.classList.add('img-cont');
            let img = document.createElement('img');
            img.src = task.IMG;
            imgCont.appendChild(img);
            card.appendChild(imgCont);

            // name 
            let name = document.createElement('h3');
            name.textContent = task.USERNAME;
            card.appendChild(name);

            // address 
            let addressCont = document.createElement('div');
            addressCont.classList.add('address');
            let addp1 = document.createElement('p');
            addp1.textContent = 'Home Town';
            let addp2 = document.createElement('p');
            addp2.textContent = task.HOMETOWN;

            addressCont.appendChild(addp1);
            addressCont.appendChild(addp2);
            card.appendChild(addressCont);

            // Purpose 
            let purpCont = document.createElement('div');
            purpCont.classList.add('purpose');
            let purpP = document.createElement('p');
            purpP.textContent = 'Purpose';
            let purpP2 = document.createElement('p');
            purpP2.textContent = task.PURPOSE;

            purpCont.appendChild(purpP);
            purpCont.appendChild(purpP2);
            card.appendChild(purpCont);

            // Phone 
            let phoneCont = document.createElement('div');
            phoneCont.classList.add('purpose');
            let phoneP = document.createElement('p');
            phoneP.textContent = 'Phone';
            let PhoneNumber = document.createElement('p');
            PhoneNumber.textContent = task.PHONE;

            phoneCont.appendChild(phoneP);
            phoneCont.appendChild(PhoneNumber);
            card.appendChild(phoneCont);

            // btns 
            // call btn 
            let callbtn = document.createElement('button');
            callbtn.textContent = 'Call';
            callbtn.classList.add('call-sms-btn', 'call-btn');
            let call_icon = document.createElement('i');
            call_icon.classList.add('ri-phone-line');
            callbtn.prepend(call_icon);
            card.appendChild(callbtn)

            // sms btn 
            let smsbtn = document.createElement('button');
            smsbtn.textContent = 'Message';
            smsbtn.classList.add('call-sms-btn', 'sms-btn');
            card.appendChild(smsbtn);

            // delete Button 
            let delBtn = document.createElement('button');
            let delIcon = document.createElement('i');
            delIcon.classList.add('ri-delete-bin-5-fill');
            delIcon.style.fontSize = '22px';
            delBtn.appendChild(delIcon);
            delBtn.classList.add('delBtn');
            card.appendChild(delBtn);


            // Call button functionality
            callbtn.addEventListener('click', function () {
                window.open(`tel:${task.PHONE}`, '_self');
            });


            // SMS button functionality  
            smsbtn.addEventListener('click', function () {
                window.open(`sms:${task.PHONE}`, '_self');
            });
            // Delete button functionality 
            delBtn.addEventListener('click', async () => {
                if (confirm('Do you want to delete this card?')) {
                    try {
                        const formData = new FormData();
                        formData.append('card_id', task.id); // Database ID

                        const response = await fetch('delete_card.php', {
                            method: 'POST',
                            body: formData
                        });

                        const result = await response.text();

                        if (result === 'deleted') {
                            // Card successfully deleted, refresh the list
                            showCards();
                        } else {
                            alert("Card Couldn't Deleted!");
                        }
                    } catch (error) {
                        console.error('Delete error:', error);
                        alert('Error aya hai!');
                    }
                }
            });

            // appending card in cont
            cardCont.prepend(card);
        });
    } catch (error) {
        console.error('Error loading cards:', error);
    }
}

// up dutton event 
up.addEventListener('click', function () {
    let lastCard = cardCont.lastElementChild;
    if (lastCard) {
        cardCont.insertBefore(lastCard, cardCont.firstElementChild)
    }

});
// down button event 
down.addEventListener('click', function () {
    let fristCard = cardCont.firstElementChild;
    if (fristCard) {
        cardCont.append(fristCard);

    }
});


let footer = document.querySelector('.footer');
let nav = document.querySelector('.nav');
document.addEventListener('DOMContentLoaded', function () {
    let darkgrey = document.querySelector('.black');
    let orange = document.querySelector('.orange');
    let teal = document.querySelector('.teal');
    let sky = document.querySelector('.purple');
    let nav = document.querySelector('.nav');
    let footer = document.querySelector('.footer');

    darkgrey.addEventListener('click', function () {
        nav.style.backgroundColor = '#222';
        footer.style.backgroundColor = '#3b3b3b';
    });

    orange.addEventListener('click', function () {
        nav.style.backgroundColor = 'orange';
        footer.style.backgroundColor = 'orange';
    });

    teal.addEventListener('click', function () {
        nav.style.backgroundColor = 'teal';
        footer.style.backgroundColor = 'teal';
    });

    sky.addEventListener('click', function () {
        nav.style.backgroundColor = 'rgb(50, 149, 248)';
        footer.style.backgroundColor = 'rgb(50, 149, 248)';
    });
});

showCards();

