function validate(){
    let presentDate= new Date();
    let start= new Date(2020, 9, 7);
    let end= new Date(2020, 9, 11, 11, 59, 59);
    if(presentDate >= start && presentDate <= end){
        alert('Congratulations! Registration successful.');
        return true;
    } else{
        alert('Oops! Registration has ended.');
        return true;
    }
}