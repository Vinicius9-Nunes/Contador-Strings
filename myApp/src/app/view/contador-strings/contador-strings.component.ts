import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-contador-strings',
  templateUrl: './contador-strings.component.html',
  styleUrls: ['./contador-strings.component.css']
})
export class ContadorStringsComponent implements OnInit {

  textoContador: string = ''
  seletorRespostaCaracteres: string = 'resultado-caracter'
  seletorRespostaPalavras: string = 'resultado-palavras'
  respostaCaracteres: number
  respostaPalavras: number

  constructor() { }

  ngOnInit(): void {
  }

  ContarStrings(){
    this.respostaCaracteres = this.textoContador.length
    this.respostaPalavras = this.textoContador.split(' ').length
    this.MostrarResposta(this.respostaCaracteres, this.seletorRespostaCaracteres)
    this.MostrarResposta(this.respostaPalavras, this.seletorRespostaPalavras)
    this.LimparInput()
  }

  private LimparInput(){
    this.textoContador = ''
  }

  private MostrarResposta(texto: number, seletor: string){
    let elemento: HTMLElement = document.getElementById(seletor)
    const retorno: number = texto
    elemento.innerText += retorno > 0 ? ` ${retorno.toString()}` : ' 0'
  }
}
