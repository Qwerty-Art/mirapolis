const ul = document.querySelectorAll('.tree-list')
Array.from(ul).forEach(e => {
  const liLast = e.children[e.children.length - 1]
  const dot = document.createElement('div');
  dot.classList.add('tree-list__dot')
  liLast.append(dot);
})

calcDotHeight()

function calcDotHeight() {
  const dots = document.querySelectorAll('.tree-list__dot')
  Array.from(dots).forEach(e => {
    console.log(e.closest('ul').parentNode.getBoundingClientRect().top)
    const h = e.closest('li').getBoundingClientRect().top - e.closest('ul').parentNode.getBoundingClientRect().top - 6
    e.style.height = h + 'px'
  })
}


const btn = document.querySelectorAll('.tree-list__btn')
Array.from(btn).forEach(e => {
  e.addEventListener('click', e => {
    const el = e.currentTarget.closest('.tree-list__li')
    if (el.classList.contains('-open')) {
      el.classList.remove('-open')
      Array.from(el.querySelectorAll('.-open')).forEach(e => e.classList.remove('-open'))
    } else {
      el.classList.add('-open')
    }
    calcDotHeight()
  })
})