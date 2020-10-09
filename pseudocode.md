### create classes
- class 1 = numbers
- class 2 = operators
- class 3 = calculator (in charge of the layout)
- class 4 = buttons (controls click and knows what it is)

each class has it's own MVC

number shows on screen, operator does not 



### MVC model

Model : holds buttons and their values

View : renders the page (creates HTML that will show on browser)

Controller : holds onclick eventListeners and gets info from the model and  
    sends it to the view 


- onclick the controller requests button information from the Model (which button was clicked and what value is assigned, is it a number or an operator)

- once retrieving button information from model 
    :if number the controller sends the value to view to be displayed
    :if operator the controller stores the value of the operator until equal is clicked at which point the function is run

- 