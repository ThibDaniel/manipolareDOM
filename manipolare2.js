function createPersonObject() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const person = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    return person;
  }

  function addDataPersonAttribute() {
    const form = document.getElementById("myForm");
    const person = createPersonObject();
    const jsonPerson = JSON.stringify(person);
    form.setAttribute("data-person", jsonPerson);
  }

  addDataPersonAttribute();