
class RoombaChino {

  constructor(z, x, direccion) {
    this.z = z;
    this.x = x;
    this.direccion = direccion;
  }

  avanzar() {
    switch (this.direccion) {
      case 'arriba':
        this.z += 1;    
        break;
      case 'abajo':
        this.z -= 1;
        break;
      case 'izquierda':
        this.x -= 1;
        break;
      case 'derecha':
        this.x += 1;
        break;    
      default:
        break;
    }
    let posZ = this.z;
    let posX = this.x;
    return {posZ,posX};
  }


  posicion() {
    let posZ = this.z;
    let posX = this.x;
    return {posZ,posX};
  }
}

class RoombaRuso extends RoombaChino{
  constructor(z, x, direccion) {
    super(z, x, direccion)
  }

  set posicionZ(z) {
    this.z = z;
  }

  set posicionX(x) {
    this.x = x;
  }



  giro() {
    switch (this.direccion) {
      case 'arriba':
        this.direccion = 'izquierda';    
        break;
      case 'abajo':
        this.direccion = 'derecha';;
        break;
      case 'izquierda':
        this.direccion = 'abajo';;
        break;
      case 'derecha':
        this.direccion = 'arriba';;
        break;    
      default:
        break;
    }
    let direccion = this.direccion;
    return direccion;
  }
}

class RoombaUSA extends RoombaChino{
  constructor(z, x, direccion) {
    super(z, x, direccion)
  }

  set posicionZ(z) {
    this.z = z;
  }

  set posicionX(x) {
    this.x = x;
  }

  giro() {
    switch (this.direccion) {
      case 'arriba':
        this.direccion = 'derecha';    
        break;
      case 'abajo':
        this.direccion = 'izquierda';;
        break;
      case 'izquierda':
        this.direccion = 'arriba';;
        break;
      case 'derecha':
        this.direccion = 'abajo';;
        break;    
      default:
        break;
    }
    let direccion = this.direccion;
    return direccion;
  }
}

class Estacion {

  roombaRuso;
  roombaUsa;

  constructor(n, m) {
    this.n = n;
    this.m = m;
  }

  avanzar(roomba) {
    if (this.n < roomba.posicion().posZ) {
      roomba.posicionZ = 0;
    }

    if (roomba.posicion().posZ < 0) {
      roomba.posicionZ = this.n;
    }

    if (this.m < roomba.posicion().posX) {
      roomba.posicionX = 0;
    }

    if (roomba.posicion().posX < 0) {
      roomba.posicionX = this.n;
    }

    if (this.roombaRuso.posicion().posZ === this.roombaUsa.posicion().posZ && this.roombaRuso.posicion().posX === this.roombaUsa.posicion().posX) {
      roomba.giro();
    }

    roomba.avanzar();
  }

  inicio() {
    this.roombaRuso = new RoombaRuso(0, 3, 'arriba');
    this.roombaUsa = new RoombaUSA(3,0, 'derecha');
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    this.avanzar(this.roombaRuso);
    console.log(this.roombaRuso.posicion());
    this.avanzar(this.roombaUsa);
    this.avanzar(this.roombaUsa);
    this.avanzar(this.roombaUsa);
    this.avanzar(this.roombaUsa);
    console.log(this.roombaUsa.posicion());

  }
}

let station = new Estacion(20, 20);
station.inicio();
