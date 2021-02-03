eventTasksLinsks()

        function eventTasksLinsks() {
            let taskCategoryLink = document.querySelectorAll(".task-category-link")
            taskCategoryLink.forEach((element) => {
                element.addEventListener('click', (evet) => {
                    evet.preventDefault()
                    let div = evet.target.parentNode.parentNode
                    let listTasksLinks = div.querySelectorAll('.task-link')
                    console.log(listTasksLinks)
                    listTasksLinks.forEach((element) => {
                        if (element.classList.contains('none')) {
                            element.classList.remove('none')
                        }
                        else {
                            element.classList.add('none')
                        }

                    })
                })
            })
        }