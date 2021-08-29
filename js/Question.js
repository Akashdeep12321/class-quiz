class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.inputbox = createInput("enter your answer")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
      this.title1 = createElement('h2');
      this.title2 = createElement('h3')
      this.title3 = createElement('h4')
      this.title4 = createElement('h5')
      this.title5 = createElement('h6');


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.title1.hide();
    this.title5.hide();
    this.title2.hide();
    this.title3.hide();
    this.title4.hide();
    this.input1.hide();
    this.button.hide();
      
    this.message.hide();
    //Add hide() for questions, options & input box
    this.inputbox.hide();
     




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.title1.html("Question:- what starts and ends with the letter E , but has only one letter");
    this.title1.position(80,80);

    this.title2.html("1:Everyone");
    this.title2.position(100,120);

    this.title3.html("2:Envelope");
    this.title3.position(100,150);

    this.title4.html("3:Estimate");
    this.title4.position(100,180);
    
    this.inputbox.position(350,230);


    this.input1.position(150, 230);
    this.button.position(290, 300);

    this.title5.html('Thanks You,Your Answer Has Been Submitted')
    this.title5.position(200,350)
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}
