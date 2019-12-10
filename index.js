function information() {
  alert('Добро пожаловать в архив. Для добавления/редактирования/удаления'+
    ' досье воспользуйтесь соответствующей кнопкой. Для более детальной информации'+
    ' нажмите на имя необходимиого вам человека.');
}

function editOfficer(i){
  display("createNew");
  document.getElementById("textName").value=  arrOfficers[i].name;
  document.getElementById("textSurname").value=  arrOfficers[i].suername;
  document.getElementById("textAge").value=arrOfficers[i].age;
  document.getElementById("textStudy").value=arrOfficers[i].study;
  document.getElementById("textSpeciality").value=  arrOfficers[i].speciality;
  document.getElementById("textRankName").value=  arrOfficers[i].rankName;
  document.getElementById("textExperience").value=arrOfficers[i].experience; 
  document.getElementById("textLocation").value=arrOfficers[i].location;
  deleteOfficer(i,arrOfficers);
  document.getElementById("mainMenu").style.display="none";
}

function deleteOfficer(i,arrOfficers) {
  arrOfficers.splice(i,1);
  printInfo(arrOfficers);
}

function printDetailedInfo(i){
  let form = document.getElementById("detailedInfo").getElementsByTagName("form");
  form[0].innerHTML='<br>';
  form[0].innerHTML+='<div class="detailInfo">'+
      '<div class="details">'+
        '<div class="elem">Имя</div>'+
        '<div class="elem">Фамилия</div>'+
        '<div class="elem">Возраст</div>'+
        '<div class="elem">Образование</div>'+
        '<div class="elem">Срециальность</div>'+
        '<div class="elem">Звание</div>'+
        '<div class="elem">Стаж</div>'+
        '<div class="elem">Локация</div>'+
      '</div>'+
      '<div class="details">'+
        '<div class="elem">'+arrOfficers[i].name+'</div>'+
        '<div class="elem">'+arrOfficers[i].surname+'</div>'+
        '<div class="elem">'+arrOfficers[i].age+'</div>'+
        '<div class="elem">'+arrOfficers[i].study+'</div>'+
        '<div class="elem">'+arrOfficers[i].speciality+'</div>'+
        '<div class="elem">'+arrOfficers[i].rankName+'</div>'+
        '<div class="elem">'+arrOfficers[i].experience+'</div>'+
        '<div class="elem">'+arrOfficers[i].location+'</div>'+
      '</div>'+
    '</div><br>'+
    '<input type="button" class="buttons" id="mainMenu2" value="Главное меню">';
  document.getElementById("mainMenu2").addEventListener("click",function() {
    display("info");
  });
}

function printInfo(arrOfficers) {
  let form = document.getElementById("info").getElementsByTagName("form");
  form[0].innerHTML='<br>';
  form[0].innerHTML+='<div class="divGorizontal">'+
    '<div class="divGorizontalElem strong">Имя</div>'+
    '<div class="divGorizontalElem strong">Фамилия</div>'+
    '<div class="divGorizontalElem strong">Возраст</div>'+
    '<div class="divGorizontalElem strong">Образование</div>'+
    '<div class="divGorizontalElem strong">Локация</div>'+
    '<div class="divGorizontalElem strong"></div>'+
    '<div class="divGorizontalElem strong"></div>'+
    '</div>';

  for (let i=0; i<arrOfficers.length; i++) {
    form[0].innerHTML+='<div class="divGorizontal">'+
      '<div class="divGorizontalElem " id="details'+i+'">'+arrOfficers[i].name+'</div>'+
      '<div class="divGorizontalElem ">'+arrOfficers[i].surname+'</div>'+
      '<div class="divGorizontalElem ">'+arrOfficers[i].age+'</div>'+
      '<div class="divGorizontalElem ">'+arrOfficers[i].study+'</div>'+
      '<div class="divGorizontalElem ">'+arrOfficers[i].location+'</div>'+
      '<div class="divGorizontalElem " id="edit'+i+'">Редактировать</div>'+
      '<div class="divGorizontalElem " id="remove'+i+'">Удалить</div>'+
      '</div>';
  }
  form[0].innerHTML+='<br>'+
  '<input type="button" id="newOfficerButton" class="buttons" value="Добавить новое досье">';

  for (let i=0;i<arrOfficers.length;i++){
    let edit='edit'+i;
    let remove='remove'+i;
    let details='details'+i;
    document.getElementById(edit).style.color="yellow";
    document.getElementById(remove).style.color="red";
    document.getElementById(details).style.color="purple";

    document.getElementById(details).addEventListener("click",function(){
      printDetailedInfo(i,arrOfficers);
      display("detailedInfo");
    });

    document.getElementById(edit).addEventListener("click",function(){
      editOfficer(i);
    });
    document.getElementById(remove).addEventListener("click",function(){
      if (confirm("Вы уверены, что хотите удалить инофрмацию о " +
      arrOfficers[i].name + " " +arrOfficers[i].surname+"?")) {
          deleteOfficer(i,arrOfficers);
      } else {
      }
    });
  }
  document.getElementById("newOfficerButton").addEventListener("click",function(){
    display("createNew");
    document.getElementById("createOfficer").style.display="";
  })
}

