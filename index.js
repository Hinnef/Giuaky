const displayName = document.querySelectorAll('h3')[0]
const btnRandom = document.querySelector('.btn')
const nameMember = ['Hiền', 'Ngọc', 'Hữu', 'Na']
const quantityArray  = nameMember.length
        btnRandom.onclick = () => {
                const numberRandom = Math.floor(Math.random()*quantityArray)
                const randomName = nameMember[numberRandom]
                displayName.innerHTML = `Xin chúc mừng bạn <span>${randomName}</span> `
        }
