const cat=document.getElementById('cat');
const dropdowncontent=document.getElementById('dropdown-content');
const welcome=document.getElementById('welcome');
const rentals=document.getElementById('rentals');
cat.addEventListener('mouseover',function handleMouseOver1()
{
    dropdowncontent.style.display='block';
    welcome.style.display='none';
    rentals.style.display='none';
});
cat.addEventListener('mouseout',function handleMouseOut1()
{
    dropdowncontent.style.display='none';
    welcome.style.display='block';
    rentals.style.display='block';
});
dropdowncontent.addEventListener('mouseover',function handleMouseOver2()
{
    dropdowncontent.style.display='block';
    welcome.style.display='none';
    rentals.style.display='none';
});
dropdowncontent.addEventListener('mouseout',function handleMouseOut2()
{
    dropdowncontent.style.display='none';
    welcome.style.display='block';
    rentals.style.display='block';
});