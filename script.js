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
        projectList.classList.add('jsListView')
    })
    gridView.addEventListener('click', () => {
        gridView.classList.add('active')
        listView.classList.remove('active')
        projectList.classList.remove('jsListView')
        projectList.classList.add('change-mode')
    })

    document.querySelector('.service-btn').addEventListener('click', () => {
        document.querySelector('.data-section').classList.add('show')
    })
    document.querySelector('.data-close').addEventListener('click', () => {
        document.querySelector('.data-section').classList.remove('show')
    })
    document.querySelector('.spen-side').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.add('show')
        document.querySelector('close-side').classList.add('show')
    })
    document.querySelector('.close-side').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.remove('show')
        document.querySelector('close-side').classList.remove('show')
    })
})

19: 48