function toggleShowClassToParent(e) {
    if (e.target.parentElement.parentElement.parentElement.classList.contains('hide')) {
        e.target.parentElement.parentElement.parentElement.classList.remove('hide');
        e.target.parentElement.parentElement.parentElement.classList.add('show');
    } else if (e.target.parentElement.parentElement.parentElement.classList.contains('show')) {
        e.target.parentElement.parentElement.parentElement.classList.remove('show');
        e.target.parentElement.parentElement.parentElement.classList.add('hide');
    }
}

window.addEventListener('click', toggleShowClassToParent);