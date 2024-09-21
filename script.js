const penals = document.querySelectorAll('.penal')

penals.forEach((penal) => {
    penal.addEventListener('click' , () => {
        removeactive()
        penal.classList.add('active')
    })
})

function removeactive(){
    penals.forEach(penal => {
        penal.classList.remove('active')
    })
}