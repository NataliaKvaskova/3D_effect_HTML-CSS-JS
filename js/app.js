// по движению курсора мыши ('mousemove') в родительский объект всего документа document.documentElement копируем атрибут style (Object.assign), в который можем передавать переменные для css (создаем эти переменные `--move-x: ${e.clientX}deg;--move-y: ${e.clientY}deg;`

document.addEventListener('mousemove', e => {
  Object.assign (document.documentElement, {
    style:`
    --move-x: ${(e.clientX - window.innerWidth/2)* -.005}deg;
    --move-y: ${(e.clientY - window.innerHeight/2) * -.01}deg;
    `
  })
} )