function createTableFromArray(dt, tc, id, style, align){ 
  let txt = ""
  txt += "<table class='" + tc +  "' align='" + align +  "' style='" + style + "' id ='" + id + "'>"
  for (i = 0; i < dt.length; i++) {
    txt += "<tr>"
    for (j = 0; j < dt[0].length; j++) {
      if (i==0){
        txt += "<th>"
        txt += dt[i][j]
        txt += "</th>"
      }else{
        txt += "<td>"
        txt += dt[i][j]
        txt += "</td>"
      }
    };
    txt += "</tr>"
  };

  txt += "</table>"
  return txt
};
