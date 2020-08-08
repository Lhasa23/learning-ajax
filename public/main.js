const request = new XMLHttpRequest()
getCSS.addEventListener('click', () => {
    request.open('GET', './style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                console.log('请求CSS失败')
            }
        }
    }
    request.send()
})
getJS.addEventListener('click', () => {
    request.open('GET', './2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const js = document.createElement('script')
                js.innerHTML = request.response
                document.body.appendChild(js)
            } else {
                console.log('请求JS失败')
            }
        }
    }
    request.send()
})
getHTML.addEventListener('click', () => {
    request.open('GET', './3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const html = document.createElement('div')
                html.innerHTML = request.response
                document.body.appendChild(html)
            } else {
                console.log('请求HTML失败')
            }
        }
    }
    request.send()
})
getXML.addEventListener('click', () => {
    request.open('GET', './4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent.trim()
            console.log(text)
        } else if (request.status !== 200) {
                console.log('请求XML失败')
        }
    }
    request.send()
})
getJSON.addEventListener('click', () => {
    request.open('GET', './5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = JSON.parse(request.response)
            myName.textContent = dom.name
            console.log(dom)
        } else if (request.status !== 200) {
                console.log('请求JSON失败')
        }
    }
    request.send()
})
let pages = 1
getPre.addEventListener('click', () => {
    if (pages > 1) {
        request.open('GET', `./db/p${--pages}.json`)
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                let dom = JSON.parse(request.response)
                dom = dom.map(item => `<li>${item.name}</li>`).join('')
                Table.innerHTML = `<ul>${dom}</ul>`
                console.log(dom)
            } else if (request.status !== 200) {
                console.log('请求JSON失败')
            }
        }
        request.send()
    }
})
getNext.addEventListener('click', () => {
    if (pages < 3) {
        request.open('GET', `./db/p${++pages}.json`)
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                let dom = JSON.parse(request.response)
                dom = dom.map(item => `<li>${item.name}</li>`).join('')
                Table.innerHTML = `<ul>${dom}</ul>`
            } else if (request.status !== 200) {
                console.log('请求JSON失败')
            }
        }
        request.send()
    }
})
