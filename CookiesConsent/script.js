const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const modalChoiceBtn = document.getElementById("modal-choice-btns")
const dataForm = document.getElementById("data-from")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")





setTimeout(() => {
    modal.style.display = 'inline'
}, 1500)

closeBtn.disabled = true
closeBtn.addEventListener('click', () => modal.style.display = 'none')

declineBtn.addEventListener('mouseenter', () => {
    modalChoiceBtn.classList.toggle('reverse')
})

dataForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const consentFormData = new FormData(dataForm)

    const name = consentFormData.get('name')


    modalText.innerHTML = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
    </div>
    `
    setTimeout(() => {
        document.getElementById("uploadText").innerText = `Making the sale...`
    }, 1500)
    
    setTimeout(() => {
        document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `
        closeBtn.disabled = false

    }, 3000)
    


})


