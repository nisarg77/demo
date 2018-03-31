window.OneSignal = window.OneSignal || [];
var initOptions = {
  appId: "7a2fece9-0677-4a3d-9bc2-496b108fc5f5",
  subdomainName: 'onesignal-demo',
  autoRegister: true,
  notifyButton: {
    enable: true
  }
};

OneSignal.push(function() {
  OneSignal.init(initOptions);
});
