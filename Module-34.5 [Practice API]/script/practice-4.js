const shortLink = () => {
    const input = document.getElementById('input').value
    fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
        .then(res => res.json())
        .then(data => displayLink(data.result))
}

const displayLink = data => {
    const container = document.getElementById('container')
    container.innerHTML = ''

    const link = document.createElement('p')
    link.innerHTML = `
    1. ${data.full_share_link} </br>
    2. ${data.full_short_link}</br>
    3. ${data.full_short_link2}</br>
    4. ${data.full_short_link3}</br>
    5. ${data.share_link}</br>
    6. ${data.short_link}</br>
    7. ${data.short_link2}</br>
    8. ${data.short_link3}</br>
    9. ${data.original_link}
    `
    console.log(data);
    container.appendChild(link)
}

// shortLink()