const data = document.querySelectorAll('.data')
const inputTargetDay = document.getElementById('meta')
const btn = document.querySelector('.btn')
const inputRealized = document.getElementById('h-h_realized')
const btnRealized_01 = document.querySelector('.btn-realized_01')
const btnRealized_02 = document.querySelector('.btn-realized_02')

let workedHours = 8



const lastHourRealized = Number(inputRealized.value )

btn.addEventListener('click', () => {

 targetDay = Number(inputTargetDay.value)

    metaH_H = (targetDay / workedHours) 

    data.forEach (elem => {
        
        elem.innerHTML = `${Math.round(metaH_H)}`
    })

    btnRealized_01.addEventListener('click', () => {
        
        const lastHourRealized = Number(inputRealized.value )
        console.log(targetDay)
    
        let targetBalance = targetDay - Number(lastHourRealized)
        console.log('saldo da meta diária',targetBalance)

        let newTargetH_H = Math.ceil(targetBalance / (workedHours -1))
        console.log('nova meta por hora ' ,newTargetH_H)
    
        data.forEach (elem => {
            elem.innerHTML = `${newTargetH_H}`
        })
    })
    btnRealized_02.addEventListener('click', () => {
    
        let lastHourRealized = Number(inputRealized.value )

        targetDay = Number(inputTargetDay.value)

        
        
        let targetBalance = targetDay - Number(lastHourRealized)
        console.log('saldo da meta diária', targetBalance)
        
        let newTargetDay = targetDay - targetBalance
        console.log(newTargetDay)
        let newTargetH_H = Math.round(targetBalance / (workedHours -2))
        console.log('nova meta por hora',newTargetH_H)
    
        data.forEach (elem => {
            elem.innerHTML = `${newTargetH_H}`
        })
    })
    
})

function sumH_H () {

    let totalRealized = lastHourRealized ++

    console.log(totalRealized)
}


sumH_H()








