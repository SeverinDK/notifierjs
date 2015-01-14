var id = 1;

function Notification(text, options) {
	var self = this;
	// ID to find the correct element again so we can $().remove();
	self.ID = "__notifier" + id;

	if(!options) {
		options = {};
	}

	self.text = text;
	self.closeText = options.closeText != null ? options.closeText : "Close";
	self.type = options.type != null ? options.type : "Success";
	self.duration = options.duration != null ? options.duration : 400;
	self.easing = options.easing != null ? options.easing : "linear";
	self.clickClose = options.clickClose;
	if(options.sound) {
		self.sound = true;
		self.soundOpenPath = options.soundOpenPath != null ? options.soundOpenPath : "sound.mp3";
		self.soundClosePath = options.soundClosePath != null ? options.soundClosePath : "sound.mp3";
		self.soundOpen = new Audio(self.soundOpenPath);
		self.soundClose = new Audio(self.soundClosePath); 
	}
	//self.closeButton = options.closeButton;

	// Create main div
	self.element = document.createElement("div");
	$(self.element).attr("id", self.ID);
	$(self.element).addClass("__notifier-" + self.type.toLowerCase());
	$(self.element).addClass("__notifier");

	// Inner div, used for centering the content
	var inner = document.createElement("div");
	$(inner).addClass("__notifier-inner");
	$(self.element).html(inner);

	// Div containing the text to be displayed 
	self.textContainer = document.createElement("div");
	$(self.textContainer).addClass("__notifier-inner-text-container");
	$(inner).append(self.textContainer);
	$(self.textContainer).html(this.text);

	self.buttonContainer = document.createElement("div");
	$(self.buttonContainer).addClass("__notifier-inner-button-container");
	$(inner).append(self.buttonContainer);
	$(self.buttonContainer).html("<a href=\"#\">" + self.closeText + "<i class=\"fa fa-times\" style=\"padding-left:3px;\"></i></a>");
	$(self.buttonContainer).css("text-align", "right");
	$(self.buttonContainer).find("a").click(function() {
		self.close();
	});

	// Callback on open
	self.expandComplete = function() {
		if(options.expandComplete) {
			options.expandComplete();
		}
	}

	// Callback on close
	self.collapseComplete = function() {
		$("#" + self.ID).remove();
		if(options.collapseComplete) {
			options.collapseComplete();
		}
	}

	// Callback on toggle
	self.toggleComplete = function() {
		if(options.toggleComplete) {
			options.toggleComplete();
		}
	}

	id++;
}



Notification.prototype.setText = function(text) {
	this.text = text;
	$(this.textContainer).html(text);
}

Notification.prototype.getText = function() {
	return this.text;
}

Notification.prototype.setButtonText = function(text) {
	this.closeText = text;
	$(this.buttonContainer).find("a").html(text);
}

Notification.prototype.getButtonText = function() {
	return this.closeText;
}

Notification.prototype.setSpeed = function(speed) {
	this.speed = speed;
}

Notification.prototype.getSpeed = function() {
	return this.speed;
}

Notification.prototype.setEasing = function(easing) {
	this.easing = easing;
}

Notification.prototype.getEasing = function() {
	return this.easing;
}
 
Notification.prototype.open = function() {
	$(this.element).stop().slideToggle({
		duration: this.duration,
		easing: this.easing,
		complete: this.expandComplete,
	});
	if(this.soundOpen) {
		this.soundOpen.play();
	}
}

Notification.prototype.close = function() {
	$(this.element).stop().slideToggle({
		duration: this.duration,
		easing: this.eaing,
		complete: this.collapseComplete,
	});
	if(this.soundClose) {
		this.soundClose.play();
	}
}

Notification.prototype.toggle = function() {
	$(this.element).stop().slideToggle({
		duration: this.duration,
		easing: this.eaing,
		complete: this.toggleComplete,
	});
}

Notification.prototype.setOption = function(name, option) {
	this[name] = option;
}

Notification.prototype.getOption = function(name) {
	return this[name];
}

Notification.prototype.setButtonIcon = function(icon) {
	this.buttonIcon = icon;
}

Notification.prototype.getButtonIcon = function() {
	return this.buttonIcon;
}