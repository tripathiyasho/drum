
var x = document.querySelectorAll(".drum").length;

for (var i = 0 ; i< x ; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function ()
        {
           var but = this.innerHTML;
          makeSound(but);
          buani(but);
           
        });
    }

        document.addEventListener("keydown", function(event)
        {
            makeSound(event.key);
            buani (event.key);
        });

        function makeSound(key)
        {
            switch(key)
            {
             case "w":
               var au = new Audio("./sounds/crash.mp3");
               au.play();
               break;
               case "a":
               var ba = new Audio("./sounds/kick-bass.mp3");
               ba.play();
               break;
               case "s":
               var sn= new Audio("./sounds/snare.mp3");
               sn.play();
               break;
               case "d":
               var t1 = new Audio("./sounds/tom-1.mp3");
               t1.play();
               break;
               case "j":
               var t2 = new Audio("./sounds/tom-2.mp3");
               t2.play();
               break; 
               case "k":
               var t3 = new Audio("./sounds/tom-3.mp3");
               t3.play();
               break;
               case "l":
               var t4 = new Audio("./sounds/tom-4.mp3");
               t4.play();
               break;
               default : console.log(but) ;
            }
        }

        function buani(currentKey)
        {
            var ab = document.querySelector("." + currentKey);

            ab.classList.add("pressed");
            
            setTimeout(function()
             {
                ab.classList.remove("pressed");
            }, 100);
            }
        
        

      