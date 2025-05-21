declare namespace Kakao {
  namespace Auth {
    function authorize(settings: {
      redirectUri: string;
      state?: string;
      scope?: string;
    }): void;
  }

  function init(apiKey: string): void;
  function isInitialized(): boolean;
}
