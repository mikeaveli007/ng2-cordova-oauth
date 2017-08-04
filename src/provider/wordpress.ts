import { OAuthProvider } from "../provider";

export class Wordpress extends OAuthProvider {
    protected authUrl: string = 'https://dev.wearesachs.org/oauth/authorize?'
  protected defaults: Object = {
    responseType: 'code'
  };
}