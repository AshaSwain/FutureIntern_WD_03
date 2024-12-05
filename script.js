 let cel = document.querySelector('#cel');
 let far = document.querySelector('#far');


 cel.addEventListener('input',() => {
    let c = Number(cel.value);
    let f = (c*9/5) + 32 ;
    far.value = f;
    
 });

 far.addEventListener('input',() => {
    let f = Number(far.value);
   let c = (f-32) * 5/9 ;
    cel.value = c;

 });