webiopi().ready(function() {
        		webiopi().setFunction(17,"out");
				webiopi().setFunction(4,"out");
				webiopi().setFunction(23,"out");
				webiopi().setFunction(25,"out");
        		
        		var content, button;
        		content = $("#content");
        		
        		button1 = webiopi().createGPIOButton(17,"Yellow LED");
				button2 = webiopi().createGPIOButton(4,"Red LED");
				button3 = webiopi().createGPIOButton(23, "Blue LED");
				button4 = webiopi().createGPIOButton(25,"Green LED");
        		content.append(button1);
				content.append(button2);
				content.append(button3);
				content.append(button4);
        		
        		
        });
