const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observe) {
    entries.forEach(function (entry) {
        if(entry.isIntersecting > ratio){
            entry.target.classList.add('reveal-visible')
            observe.unobserve(entry.target)
        }
    })
}

const handleIntersect2 = function (entries, observe) {
    entries.forEach(function (entry) {
        if(entry.isIntersecting > ratio){
            entry.target.classList.add('visible')
            observe.unobserve(entry.target)
        }
    })
}

const observe2 = new IntersectionObserver(handleIntersect2, options)

const observe = new IntersectionObserver(handleIntersect, options)

document.querySelectorAll('[class*="reveal-"]').forEach(function (reveal) {
    observe.observe(reveal)
})

document.querySelectorAll('[class*="reveal2-"]').forEach(function (r) {
    observe2.observe(r)
})