=========

// Source: https://css-tricks.com/how-to-use-the-locomotive-scroll-for-all-kinds-of-scrolling-effects/
    
// Inside the <head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.1/dist/locomotive-scroll.min.css">
    
    
    
    
    
    
    
// At the end of the <body>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.1/dist/locomotive-scroll.min.js"></script>
<script nomodule src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js" crossorigin="anonymous"></script>
<script nomodule src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll" crossorigin="anonymous"></script>

<script>
    const fixBigBottomGap = document.getElementsByTagName('body')[0].style = "overflow:hidden";
    const scrollContainer = document.querySelector("#r33c2 > div:nth-child(2) > div");
    scrollContainer.setAttribute("data-scroll-container", "");

    const main = document.querySelector("main");
    const sections = main.childNodes;
    sections.forEach((section, index) => {
        if(index > 0 && index < sections.length){
            section.setAttribute("data-scroll-section", "")
        }
    });

    function animateElements() {
        const hurScllText01 = document.querySelector("#comp-kv159s9j1");
        const hurScllText02 = document.querySelector("#comp-kv159s9l");
        const hurScllText03 = document.querySelector("#comp-kv159s9m3");
        setScrollSpeed(hurScllText01, 5, 'horizontal');
        setScrollSpeed(hurScllText02, 8, 'horizontal');
        setScrollSpeed(hurScllText03, -2, 'horizontal');
    }

    function setScrollSpeed(element, speed, direction = 'vertical') {
        element.setAttribute("data-scroll", "1");
        element.setAttribute("data-scroll-speed", `${speed}`);
        element.setAttribute("data-scroll-direction", `${direction}`);
    }


    animateElements();

    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true },
        multiplier: 0.5
    });

    alert('This ite is trying to use Locomotive Scroll');

//    var style = document.createElement('style');
//    style.type = 'text/css';
//    style.src = 'https://0d6674a6-8606-463f-8bf1-2ec5d09857d6.usrfiles.com/ugd/0d6674_f7c9cf34109749788995a8c0ab074310.txt'
//    style.innerHTML = '.cssClass { color: #F00; }';
//    document.getElementsByTagName('head')[0].appendChild(style);

// Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0]; 
  
        // Create new link Element
        var link = document.createElement('link');
  
        // set the attributes for link element 
        link.rel = 'stylesheet'; 
      
        link.type = 'text/css';
      
        link.href = 'https://0d6674a6-8606-463f-8bf1-2ec5d09857d6.usrfiles.com/ugd/0d6674_f7c9cf34109749788995a8c0ab074310.txt'; 
  
        // Append link element to HTML head
        head.appendChild(link); 
</script>

