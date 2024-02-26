var a=1;
function change()
{
    a++;
    if(a%2==0)
    {
        imgchange.src="bu.jpg";
        para.innerHTML="bulb is on";

    }
    else
    {
        imgchange.src="off.jpeg";
        para.innerHTML="bulb is off";
    }
}
