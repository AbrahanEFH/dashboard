document.addEventListener('DOMContentLoaded', () => {
    let modeSwitch = document.querySelector('switch-mode')

    modeSwitch.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark')
        modeSwitch.classList.toggle('active')
    })

    let listView = document.querySelector('.list-view')
    let gridView = document.querySelector('.grid-view')
    let projectList = document.querySelector('.request-boxes')

    listView.addEventListener('click', () => {
        gridView.classList.remove('active')
        listView.classList.add('active')
        projectList.classList.remove('change-mode')
    })
})