const reviewContainer = document.querySelector('review-container')

const reviews = [
    {
        img: "IMG_0959.JPG",
        alt: "Konoha ANBU shinobi/ Akastuki memeber",
        text: "It is not wise to judge others based on your own perceptions and by their appearances",
        name: "Uchiha Itachi",
    },

    {
        img: "IMG_0961.JPG",
        alt: "Sorceror Killer",
        text: "But you guys, with all your blessed talents, lost to a monkey like me who cant even use Jujutsu.",
        name: "Fushiguro Toji",
    },

    {
        img: "IMG_0962.JPG",
        alt: "A True warrior",
        text: "I have no enemies.",
        name: "Thorfinn Thorsson",
    }

]

function populateDisplay () {
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')
    })
}