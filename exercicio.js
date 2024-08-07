const hoje = new Date();
const diaSemana = hoje.getDay();

switch (diaSemana) {
  case 0:
  case 2:
  case 4:
  case 6:
    console.log('Plantão');
    break;
  default:
    console.log("Folga");
}