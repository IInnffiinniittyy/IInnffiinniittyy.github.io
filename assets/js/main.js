/* =============== My Learnings Model =============== */
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

// <div>
//                 <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="java-logo">
//                 <p>Java</p>
//             </div>
//             <div>
//                 <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="mysql-logo">
//                 <p>MySQL</p>
//             </div>
//             <div>
//                 <img src="https://www.tc-web.it/wp-content/uploads/2019/12/spring-logo.jpg" alt="spring-boot-logo">
//                 <p>Spring Boot</p>
//             </div>
//             <div>
//                 <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html-logo">
//                 <p>HTML 5</p>
//             </div>
//             <div>
//                 <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css-logo">
//                 <p>CSS 3</p>
//             </div>
//             <div>
//                 <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="js-logo">
//                 <p>JavaScript</p>
//             </div>
//             <div>
//                 <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="github-logo">
//                 <p>GitHub</p>
//             </div>
//             <div>
//                 <img src="https://www.drupal.org/files/project-images/aws-logo.jpg" alt="aws-logo">
//                 <p>AWS</p>
//             </div>
//             <div>
//                 <img src="https://cdn-icons-png.flaticon.com/512/1628/1628175.png" alt="dsa-logo">
//                 <p>DS & ALGO</p>