let dis=document.querySelector('.screen');
function display(input)
{
    dis.innerHTML+=input;
}
function clearscreen()
{
    dis.innerHTML="";
}
function calculation()
{
    dis.innerHTML=eval(dis.innerHTML);
}