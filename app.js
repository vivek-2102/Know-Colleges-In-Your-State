let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
  await getColleges(inp.value);
  inp.value="";
});
let url = "http://universities.hipolabs.com/search?name=india";

async function getColleges(city) {
  let ul = document.getElementById("listItems");
  ul.innerText = "";
  let res;
  try{
   res = await axios.get(url);
  }
  catch(err)
  {
    alert(err);
  }
  let ans = res.data;
  console.log(ans);

  for (colleges of ans) {
    if (colleges["state-province"] == city) {
      let li = document.createElement("li");
      li.innerText = colleges.name;
      ul.appendChild(li);
    }
  }
}
