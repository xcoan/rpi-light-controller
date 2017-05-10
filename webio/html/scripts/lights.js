webiopi().ready(function() {
  webiopi().setFunction(17,"out"); // Controls the Yellow LED
	webiopi().setFunction(4,"out"); // Controls Red
	webiopi().setFunction(23,"out"); // Controls Blue
	webiopi().setFunction(25,"out"); // Controls Green

	var content, button;
	buttons = $("#buttons");

  button1 = webiopi().createGPIOButton(17,"Yellow LED");
	button2 = webiopi().createGPIOButton(4,"Red LED");
	button3 = webiopi().createGPIOButton(23, "Blue LED");
	button4 = webiopi().createGPIOButton(25,"Green LED");

  // Place buttons on HTML page
  buttons.append(button1);
	buttons.append(button2);
	buttons.append(button3);
	buttons.append(button4);
});
