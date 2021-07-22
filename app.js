  var age = Number;
 var _name =String;
 var gender=String;
  age = prompt('enter your age','');
  _name = prompt(' enter your name','');
 gender = prompt('what is your gender','');
while(isNaN(age)){
    age = prompt('enter your age as number','');
}
 function getDetails( age, _name,gender){
return age,_name;
}

function checkAge(age){
    if(age >= 18){
        return true;
    }else{
        return confirm('you are under 18 you are not allowed')
    }
}
while(gender != 'Female' && gender != 'Male'){
  
        gender = prompt('enter your gender as Female or Male','');
   
}

let Female = 'F';
let Male= 'M';
let message='';
if(gender == 'Female' || gender == 'Male'){
    if(gender =='Female' && checkAge(age)){
        message = 'Hi '+ _name +' your Gender is '+ Female +' , you are above 18';
   }
   else if(gender =='Male' && checkAge(age)){
      message='Hi '+_name +' your Gender is '+ Male +' , you are above 18';

   }
}
    console.log(message);



//  var arrName = [];
//  let arrSu = [];
//  for(var i=0; i<3;i++){
//      arrayItems = prompt('');
// arrName[i]= arrayItems;
// arrayItem = prompt('');
// arrSu[i]= arrayItem;

//  }
//   console.log(arrName.join('\n') +arrSu.join('\n'));
//  for(i=0; i<3 ;i++){
//     console.log(arrName[i] + arrSu[i]);
//  }
var arrName =[];
var arrSurname=[];
var arrGender=[];
var arrAge=[];

console.log('Name  | Surname  | Gender | Age ');
var _message =prompt('how many users do u want to enter','');
while(isNaN(_message)){
    _message=prompt('Enter number of users you want ','');
}
var tol=1;
for(var i=0;i<_message;i++){
    arrName.push(prompt('Enter name of user '+tol,''));
    arrSurname.push(prompt('Enter Surname of user '+tol,''));
    arrGender.push(prompt('Enter Gender of user '+tol,''));
    arrAge.push(prompt('Enter Age of user '+tol,''));
tol++;
}
for(i=0;i<_message;i++){
    console.log(arrName[i]+' | '+ arrSurname[i]+ ' |  '+arrGender[i] +' | '+arrAge[i]);
}
let sum = (num1,num2,num3) => num1 + num2 + num3;
 console.log('sum =' + sum(21,27,29));


