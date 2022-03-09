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
const arrLikes = [];

//  Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
for (let i = 0; i < posts.length; i++) {
    renderPost(posts[i], i);
    arrLikes.push(i)
}



function renderPost(objPost, index) {
	const elePost = document.createElement('div');
	elePost.classList.add('post');
    elePost.setAttribute('id', objPost.id);

// 1. Formattare le date in formato italiano (gg/mm/aaaa)
    let oldDate = objPost.created;
    let newDate = oldDate.slice(5, 7) + "/" + oldDate.slice(-2) + "/" + oldDate.slice(0, 4);

	elePost.innerHTML = `
                    <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${objPost.author.image}" alt="${objPost.author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${objPost.author.name}</div>
                            <div class="post-meta__time">${newDate}</div>
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
    const eleAnchor = document.createElement('a');
    eleAnchor.classList.add('like-button', 'js-like-button');
    eleAnchor.setAttribute('data-postid', objPost.id);
    eleAnchor.innerHTML = `
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
    `;

    eleAnchor.addEventListener('click', function() {
        const likeClasses = [...this.classList];
        const likeCounterHolder = document.querySelector(`#like-counter-${objPost.id}`);
        if (!likeClasses.includes("like-button--liked")) {

        
        objPost.likes = objPost.likes + 1;
        console.log(objPost.likes);
        likeCounterHolder.innerHTML = objPost.likes;
        this.classList.add('like-button--liked');
        
        // // const index = [...this.parentNode.children].indexOf(this);
        // // console.log(index);
        // let index = parseInt(objPost.id - 1);
        // console.log(index)
        // console.log(arrLikes[index]);
        
        // if (arrLikes.includes(objPost.id)) {

        //     arrLikes[index].push({
        //         id: objPost.id,
        //         like: objPost.likes
        //     });
        //     console.log(arrLikes);
        // }

        } else {
            objPost.likes = objPost.likes - 1;
            this.classList.remove('like-button--liked');
            likeCounterHolder.innerHTML = objPost.likes;
        }
        
    });
    btnHolder.appendChild(eleAnchor);
}






// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS

// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).

