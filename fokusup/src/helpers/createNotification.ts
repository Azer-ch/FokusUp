export const createNotification = (message: string) => {
  if (!window.Notification) {
    console.log("Browser does not support notifications.");
  } else {
    if (Notification.permission === "granted") {
      var notify = new Notification("FokusUp", {
        body: message,
      });
    } else {
      Notification.requestPermission()
        .then(function (p) {
          if (p === "granted") {
          } else {
            var notify = new Notification("FokusUp", {
              body: message,
            });
          }
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  }
};
