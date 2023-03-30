import {Component, OnInit} from '@angular/core';
import axios, {AxiosRequestConfig} from 'axios';
//import * as repl from "repl";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  inputMessage: string = '';
  isChatOpen = false;

  constructor() {
  }

  ngOnInit(): void {
    this.getInitialMessage();
  }


  async sendMessage(): Promise<void> {
    if (this.inputMessage.trim() === '') return;
    const message = `Java Superstar: ${this.inputMessage}`;
    this.messages.push(message);

    const prompt = `Antworte mir ausschließlich auf deutsch. Du bist eine API und sollst einen Studybuddy für Academic Work
  darstellen. Das Ziel ist es, Hilfestellungen zu geben für Teilnehmer eines Programmierbootcamps.
  Die meisten Fragen beziehen sich auf Java. Gebe keine direkten Lösungen für Aufgaben, sondern biete lediglich Hilfe an.
  Syntaxfragen kannst du mit allgemeinen Beispielen beantworten. Beachte den pädagogischen Wert, den du als KI hast.
  Du kannst maximal 150 Zeichen befüllen. Beachte dies bei deiner Antwort.
   ${message}`;

    try {
      const config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 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`, // Ersetze 'API_KEY' durch deinen persönlichen API-Schlüssel
        },
      };

      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: prompt,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.5,
        },
        config
      );

      let reply = response.data.choices[0].text.trim();
      reply = reply.replace('?', '');
      const paragraphs = reply.split(/(?:\r\n|\r|\n)/);
      paragraphs.forEach((paragraph: string) => {
        if (paragraph.trim()) {
          this.messages.push(`Studybuddy: ${paragraph.trim()}`);
        }
      });
    } catch (error) {
      console.error(error);
      this.messages.push('Studybuddy: Entschuldigung, es gab einen Fehler.');
    }

    this.inputMessage = '';
  }

  openChat(): void {
    this.isChatOpen = true;
  }

  closeChat(): void {
    this.isChatOpen = false;
  }



  async getInitialMessage(): Promise<void> {
    const initialMessage = 'Hello Java Superstar! How can i help you?';
    this.messages.push(`Studybuddy: ${initialMessage}`);
  }


}
