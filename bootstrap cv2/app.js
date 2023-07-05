const observe = new IntersectionObserver((entries)=>{
    for(let entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add('reveal-visible')
        }
    }

})

document.querySelectorAll('[class*="reveal-"]').forEach((reveal)=>{
    observe.observe(reveal)
})