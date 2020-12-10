var tela = 1;
var wallpaper;
var fotofinal;
var fotocred;
var fonte;
var fonte2;
var fonte3;
var wall;
var rectX = 255;
var rectY = 235;
var contador = 0;
var song;
var  volume;
var firework = [];
var contador2 = 0;
var tempo = 0;

function preload() {
  song = loadSound('saturn.mp3');
  firework[0] = loadImage('firework_red0.png');
  firework[1] = loadImage('firework_red1.png');
  firework[2] = loadImage('firework_red2.png');
  firework[3] = loadImage('firework_red3.png');
  firework[4] = loadImage('firework_red4.png');
  firework[5] = loadImage('firework_red5.png');
  firework[6] = loadImage('firework_red6.png');
  firework[7] = loadImage('firework_red7.png');
}

function setup() {
  createCanvas(700, 500);
  wallpaper = loadImage('terra.jpg');
  fotofinal = loadImage('paper.jpg');
  fotocred = loadImage('picture.png');
  fonte = loadFont('GrinchedRegular.otf');
  fonte2 = loadFont('digitalix.ttf');
  fonte3 = loadFont('Retron2000.ttf');
  wall = loadImage('wall.png');
  song.play();
  song.setVolume(0.006);
}

function draw() {
  //tela inicial
  if (tela == 1) {
    background(wallpaper);
    textFont(fonte);
    textSize(50);
    textAlign(CENTER);

    fill(255, 255, 255);
    text("PLANET CHEMISTRY", width / 2, 100);
    textSize(25);
    text("Start", width / 2, 173);
    text("Instructions", width / 2, 223);
    text("Credits", width / 2, 273);
    contador = 0;

    if (mouseX <= 374 && mouseX >= 326 && mouseY >= 150 && mouseY <= 174) {
      fill(64, 224, 208);
      text("Start", width / 2, 173);
      //se apertar, ele leva pra outra tela
      if (mouseIsPressed) {
        tela = 2;
      }
    } else if (mouseX <= 401 && mouseX >= 298 && mouseY >= 202 && mouseY <= 221) {
      fill(64, 224, 208);
      text("Instructions", width / 2, 223);
      //se apertar, ele leva pra outra tela
      if (mouseIsPressed) {
        tela = 3;
      }
    } else if (mouseX <= 383 && mouseX >= 318 && mouseY >= 252 && mouseY <= 272) {
      fill(64, 224, 208);
      text("Credits", width / 2, 273);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
    //questao 1
  } else if (tela == 2) {
    background(wall);
    fill(138, 43, 226)
    rect(rectX, rectY, 200, 50)
    fill(255, 255, 255);
    textSize(20);
    textFont(fonte2);
    text("Level 1", width / 2, 28);
    textSize(15);
    textFont(fonte3);
    text("O metano (CH4) é um gás pertencente ao grupo dos hidrocarbonetos,\n compostos por carbono e hidrogênio, e é o segundo com maior potencial\n de agravamento de aquecimento global. Sua combustão completa produz CO2\n (dóxido de carbono) e H2O (água). Utilizando a Lei da Conservação\n da Massa, balanceie a equação de queima do metano:", width / 2, 73);
    textSize(28);
    text("_CH4(g) + _O2(g) -> _CO2(g) + _H2O", width / 2, 200);
    textSize(18);
    text("press ESC to return", width / 2, 450);
    textSize(28);
    fill(250, 250, 250)
    text("a. 1, 2, 1, 1", 350, 270);
    text("b. 2, 2, 3, 1", 350, 330);
    text("c. 1, 1, 2, 1", 350, 390);
    if (mouseX <= 458 && mouseX >= 258 && mouseY >= 232 && mouseY <= 285) {
      rectY = 235;
      if (mouseIsPressed) {
        tela = 6
      }
    } else if (mouseX <= 408 && mouseX >= 292 && mouseY >= 305 && mouseY <= 336) {
      rectY = 295
      if (mouseIsPressed) {
        tela = 8
      }
    } else if (mouseX <= 408 && mouseX >= 292 && mouseY >= 355 && mouseY <= 400) {
      rectY = 355
      if (mouseIsPressed) {
        tela = 8
      }
    }
    if (keyIsDown(ESCAPE)) {
      tela = 1
    }
  }

  //questao 2
  else if (tela == 6) {
    background(wall);
    contador++
    fill(138, 43, 226)
    rect(rectX, rectY, 200, 50)
    fill(255, 255, 255);
    textSize(20);
    textFont(fonte2);
    text("Level 2", width / 2, 28);
    textSize(15);
    textFont(fonte3);
    text("(UEPA) Considerando-se a equação química não balanceada\n balanceie a equação abaixo:", width / 2, 73);
    textSize(28);
    text("_Mg + _HCl -> _MgCl2 + _H2", width / 2, 200);
    textSize(18);
    text("press ESC to return", width / 2, 450);
    textSize(28);
    fill(250, 250, 250)
    text("a. 1, 2, 3, 1", 350, 270);
    text("b. 4, 8, 6, 6", 350, 330);
    text("c. 6, 12, 6, 6", 350, 390);
    if (mouseX <= 458 && mouseX >= 258 && mouseY >= 232 && mouseY <= 285) {
      rectY = 235;
      if (mouseIsPressed && contador > 50) {
        contador = 0
        tela = 8
      }
    } else if (mouseX <= 408 && mouseX >= 292 && mouseY >= 305 && mouseY <= 336) {
      rectY = 295
      if (mouseIsPressed && contador > 50) {
        tela = 8
      }
    } else if (mouseX <= 408 && mouseX >= 292 && mouseY >= 355 && mouseY <= 400) {
      rectY = 355
      if (mouseIsPressed && contador > 50) {
        contador = 0
        tela = 7
      }
    }
    if (keyIsDown(ESCAPE)) {
      tela = 1
    }
  }

  //questao3
  else if (tela == 7) {
    background(wall);
    contador++;
    fill(138, 43, 226)
    rect(rectX, rectY, 200, 50)
    fill(255, 255, 255);
    textSize(20);
    textFont(fonte2);
    text("Level 3", width / 2, 28);
    textSize(15);
    textFont(fonte3);
    text("(MACK-SP) A equação corretamente balanceada é:", width / 2, 73);
    textSize(28);
    text("a) 2Fe + O2 -> Fe2O3\n b) 2Fe + 3O2 -> 2 Fe2O3\n c) 4Fe + 3O2 -> 2Fe2O3", width / 2, 100);
    textSize(18);
    text("press ESC to return", width / 2, 450);
    textSize(28);
    fill(250, 250, 250)
    text("a. 2, 1, 1", 350, 270);
    text("b. 2, 3, 2", 350, 330);
    text("c. 4, 3, 2", 350, 390);
    if (mouseX <= 458 && mouseX >= 258 && mouseY >= 232 && mouseY <= 285) {
      rectY = 235;
      if (mouseIsPressed && contador > 50) {
        tela = 8
      }
    } else if (mouseX <= 408 && mouseX >= 292 && mouseY >= 305 && mouseY <= 336) {
      rectY = 295
      if (mouseIsPressed && contador > 50) {
        tela = 8
      }
    } else if (mouseX <= 408 && mouseX >= 292 && mouseY >= 355 && mouseY <= 400) {
      rectY = 355
      if (mouseIsPressed && contador > 50) {
        tela = 9
      }
    }
    if (keyIsDown(ESCAPE)) {
      tela = 1
    }
  }

  //erros
  else if (tela == 8) {
    background(wall);
    fill(138, 43, 226)
    fill(255, 255, 255);
    textSize(20);
    textFont(fonte2);
    text("there is something wrong", width / 2, 28);
    textSize(15);
    textFont(fonte3);
    textSize(28);
    text("VOCÊ ERROU! PRESSIONE ESC\n PARA VOLTAR AO MENU INICIAL", width / 2, 200);
    if (keyIsDown(ESCAPE)) {
      tela = 1
    }
  }
  //tela de vitória
  else if (tela == 9) {
    tempo++
    background(fotofinal);
    image(firework[contador2 % 5], 70, 200, 200, 200);
    if (tempo > 5) {
      contador2++;
      tempo = 0;
    }

    fill(138, 43, 226)
    fill(255, 255, 255);
    textSize(20);
    textFont(fonte2);
    text("CONGRATULATIONS", width / 2, 28);
    textSize(15);
    textFont(fonte3);
    textSize(28);
    text("VOCÊ CONSEGUIU!", width / 2, 67);
    if (keyIsDown(ESCAPE)) {
      tela = 1
    }
    
    //creditos
  } else if (tela == 3) {
    background(wall);
    textFont(fonte2);
    textSize(50);
    textAlign(CENTER);


    fill(255, 255, 255);
    text("Instructions", width / 2, 100);
    textSize(14);
    textFont(fonte3);
    text("O jogo foi produzido para alunos do 9o ano do ensino fundamental\n com o intuito de desenvolver a habilidade EF09CI02 (Comparar quantidades\n de reagentes e produtos envolvidos em transformações químicas, estabelecendo\n a proporção entre as suas massas).", width / 2, 173);
    text("O jogador deverá balancear as equações químicas seguindo a Lei da\n Conservação da Massa. É importante lembrar que os átomos presentes\n nos reagentes deverá ser igual à quantidade de átomos presentes nos produtos.", width / 2, 273);
    textSize(18);
    text("press ESC to return", width / 2, 450);
    if (keyIsDown(ESCAPE)) {
      tela = 1
    }
  } else if (tela == 4) {
    background(fotocred);
    textFont(fonte2);
    textSize(50);
    textAlign(CENTER);


    fill(255, 255, 255);
    text("Credits", width / 2, 100);
    textSize(18);
    textFont(fonte3);
    text("DISCENTE: LAURALISSE RIBEIRO DE OLIVEIRA\n DOCENTE: AQUILES BURLAMAQUI", width / 2, 153);
    text("press ESC to return", width / 2, 450);
    if (keyIsDown(ESCAPE)) {
      tela = 1
    }
  }
}