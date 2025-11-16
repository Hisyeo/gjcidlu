import { CharStream, CommonTokenStream, ErrorListener, Recognizer, RecognitionException, Token } from 'antlr4';
import HisyeoLexer from '@/vendor/grammar/HisyeoLexer.js';
import HisyeoParser from '@/vendor/grammar/HisyeoParser.js';

export interface SyntaxError {
  recognizer: Recognizer<Token>;
  offendingSymbol: Token;
  line: number;
  column: number;
  msg: string;
  e: RecognitionException;
}

export class HisyeoErrorListener extends ErrorListener<Token> {
  private errors: SyntaxError[] = [];

  syntaxError(
    recognizer: Recognizer<Token>,
    offendingSymbol: Token,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException,
  ): void {
    this.errors.push({ recognizer, offendingSymbol, line, column, msg, e });
  }

  getErrors(): SyntaxError[] {
    return this.errors;
  }
}

export const validateNounPhrase = (input: string): SyntaxError[] => {
  const chars = new CharStream(input);
  const lexer = new HisyeoLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new HisyeoParser(tokens);
  const errorListener = new HisyeoErrorListener();

  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListener);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  parser.nounPhraseStrict();

  return errorListener.getErrors();
};
