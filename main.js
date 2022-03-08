const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/600/400",
        "author": {
            "name": "Phil Mangione",
            "image": "https://picsum.photos/300/300"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/600/400",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://picsum.photos/300/300"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/600/400",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://picsum.photos/300/300"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/600/400",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/600/400",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://picsum.photos/300/300"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const eleOutput = document.querySelector('.posts-list');

//  Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
for (let i = 0; i < posts.length; i++) {
    renderPost(posts[i]);
}



function renderPost(objPost) {
	const elePost = document.createElement('div');
	elePost.classList.add('post');
    elePost.setAttribute('id', objPost.id);
    // let eleDate = Date.parse(objPost.created);
   
    // let dateNow = new Date();
    // // console.log(dateNow);
    // let date = new Date(eleDate);
    // let month = date.getMonth();
    // // console.log(month);
    // // console.log(date.getMonth());
    // dateNow = Date.parse(dateNow);
    // console.log(dateNow);
    // let dateAgo = dateNow - date;
    // dateAgo = dateAgo / 60 / 60 / 24 / 30;
    // console.log(dateAgo);
	elePost.innerHTML = `
                    <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${objPost.author.image}" alt="${objPost.author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${objPost.author.name}</div>
                            <div class="post-meta__time">${objPost.created}</div>
                        </div>                    
                        </div>
                    </div>
                    <div class="post__text">${objPost.content}</div>
                    <div class="post__image">
                        <img src="${objPost.media}" alt="">
                    </div>
                    <div class="post__footer">
                        <div class="likes js-likes">
                            <div class="likes__cta" id="like-button-here-${objPost.id}">
                            </div>
                            <div class="likes__counter">
                                Piace a <b id="like-counter-${objPost.id}" class="js-likes-counter">${objPost.likes}</b> persone
                            </div>
                        </div> 
                    </div>
	`;
	eleOutput.append(elePost);
    
    const btnHolder = document.querySelector(`#like-button-here-${objPost.id}`);
    const eleAnchor = document.createElement('a')
    eleAnchor.classList.add('like-button', 'js-like-button');
    eleAnchor.setAttribute('data-postid', objPost.id);
    eleAnchor.innerHTML = `
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
    `;

    eleAnchor.addEventListener('click', function() {
        objPost.likes = objPost.likes + 1;
        console.log(objPost.likes);
        const likeCounterHolder = document.querySelector(`#like-counter-${objPost.id}`);
        likeCounterHolder.innerHTML = objPost.likes;
        
    });
    btnHolder.appendChild(eleAnchor);
}





// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.





// Function 

// function buttonLike(objPost) {
    
//     // const index = [...this.parentNode.children].indexOf(this);
//     // console.log(index);
//     // // console.log(...this.parentNode.parentNode.parentNode.parentNode.parentNode.children);
//     // console.log(index);
//     objPost.likes = objPost.likes + 1;
//     console.log(objPost.likes);
//     const likeCounterHolder = document.querySelector(`#like-counter-${objPost.id}`);
//     likeCounterHolder.innerHTML = objPost.likes;

   

// }