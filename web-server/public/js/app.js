const locationForm = document.querySelector('form')
const locationInput = document.querySelector('input')
const errMessage = document.querySelector('.p1')
const succMessage = document.querySelector('.p2')

const handleError = data => {
        succMessage.textContent = ''
        errMessage.textContent = data.error
}

const handleSuccess = data => {
        errMessage.textContent = ''
        succMessage.textContent = `It is ${ data.temperature } in ${ data.location }, but it feels like ${ data.feelslike }`
}

const getForecastInfo = async location => {
        const url = `http://localhost:3000/weather?address=${ location }`
        try {
                const res = await fetch(url)
                const data = await res.json()
                if (data.error) return handleError(data)
                handleSuccess(data)
        } catch (error) {
                errMessage.textContent = error.message
        }
}

locationForm.addEventListener('submit', e => {
        e.preventDefault()

        getForecastInfo(locationInput.value)  
        e.target.reset()
})
