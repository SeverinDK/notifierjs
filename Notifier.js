function Notifier(parent, position) {
	var self = this;
	self.element = document.createElement("div");
	$(self.element).addClass("notifier-container__");

	if(!parent) {
		parent = "body";
	}

	if(!position) {
		position = "fixed";
	}

	if(position == true) {
		position = "static";
	}

	$(self.element).css("position", position);

	$(parent).append(self.element);
}

Notifier.prototype.addNotification = function(notification, append) {
	if(append) {
		$(this.element).append(notification.element);
	} else {
		$(this.element).prepend(notification.element);
	}
	$(notification.element).toggle();
}