function addition()
		{
		var ourAnswer = document.getElementById('answer').value;
		isNaN(ourAnswer);
		if (isNaN(ourAnswer)) 
			{
			document.getElementById('output').innerHTML = "Am I a joke to you!? " + ourAnswer + " is Not a number</br> Type numbers, please!";
			}
		else
			if 
				(correctAnswer == ourAnswer)
				{document.getElementById('output').innerHTML = "Correct! " + numberOne + " + " + numberTwo + " equals to " + correctAnswer + "!!";}
			else
				{document.getElementById('output').innerHTML = "Incorrect! " + numberOne + " + " + numberTwo +  " does not equals to " + ourAnswer + "...Do your math!! " + numberOne + " + " + numberTwo + " = " + correctAnswer;}
		}


	