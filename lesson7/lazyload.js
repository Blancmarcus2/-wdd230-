let imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
    threshold: .5,
    rootMargin: "0px 0px 50px 0px"
};
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


// let lazyloadimage = document.querySelectorAll("img[data-src]");

// const loadImage = (img) => {
//   const src = img.getAttribute("data-src");
//   img.setAttribute("src", src);
//   img.removeAttribute("data-src");
// };

// const observer = new IntersectionObserver(
//   (items, observer) => {
//     items.forEach((item) => {
//       if (!item.isIntersecting) return;
//       else {
//         loadImage(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   },
//   {
//     threshold: 0,
//     rootMargin: "0px 0px 100px 0px",
//   }
// );

// lazyloadimage.forEach((img) => {
//     observer.observe(img);
// });