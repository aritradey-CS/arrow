const accessKey = "_r0xDqx8xsiHmy3peY6F2KLg1MjTzTqfdLzuwSMh2-Y"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector("search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImage(){
    inputData = inputEl.ariaValueMax;
    const url = `https://api.unsplash.com/search/photo?page=${page}&query=${inputData}&client_id=${accesskey}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    results.map((result) =>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.url.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.link.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description
    })
}



















