var Fname = document.getElementById("fname");
var lName = document.getElementById("lname");
var eMail = document.getElementById("email");
var phoneNum = document.getElementById("phonenum");
var department = document.getElementById("departmentname");
var state = document.getElementById("statename");
var zipCode = document.getElementById("zipcode");
var city = document.getElementById("country");
var address = document.getElementById("area");
var dAte = document.getElementById("date");

const isblank = (valu) => (valu === "" ? true : false);

const showerror = (inpu, massage) => {
  const from1 = inpu.parentElement;
  from1.querySelector(".small").textContent = massage;
};

const showsuccess = (input) => {
  const formField = input.parentElement;
  formField.querySelector(".small").innerHTML = "";
};

//  Regex
const isFirstNameValid = (Fname) => {
  const re = /^[A-Za-z]+$/;
  return re.test(Fname);
};

const isLastNameValid = (lName) => {
  const re = /^[A_Za-z]+$/;
  return re.test(lName);
};

const isEmailValid = (eMail) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  return re.test(eMail);
};

const isPhoneNumValid = (phoneNum) => {
  const re = /^[0-9]{10}$/;
  return re.test(phoneNum);
};

const isDepartmentValid = (department) => {
  const re =  /^[a-zA-Z\s]*$/;
  return re.test(department);
};

const isZipCodeValid = (zipCode) => {
  const re = /^[0-9]{6}$/;
  return re.test(zipCode);
};



// Function
const checkFirstUserName = () => {
  const userFirstName = Fname.value.trim();
  let valid = false;
  if (isblank(userFirstName)) {
    showerror(Fname, "First Name can't be blank");
  } else if (!isFirstNameValid(userFirstName)) {
    showerror(Fname, "Not Valid");
  } else {
    showsuccess(Fname);
    valid = true;
  }
  return valid;
};

const checkLastUserName = () => {
  const userLastName = lName.value.trim();
  let valid = false;
  if (isblank(userLastName)) {
    showerror(lName, "Last Name can't be blank");
  } else if (!isLastNameValid(userLastName)) {
    showerror(lName, "Not valid");
  } else {
    showsuccess(lName);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  const userEmail = eMail.value.trim();
  let valid = false;
  if (isblank(userEmail)) {
    showerror(eMail, "Email can't be blank");
  } else if (!isEmailValid(userEmail)) {
    showerror(eMail, "Not valid Email");
  } else {
    showsuccess(eMail);
    valid = true;
  }
  return valid;
};

const checkPhoneNum = () => {
  let userPhoneNum = phoneNum.value;
  let valid = false;
  if (isblank(userPhoneNum)) {
    showerror(phoneNum, "Phone Number cannot be blank");
  } else if (!isPhoneNumValid(userPhoneNum)) {
    showerror(phoneNum, "Fill 10 digit");
  } else {
    showsuccess(phoneNum);
    valid = true;
  }
  return valid;
};

const checkDepartment = () => {
  let userDepartment = department.value.trim();
  let valid = false;
  if (isblank(userDepartment)) {
    showerror(department, "Department can't be blank");
  } else if (!isDepartmentValid(userDepartment)) {
    showerror(department, "Not valid");
  } else {
    showsuccess(department);
    valid = true;
  }
  return valid;
};
const checkDate = () => {
  let userDate = dAte.value;
  let valid = false;
  if (isblank(userDate)) {
    showerror(dAte, "not valid input");
  } 
  else {
    showsuccess(dAte);
    valid = true;
  }
  return valid;
};

const checkState = () => {
  let userState = state.value;
  let valid = false;

  if (isblank(userState)) {
    showerror(state, "select state");
  } else {
    showsuccess(state);
    valid = true;
  }
  return valid;
};

const checkZipCode = () => {
  let userZipCode = zipCode.value;
  let valid = false;
  if (isblank(userZipCode)) {
    showerror(zipCode, "Zip can't blank");
  } else if (!isZipCodeValid(userZipCode)) {
    showerror(zipCode, "Not valid");
  } else {
    showsuccess(zipCode);
    valid = true;
  }
  return valid;
};

const checkCity = () => {
  let userCity = city.value;
  let valid = false;
  if (isblank(userCity)) {
    showerror(city, "selecte city");
  } else {
    showsuccess(city);
    valid = true;
  }
  return valid;
};

const checkAddress = () => {
  let userAddress = address.value;
  let valid = false;
  if (isblank(userAddress)) {
    showerror(address, "Address can't blank");
  } else {
    showsuccess(address);
    valid = true;
  }
  return valid;
};

//  sumbit 
let form = document.querySelector("#formSubmit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userFirstName = checkFirstUserName();
  let userLastName = checkLastUserName();
  let userEmail = checkEmail();
  let userPhoneNum = checkPhoneNum();
  let userDepartment = checkDepartment();
  let userDate = checkDate();
  let userState = checkState();
  let userZipCode = checkZipCode();
  let userAddress = checkAddress();
  let userCity = checkCity();

  let finalsumbit =
    userFirstName &&
    userLastName &&
    userEmail &&
    userPhoneNum &&
    userDepartment &&
    userDate&&
    userState &&
    userZipCode &&
    userAddress &&
    userCity;

  // local Storage 

  let fName = Fname.value;
  let Lname = lName.value;
  let Email = eMail.value;
  let Phonenum = phoneNum.value;
  let Department = department.value;
  let Date= dAte.value;
  let State = state.value;
  let Zipcode = zipCode.value;
  let City = city.value;
  let Address = address.value;

  let instorage ={
    "fName":fName,
    "Lname":Lname,
    "Email":Email,
    "phoneNum":Phonenum,
    "Department":Department,
    "Date":Date,
    "State":State,
    "Zipcode":Zipcode,
    "City":City,
    "Address":Address,
  }

  let myUserData = JSON.parse(localStorage.getItem("User")) || [];
  
  if(finalsumbit){
    myUserData.push(instorage);
    localStorage.setItem("User", JSON.stringify(myUserData));
    alert(`Success`);
  }
  else{
    alert(`Fill All Datails`);
  }

});

form.addEventListener("input", (e) => {
  switch (e.target.id) {
    case "fname":
      checkFirstUserName();
      break;
    case "lname":
      checkLastUserName();
      break;
    case "email":
      checkEmail();
      break;
    case "phonenum":
      checkPhoneNum();
      break;
    case "departmentname":
      checkDepartment();
      break;
    case "date":
      checkDate();
      break;
    case "statename":
      checkState();
      break;
    case "zipcode":
      checkZipCode();
      break;
    case "country":
      checkCity();
      break;
    case "area":
      checkAddress();
      break;
    default:
      alert("data saved");
  }
});