function display(visibleId) {
  switch (visibleId) {
  case "createNew":
  document.getElementById("info").style.display="none";
  document.getElementById("detailedInfo").style.display="none";
  document.getElementById("createNew").style.display="flex";
  break;
  case "detailedInfo":
  document.getElementById("info").style.display="none";
  document.getElementById("detailedInfo").style.display="flex";
  document.getElementById("createNew").style.display="none";
  break;
  case "info":
  default :
  document.getElementById("info").style.display="flex";
  document.getElementById("detailedInfo").style.display="none";
  document.getElementById("createNew").style.display="none";
  }
}

class BaseClassOfficer {
  constructor(name,surname,age,study,speciality,rankName) {
	   this.name= name;
     this.surname = surname;
     this.age = age;
     this.study = study;
     this.speciality = speciality;
     this.rankName = rankName;
  }

  get name() {
      return this._name;
  }
  set name(value) {
    if (value.length == 0) {
      alert("заполните поле имя");
      return;
    }
    this._name = value;
  }

  get surname() {
      return this._surname;
  }
  set surname(value) {
    if (value.length == 0) {
      alert("заполните поле фамилия");
      return;
    }
    this._surname = value;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    if (value.length == 0) {
      alert("заполните поле возраст");
      return;
    }
    this._age = value;
  }

  get study() {
      return this._study;
  }
  set study(value) {
    if (value.length == 0) {
      alert("заполните поле обучение");
      return;
    }
    this._study = value;
  }

  get speciality() {
      return this._speciality;
  }
  set speciality(value) {
    if (value.length == 0) {
      alert("заполните поле специальность");
      return;
    }
    this._speciality = value;
  }
  
  get rankName() {
      return this._rankName;
  }
  set rankName(value) {
    if (value.length == 0) {
      alert("заполните поле звание");
      return;
    }
    this._rankName = value;
  }
}

class ProtoClassTankist extends BaseClassOfficer {
  constructor (name,surname,age,study,speciality,rankName,experience,location) {
    super(name,surname,age,study,speciality,rankName);
    this.type="Tankist";
    this.experience=experience;
    this.location=location;
  }

  get experience(){
    return this._experience;
  }
  set experience(value){
    if (value.length == 0) {
      alert("Заполните поле стаж");
      return;
    }
    this._experience = value;
  }

  get location(){
    return this._location;
  }
  set location(value){
    if (value.length == 0) {
      alert("Заполните поле локация");
      return;
    }
    this._location = value;
  }
}

class ProtoClassInfantry extends BaseClassOfficer {
  constructor (name,surname,age,study,speciality,rankName,experience,location) {
    super(name,surname,age,study,speciality,rankName);
    this.type="Infantry";
    this.experience=experience;
    this.location=location;
  }

  get experience(){
    return this._experience;
  }
  set experience(value){
    if (value.length == 0) {
      alert("Заполните поле стаж");
      return;
    }
    this._experience = value;
  }

  get location(){
    return this._location;
  }
  set location(value){
    if (value.length == 0) {
      alert("Заполните поле локация");
      return;
    }
    this._location = value;
  }


}

function checkRadio() {
    var radio=document.getElementsByName('radioOfficerType');
    for (var i=0;i<radio.length; i++) {
        if (radio[i].checked) {
            return(radio[i].value);
        }
    }
}

let arrOfficers = [];

information();
let officer1 = new ProtoClassTankist("Ivan","Ivanov","28","GrGU","Bomber","Leutenant",15,"Grodno");
arrOfficers.push(officer1);
let officer2 = new ProtoClassInfantry("Dmitrii","Petrov","24","VA RB","Bomber","Leutenant",20,"Minsk");
arrOfficers.push(officer2);
let officer3 = new ProtoClassInfantry("Nikolai","Sidorov","35","BGUiR","Bomber","Leutenant-Colonel",22,"Minsk");
arrOfficers.push(officer3);
let officer4 = new ProtoClassInfantry("Vladimir","Kozlov","45","BNTU","Bomber","Colonel",24,"Minsk");
arrOfficers.push(officer4);
display("info");
printInfo(arrOfficers);

document.getElementById("createOfficer").addEventListener("click", function() {
  document.getElementById("mainMenu").style.display="";
  let name = document.getElementById("textName").value;
  let surname = document.getElementById("textSurname").value;
  let age = document.getElementById("textAge").value;
  let study = document.getElementById("textStudy").value;
  let speciality = document.getElementById("textSpeciality").value;
  let rankName = document.getElementById("textRankName").value;
  let experience =document.getElementById("textExperience").value;
  let location =document.getElementById("textLocation").value;
  let type = checkRadio();
  switch (type) {
    case "tankist":
      arrOfficers[arrOfficers.length] = new ProtoClassTankist(name,surname,age,study,speciality,rankName,experience,location);
      printInfo(arrOfficers);
      display("info");
      alert("Дело добавлено в архив");
    break;
    case "infantry":
      arrOfficers[arrOfficers.length] = new ProtoClassInfantry(name,surname,age,study,speciality,rankName,experience,location);
      printInfo(arrOfficers);
      display("info");
      alert("Дело добавлено в архив");
      break;
    default :
      arrOfficers[arrOfficers.length] = new ProtoClassInfantry(name,surname,age,study,speciality,rankName,experience,location);
      printInfo(arrOfficers);
      display("info");
      alert("Дело добавлено в архив");
  }
});

document.getElementById("mainMenu").addEventListener("click",function() {
  display("info");
});
