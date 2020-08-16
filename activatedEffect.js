const hackerImage = document.querySelector('#blur-image');
const [ skillsLink, profileLink, passionsLink ] = document.querySelectorAll('.expansible');
const expandedLink = document.querySelector('.expanded-link')

// Do it with Listeners
 
function addBlurEffect() {
    hackerImage.style.filter = 'blur(6px)';

    
    
};


function removeBlurEffect() {
    hackerImage.style.filter = 'none';

    

};



