 let hello=document.querySelector(".heading")
     
     window.addEventListener('load',appearText)
      
      function appearText() {
      console.log("it works");
      hello.classList.add("helloAnim");     
      }
     