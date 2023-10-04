let myRange=document.querySelector('#myrange')
let dollar=document.querySelector('#dollar')
let discount=document.querySelector('.discount')
let dollar1=document.querySelector('#dollar1')
let page=document.querySelector('.pageview')
let tog=document.querySelector('.circle')
let button=document.querySelector('.button')
let yr=document.querySelector('#yr')
let mn=document.querySelector('#mn')
let isButtonToggled=false

myRange.addEventListener('input',function() {
    let number=parseInt(this.value)
    page.innerHTML=number+'k pageviews'
    dollar.innerHTML=`$${(number*0.16).toFixed(2)}`
    dollar1.innerHTML=`$${(number*0.16).toFixed(2)}`
    yr.innerHTML=isButtonToggled ? '/year' : '/month'
    mn.innerHTML=isButtonToggled ? '/year' : '/month'
})

window.addEventListener('resize',()=>{
    if (window.innerWidth<680)
    {
        discount.innerHTML='-25%'
    }
    else{
        discount.innerHTML='25% discount'
    }
})

tog.addEventListener('click',()=>{
    button.classList.toggle('show')
    button.classList.toggle('row')

    isButtonToggled=!isButtonToggled
    mn.innerHTML=isButtonToggled ? '/year' : '/month'
    yr.innerHTML=isButtonToggled ? '/year' : '/month'

    if(isButtonToggled)
    {
        myRange.addEventListener('input',()=>{
            let num2=parseInt(myRange.value)
            page.innerHTML=num2+'k pageviews'
            dollar.innerHTML=`$${(num2*0.16*12).toFixed(2)}`
            dollar1.innerHTML=`$${(num2*0.16*12).toFixed(2)}`
        })
    }
    else{
        myRange.addEventListener('input',function() {
            let number1=parseInt(myRange.value)
            page.innerHTML=number1+'k pageviews'
            dollar.innerHTML=`$${(number1*0.16).toFixed(2)}`
            dollar1.innerHTML=`$${(number1*0.16).toFixed(2)}`
        })
    }
})
