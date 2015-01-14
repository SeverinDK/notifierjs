// Create a new notifier to add new notifications.
var notifier = new Notifier("body", true);


// ERROR notification example.
var notification1 = new Notification("<i class=\"fa fa-exclamation-triangle\"></i> Error Notification", {
	type: "Error"
});
notifier.addNotification(notification1);
notification1.open();


// WARNING notification example.
var notification2 = new Notification("<i class=\"fa fa-exclamation-triangle\"></i> Warning Notification", {
	type: "Warning"
});
notifier.addNotification(notification2);
notification2.open();


// SUCCESS notification example.
var notification3 = new Notification("<i class=\"fa fa-exclamation-triangle\"></i> Success Notification", {
	type: "Success"
});
notifier.addNotification(notification3);
notification3.open();


// CUSTOM notification example.
var notification4 = new Notification("", {
	sound: true
});
notifier.addNotification(notification4, true);
$(notification4.element).css({
	"background": "pink",
	"border": "5px solid midnightblue",
	"font-family": "Comic Sans MS",
	"box-shadow": "1px 1px 5px rgba(0,0,0,1)",
	"border-radius": "5px",
	"padding": "50px"
});
notification4.setText("<i class=\"fa fa-exclamation-triangle\"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue augue, sodales in augue ut, imperdiet tincidunt mauris. Ut at tortor id nibh tincidunt rutrum. Morbi elementum lacinia magna sit amet auctor. Pellentesque vulputate neque luctus libero ultricies dictum.");

setTimeout(function() {
	notification4.open();
}, 2500);