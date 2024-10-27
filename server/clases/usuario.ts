export type UsuarioReducidoTipo = {
  username: string;
  contrasena: string;
};

export type UsuarioTipo = UsuarioReducidoTipo & {
  nombre1: string;
  nombre2: string;
  apellido1: string;
  apellido2: string;
};

export class Usuario {
  username!: string;
  contrasena!: string;
  nombre1!: string;
  nombre2!: string;
  apellido1!: string;
  apellido2!: string;

  constructor(
    username: string,
    contrasena: string,
    nombre1: string,
    nombre2: string,
    apellido1: string,
    apellido2: string
  ) {
    this.setUsername(username);
    this.setContrasena(contrasena);
    this.setApellido1(apellido1);
    this.setApellido2(apellido2);
    this.setNombre1(nombre1);
    this.setNombre2(nombre2);
  }

  public getNombre1() {
    return this.nombre1;
  }

  public setNombre1(nombre1: string) {
    this.nombre1 = nombre1;
  }

  public getNombre2() {
    return this.nombre2;
  }

  public setNombre2(nombre2: string) {
    this.nombre2 = nombre2;
  }

  public getApellido1() {
    return this.apellido1;
  }

  public setApellido1(apellido1: string) {
    this.apellido1 = apellido1;
  }

  public getApellido2() {
    return this.apellido2;
  }

  public setApellido2(apellido2: string) {
    this.apellido2 = apellido2;
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
