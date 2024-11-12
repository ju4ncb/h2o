export type JugadorReducidoTipo = {
  username: string;
  passwd: string;
};

export type JugadorTipo = JugadorReducidoTipo & {
  id_ju: number;
  nm1: string;
  nm2: string;
  ap1: string;
  ap2: string;
  tipoUsuario: number;
};

export class Usuario {
  username!: string;
  contrasena!: string;
  nm1!: string;
  nm2!: string;
  ap1!: string;
  ap2!: string;

  constructor(
    username: string,
    contrasena: string,
    nm1: string,
    nm2: string,
    ap1: string,
    ap2: string
  ) {
    this.setUsername(username);
    this.setContrasena(contrasena);
    this.setAp1(ap1);
    this.setAp2(ap2);
    this.setNm1(nm1);
    this.setNm2(nm2);
  }

  public getNm1() {
    return this.nm1;
  }

  public setNm1(nm1: string) {
    this.nm1 = nm1;
  }

  public getNm2() {
    return this.nm2;
  }

  public setNm2(nm2: string) {
    this.nm2 = nm2;
  }

  public getAp1() {
    return this.ap1;
  }

  public setAp1(ap1: string) {
    this.ap1 = ap1;
  }

  public getAp2() {
    return this.ap2;
  }

  public setAp2(ap2: string) {
    this.ap2 = ap2;
  }

  public getUsername() {
    return this.username;
  }

  public setUsername(username: string) {
    this.username = username;
  }

  public getContrasena() {
    return this.contrasena;
  }

  public setContrasena(contrasena: string) {
    this.contrasena = contrasena;
  }
}
