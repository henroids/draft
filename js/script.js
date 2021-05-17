fetch(".../json/draft.json").then(
  res=>{
    res.json().then(
      data=>{
        console.log(data);
        if(data.length > 0){
          var temp = "";
          // star for loop

            data.forEach((u)=>{
              temp +="<tr>";
              temp +="<td>"+u.Pos+"</td>";
              temp +="<td>"+u.Player_Line+"</td>";
              temp +="<td>"+u.Rating+"</td>";
              temp +="<td>"+u.School+"</td>";
              // temp +="<td>"+u.Style+"</td>";
            })
          // close for loop

            document.getElementById("data").innerHTML = temp;
        }
      }
    )
  }
)