const initSlider=()=>{
    const imageList=document.querySelector(".slider-wrapper .image-list");
    const slideButtons=document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft=imageList.scrollWidth-imageList.clientWidth;

    const imageList1=document.querySelector(".slider-wrapper1 .image-list");
    const slideButtons1=document.querySelectorAll(".slider-wrapper1 .slide-button");
    const maxScrollLeft1=imageList1.scrollWidth-imageList1.clientWidth;

    const imageList2=document.querySelector(".slider-wrapper2 .image-list");
    const slideButtons2=document.querySelectorAll(".slider-wrapper2 .slide-button");
    const maxScrollLeft2=imageList2.scrollWidth-imageList2.clientWidth;

    const imageList3=document.querySelector(".slider-wrapper3 .image-list");
    const slideButtons3=document.querySelectorAll(".slider-wrapper3 .slide-button");
    const maxScrollLeft3=imageList3.scrollWidth-imageList3.clientWidth;

    /*SALON 2*/ 
    slideButtons.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slide"?-1:1;
            const scrollAmount=imageList.clientWidth*direction;
            imageList.scrollBy({ left:scrollAmount,behavior:"smooth"});
        });
    });
    const handleSlideButtons=()=>{
        slideButtons[0].style.display=imageList.scrollLeft<=0? "none":"block";
        slideButtons[1].style.display=imageList.scrollLeft>=maxScrollLeft? "none":"block";
    }
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });

    /*SALON 3*/
    slideButtons1.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slide1"?-1:1;
            const scrollAmount=imageList1.clientWidth*direction;
            imageList1.scrollBy({ left:scrollAmount,behavior:"smooth"});
        });
    });
    const handleSlideButtons1=()=>{
        slideButtons1[0].style.display=imageList1.scrollLeft<=0? "none":"block";
        slideButtons1[1].style.display=imageList1.scrollLeft>=maxScrollLeft1? "none":"block";
    }
    imageList1.addEventListener("scroll", () => {
        handleSlideButtons1();
    });

    /*SALON 4*/
    slideButtons2.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slide2"?-1:1;
            const scrollAmount=imageList2.clientWidth*direction;
            imageList2.scrollBy({ left:scrollAmount,behavior:"smooth"});
        });
    });
    const handleSlideButtons2=()=>{
        slideButtons2[0].style.display=imageList2.scrollLeft<=0? "none":"block";
        slideButtons2[1].style.display=imageList2.scrollLeft>=maxScrollLeft2? "none":"block";
    }
    imageList2.addEventListener("scroll", () => {
        handleSlideButtons2();
    });

    /*SALON 5*/
    slideButtons3.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slide3"?-1:1;
            const scrollAmount=imageList3.clientWidth*direction;
            imageList3.scrollBy({ left:scrollAmount,behavior:"smooth"});
        });
    });
    const handleSlideButtons3=()=>{
        slideButtons3[0].style.display=imageList3.scrollLeft<=0? "none":"block";
        slideButtons3[1].style.display=imageList3.scrollLeft>=maxScrollLeft3? "none":"block";
    }
    imageList3.addEventListener("scroll", () => {
        handleSlideButtons3();
    });
    
}

window.addEventListener("load",initSlider);


const galleryContainer=document.querySelector('gallery-container-rec');
const galleryControlsContainer=document.querySelector('gallery-controls');
const galleryControls=['previos','next'];
const galleryItems=document.querySelector('galerry-item');

class Carousel{

    constructor(container, items,controls){
        this.carouselContainer=container;
        this.carouselControls=controls;
        this.carousekArray=[...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('galley-item-1');
            el.classList.remove('galley-item-2');
            el.classList.remove('galley-item-3');
            el.classList.remove('galley-item-4');
            el.classList.remove('galley-item-5');
            el.classList.remove('galley-item-6');
        });

        this.carouselArray.slice(0,5).forEach((el, i) =>{
            el.classList.add('galerry-item-${i+1}');
        });
    }

    setCurrentState(direction){
        if(direction.className=='gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control =>{
            galleryControlsContainer.appendChild(document.createElement('button')).className='gallery-controls-${control}';
            document.querySelector('gallery-controls-${control}').innerText=control;
        });
    }

    useControls(){
        const triggers=[...galleryControlsContainer.childNodes];
        triggers.forEach(control =>{
            control.addEventListener('click', e =>{
                e.preventDefault();
                this.setCurrentState(control);
            })   
        });
    }
}

const exampleCarousel=new Carousel(galleryContainer,galleryItems,galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();