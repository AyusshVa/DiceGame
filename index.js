var randNumber1 = Math.floor(Math.random()*6) +1;
document.querySelector('.img1').setAttribute('src','images/dice'+randNumber1+'.png');
var randNumber2 = Math.floor(Math.random()*6) +1;
document.querySelector('.img2').setAttribute('src','images/dice'+randNumber2+'.png');

if(randNumber1 > randNumber2)
{
    document.querySelector('h1').textContent="Player1 wins!!🥇🥇";
    document.querySelector('h1').style.fontSize="4rem";
}

else if(randNumber2> randNumber1)
{
    document.querySelector('h1').textContent="Player2 wins!!🥇🥇";
    document.querySelector('h1').style.fontSize="4rem";
}

else
{
    document.querySelector('h1').textContent="Draw🎃";

}