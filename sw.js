self.addEventListener("push", event => {
  let data = {
    title: "Freelancer Notify",
    body: "New activity detected!"
  };

  try {
    if (event.data) {
      data = event.data.json();
    }
  } catch (error) {
    console.log("Push data error:", error);
  }

  event.waitUntil(
    self.registration.showNotification(
      data.title || "Freelancer Notify",
      {
        body: data.body || "New activity detected!",
        icon: "/icon.png",
        badge: "/icon.png"
      }
    )
  );
});