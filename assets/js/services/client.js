import Constants from "../common/constants.js";

const Client = {
  instance: null,
  metadata: null,
  context: null,
  /**
   * The entry point for the app. Waits until the app is completely initialised before executing the callback() function
   *
   * @param callback
   */
  init(callback) {
    this.instance = ZAFClient.init();

    this.addEventListener(Constants.Events.APP_REGISTERED, res => {
      this.metadata = res.metadata;

      this.instance.context().then(context => {
        this.context = context;

        callback();
      });
    });
  },
  /**
   * Attach an event listener onto the app instance, with a supplied name and callback parameter
   *
   * @see https://developer.zendesk.com/apps/docs/developer-guide/using_sdk#working-with-framework-events
   *
   * @param name
   * @param callback
   */
  addEventListener(name, callback) {
    this.instance.on(name, callback);
  }
};

export default Client;
