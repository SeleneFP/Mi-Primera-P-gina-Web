const initSlider=()=>{
    const imageList=document.querySelector(".slider-wrapperR .image-list");
    const slideButtons=document.querySelectorAll(".slider-wrapperR .slide-button");
    const maxScrollLeft=imageList.scrollWidth-imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slideR"?-1:1;
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

    const imageList1=document.querySelector(".slider-wrapperR1 .image-list");
    const slideButtons1=document.querySelectorAll(".slider-wrapperR1 .slide-button");
    const maxScrollLeft1=imageList1.scrollWidth-imageList1.clientWidth;

    slideButtons1.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slideR1"?-1:1;
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

    const imageList2=document.querySelector(".slider-wrapperR2 .image-list");
    const slideButtons2=document.querySelectorAll(".slider-wrapperR2 .slide-button");
    const maxScrollLeft2=imageList2.scrollWidth-imageList2.clientWidth;

    slideButtons2.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slideR2"?-1:1;
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

    const imageList3=document.querySelector(".slider-wrapperR3 .image-list");
    const slideButtons3=document.querySelectorAll(".slider-wrapperR3 .slide-button");
    const maxScrollLeft3=imageList3.scrollWidth-imageList3.clientWidth;

    slideButtons3.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slideR3"?-1:1;
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

    const imageList4=document.querySelector(".slider-wrapperR4 .image-list");
    const slideButtons4=document.querySelectorAll(".slider-wrapperR4 .slide-button");
    const maxScrollLeft4=imageList1.scrollWidth-imageList4.clientWidth;

    slideButtons4.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slideR4"?-1:1;
            const scrollAmount=imageList4.clientWidth*direction;
            imageList4.scrollBy({ left:scrollAmount,behavior:"smooth"});
        });
    });
    const handleSlideButtons4=()=>{
        slideButtons4[0].style.display=imageList4.scrollLeft<=0? "none":"block";
        slideButtons4[1].style.display=imageList4.scrollLeft>=maxScrollLeft4? "none":"block";
    }
    imageList4.addEventListener("scroll", () => {
        handleSlideButtons4();
    });
    const imageList5=document.querySelector(".slider-wrapperR5 .image-list");
    const slideButtons5=document.querySelectorAll(".slider-wrapperR5 .slide-button");
    const maxScrollLeft5=imageList1.scrollWidth-imageList5.clientWidth;

    slideButtons5.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slideR5"?-1:1;
            const scrollAmount=imageList5.clientWidth*direction;
            imageList5.scrollBy({ left:scrollAmount,behavior:"smooth"});
        });
    });
    const handleSlideButtons5=()=>{
        slideButtons5[0].style.display=imageList5.scrollLeft<=0? "none":"block";
        slideButtons5[1].style.display=imageList5.scrollLeft>=maxScrollLeft5? "none":"block";
    }
    imageList1.addEventListener("scroll", () => {
        handleSlideButtons1();
    });
    const imageList6=document.querySelector(".slider-wrapperR6 .image-list");
    const slideButtons6=document.querySelectorAll(".slider-wrapperR6 .slide-button");
    const maxScrollLeft6=imageList6.scrollWidth-imageList6.clientWidth;

    slideButtons6.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slideR6"?-1:1;
            const scrollAmount=imageList6.clientWidth*direction;
            imageList6.scrollBy({ left:scrollAmount,behavior:"smooth"});
        });
    });
    const handleSlideButtons6=()=>{
        slideButtons6[0].style.display=imageList6.scrollLeft<=0? "none":"block";
        slideButtons6[1].style.display=imageList6.scrollLeft>=maxScrollLeft6? "none":"block";
    }
    imageList6.addEventListener("scroll", () => {
        handleSlideButtons6();
    });
    const imageList7=document.querySelector(".slider-wrapperR7 .image-list");
    const slideButtons7=document.querySelectorAll(".slider-wrapperR7 .slide-button");
    const maxScrollLeft7=imageList7.scrollWidth-imageList7.clientWidth;

    slideButtons7.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slideR7"?-1:1;
            const scrollAmount=imageList1.clientWidth*direction;
            imageList7.scrollBy({ left:scrollAmount,behavior:"smooth"});
        });
    });
    const handleSlideButtons7=()=>{
        slideButtons7[0].style.display=imageList7.scrollLeft<=0? "none":"block";
        slideButtons7[1].style.display=imageList7.scrollLeft>=maxScrollLeft7? "none":"block";
    }
    imageList7.addEventListener("scroll", () => {
        handleSlideButtons7();
    });


    
}

window.addEventListener("load",initSlider);
