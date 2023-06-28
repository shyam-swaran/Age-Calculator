let date=document.getElementById("date");
let month=document.getElementById("month");
let year=document.getElementById("year");
let dw=document.getElementById("wd");
let dm=document.getElementById("wm");
let dy=document.getElementById("wy");
let dh=document.getElementById("dheader");
let mh=document.getElementById("mheader");
let yh=document.getElementById("yheader");
var resYear=0;
var resMonth=0;
var resDay=0;

date.addEventListener("input",()=>{
    if(date.value>31){
        dw.innerText="Must be a valid day";
        date.style.borderColor="hsl(0, 100%, 67%)";
        dh.style.color="hsl(0, 100%, 67%)";
    }else{
        dw.innerText="";
        date.style.borderColor="";
        dh.style.color="";
    }
});
month.addEventListener("input",()=>{
    if(month.value>12){
        dm.innerText="Must be a valid month";
        month.style.borderColor="hsl(0, 100%, 67%)";
        mh.style.color="hsl(0, 100%, 67%)";
    }else{
        dm.innerText="";
        month.style.borderColor="";
        mh.style.color="";
    }
});
year.addEventListener("input",()=>{
    let today= new Date();
    if(year.value<1000 || year.value>9999 ){
        dy.innerText="Must be a valid year";
        year.style.borderColor="hsl(0, 100%, 67%)";
        yh.style.color="hsl(0, 100%, 67%)";
    }else if(year.value>today.getFullYear()){
        dy.innerText="Must in the past";
        year.style.borderColor="hsl(0, 100%, 67%)";
        yh.style.color="hsl(0, 100%, 67%)";
    }else{
        dy.innerText="";
        year.style.borderColor="";
        yh.style.color="";
    }
});
function dateset(){
    let date=document.getElementById("date");
    let month=document.getElementById("month");
    let year=document.getElementById("year");
    let dw=document.getElementById("wd");
    let dm=document.getElementById("wm");
    let dy=document.getElementById("wy");
    let dh=document.getElementById("dheader");
    let mh=document.getElementById("mheader");
    let yh=document.getElementById("yheader");
    let rd=document.getElementById("resdays");
    let rm=document.getElementById("resmonths");
    let ry=document.getElementById("resyears");
    console.log(year.value);
    let check=false;
    if(year.value==""){
        dy.innerText="This field is required";
        year.style.borderColor="hsl(0, 100%, 67%)";
        yh.style.color="hsl(0, 100%, 67%)";
        check=true;
    }
    if(month.value==""){
        dm.innerText="This field is required";
        month.style.borderColor="hsl(0, 100%, 67%)";
        mh.style.color="hsl(0, 100%, 67%)";
        check=true;
    }
    if(date.value==""){
        dw.innerText="This field is required";
        date.style.borderColor="hsl(0, 100%, 67%)";
        dh.style.color="hsl(0, 100%, 67%)";
        check=true;
    }
    if(check) return;
    const birthDate = new Date(`${month.value}-${date.value}-${year.value}`);
    calculateAge(birthDate);
    rd.innerText=resDay;
    rm.innerText=resMonth;
    ry.innerText=resYear;
};
function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
  
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
  
    resYear = currentYear - birthYear;
    resMonth = currentMonth - birthMonth;
    resDay = currentDay - birthDay;
    if (resMonth < 0 || (resMonth === 0 && resDay < 0)) {
      resYear--;
      resMonth += 12;
    }  
  }
  