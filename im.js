
    
    
        var a=1;
        function disp()
        { 
              a++;

            if(a>4)
            {
                alert("no more images");
                return;

            }
            else if(a==1)
            s.src="earth.jpg";
            else if(a==2)
            s.src="mars.jpeg";
            else if(a==3)
            s.src="jupiter.jpeg";
            else if(a==4)
            s.src="neptune.jpeg";
            

            
        }
        function show()
        {
            a--;
            if(a<1)
            {
                alert("no more images");
                retun;

            }
            else if(a==1)
            s.src="earth.jpg";
            else if(a==2)
            s.src="mars.jpeg";
            else if(a==3)
            s.src="jupiter.jpeg";
            else if(a==4)
            s.src="neptune.jpeg";

        }
    
