let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);

  let colArr = await getColleges(country);
  show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

let url = "http://universities.hipolabs.com/search?name="; //API URL

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (err) {
    console.log("Error = ", err);
    return [];
  }
}
