let points
points=[1,2,3];

$(".dropdown a").click(function(){
  /* if (jugada_jugador==="points") */
  let lista=["Piedra","Papel","Tijeras"];
	let jugada_jugador=$(this).text();
  let mi_jugada=Math.floor(Math.random()*3);
  let mi_jugada2=lista[mi_jugada];
  $(".milog").text('El primer jugador ha sacado '+jugada_jugador+' y el segundo jugador ha sacado '+mi_jugada2);
  imagenes();
  imgs();
  contador();
  
  function imagenes(){
    $('.milog2').html('');
  if (jugada_jugador==="Piedra") $('.milog2').append("<img src='https://i.imgur.com/YIr3ym9.png'>");
   else if (jugada_jugador==="Papel") $('.milog2').append("<img src='https://i.imgur.com/8FX5ual.png'>");
    else if (jugada_jugador==="Tijeras") $('.milog2').append("<img src='https://i.imgur.com/MBEcqqm.png'>"); 
 }
    function imgs(){
  if (mi_jugada2==="Piedra") $('.milog2').append("<img src='https://i.imgur.com/YIr3ym9.png'>");
   else if (mi_jugada2==="Papel") $('.milog2').append("<img src='https://i.imgur.com/8FX5ual.png'>");
    else if (mi_jugada2==="Tijeras") $('.milog2').append("<img src='https://i.imgur.com/MBEcqqm.png'>"); 
 }
  
  function contador(){
    if (jugada_jugador==="Piedra" && mi_jugada2==="Piedra") $('.milog4').html("<img src='https://i.imgur.com/pz4R4TA.png'>"); 
         else if (jugada_jugador==="Piedra" && mi_jugada2==="Tijeras") $('.milog4').html("<img src='https://i.imgur.com/aBNNTlV.png'>"); 
                    else if (jugada_jugador==="Piedra" && mi_jugada2==="Papel") $('.milog4').html("<img src='https://i.imgur.com/lYZ0ssO.png'>");
      if (jugada_jugador==="Papel" && mi_jugada2==="Piedra") $('.milog4').html("<img src='https://i.imgur.com/aBNNTlV.png'>"); 
         else if (jugada_jugador==="Papel" && mi_jugada2==="Tijeras") $('.milog4').html("<img src='https://i.imgur.com/lYZ0ssO.png'>"); 
                    else if (jugada_jugador==="Papel" && mi_jugada2==="Papel") $('.milog4').html("<img src='https://i.imgur.com/pz4R4TA.png'>");
        if (jugada_jugador==="Tijeras" && mi_jugada2==="Piedra") $('.milog4').html("<img src='https://i.imgur.com/lYZ0ssO.png'>"); 
         else if (jugada_jugador==="Tijeras" && mi_jugada2==="Tijeras") $('.milog4').html("<img src='https://i.imgur.com/pz4R4TA.png'>"); 
                    else if (jugada_jugador==="Tijeras" && mi_jugada2==="Papel") $('.milog4').html("<img src='https://i.imgur.com/aBNNTlV.png'>");
  }

/*    if (img==='https://i.imgur.com/aBNNTlV.png').text("Has ganado");
      else if (img==='https://i.imgur.com/lYZ0ssO.png').text("Has perdido")
  } */
});