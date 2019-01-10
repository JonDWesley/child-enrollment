//declaring variables for easier DOM navigation
var navButton = document.getElementById("navButton");
var retakeButton = document.getElementById("retakeButton");
var sudoDownloadButton = document.getElementById("sudoDownloadButton");
var questionText = document.getElementById("questionText");

//creating question objects - ADD question explanations property to each object.
var question1 = {
    question: 'If you are unclear on any of the Civil Rights requirements in the CACFP, which of the following sources of information would you review for the most authoritative and comprehensive guidance?',
    answers: ["7 CFR 266.5 FNS Ins", "FNS Instruction 113-1", "nutritionnc.com"],
    explanation: "Remember that FNS Instruction 113-1 is an authoritative and comprehensive source regarding Civil Right compliance in the CACFP and it can be downloaded in the files section of this training portal.",
    correct: 1
  };
var question2 = {
    question: "According to the definiton of Civil Rights that is given in FNS Instruction 113-1, which of the following statement best summarize the meaning of descrimition?",
    answers: ["Unequal treatment of persons based on a trait that makes them different from others","Any different treatement of any kind","Making an accomidation for an individual who does not have a documented disability"],
    explanation: "Remember that discrimination is differential or disparate treatment that makes a distinction of one person or group of persons from others, by neglect, or by the actions or lack of actions of program staff. Unlawful discrimination can be intentional or unintentional.",
    correct: 0
  };
var question3 = {
  question: "What are the six categories protected by Civil Rights in the CACFP?",
  answers: ["Race, color, national origin, age, sex and disibility", "Race, marital status, religious creed, age, political beliefs and sexual orientation", "National origin, disibility, sexual orientation, age, religious creed and disibility"],
  explanation:'Although it is the policy of the USDA and FNS to provide fair and equitable treatment to everyone, there are specific laws and regulations that provide for the protected categories of race, color, national origin, age, sex and disibility.',
  correct: 0
  };
 var question4 = {
  question: "How often must Civil Rights training be completed?",
  answers: ["Quarterly", "Annually", "One time for each employee",],
  explanation:'Institutions in the CACFP must provide Civil Rights training on an annual basis.',
  correct: 1
  };
 var question5 = {
  question: "Who must recieve Civil Right trianing annually?",
  answers: ['All owners and board members', 'The director and all teachers', 'All levels of staff involved in any aspect of the CACFP'],
  explanation:'You must give Civil Rights training to all levels of staff involved in any aspect of the CACFP. This training must be given to all new staff, contractors and volunteers before they begin any program related duties. Additionally, all “frontline staff” who interact with program applicants or participants, and those persons who supervise “frontline staff,” must be provided Civil Rights training on an annual basis.',
  correct: 2
  };
 var question6 = {
  question: "According to FNS Instruction 113-1, what is the prefered method of racial and ethnic data collection in the CACFP?",
  answers: ['Using visual observation to record the data', 'Self-identification or self-reporting', 'Asking a child to self-identify'],
  explanation:'Self-identification by the applicant/participant is the preferred method of obtaining characteristic data. If a participant, parent or guardian chooses to not provide this information, your institution’s data collector may instead collect the data using visual observation. If the visual observation method is used, participants or guardians must be informed.',
  correct: 1
  };
 var question7 = {
  question: "How often must Racial and Ethnic data must be collected and how long it must be kept?",
  answers: ['Data must be collected continuously and mainitained on file for 1 year', 'Data must be collected every year and maintained on file one additional year', 'Data must be collected every year and maintained on file for 3 years'],
  explanation:'Institutions must document race and ethnicity data each year, and the data must be maintained on file for 3 years and protected by a written policy of confidentiality.',
  correct: 2
  };
 var question8 = {
  question: "What information must be included in your public notification?",
  answers: ['Hours of operation, available enrichment activities, contact information', 'Nondiscrimination statement, meals typically served and directions to the facility', 'Program availability, complaint information, program rights and responsibilities and the nondiscrimination statement'],
  explanation:'All FNS assistance programs must include a public notification system. The purpose of this system is to inform applicants, participants, and potentially eligible persons of the program availability, program rights and responsibilities, the policy of nondiscrimination, and the procedure for filing a complaint.',
  correct: 2
  };
 var question9 = {
  question: "According to the FNS memorandum on modifications to accommodate disabilities, what is the best thing you can do when asked to accomidate a person with a physical or mental impairment?",
  answers: ['Collaborate with the participant, parent or gardian to ensure equal opportunity', 'Verifying whether their disability is documented and signed by a licensed healthcare professional', 'Accomidate the disabilty immedietly and completely'],
  explanation:'Keep in mind that most physical and mental impairments constitute a disability and therefore, rather than focusing on whether or not a participant has a disability, focus on working collaboratively with parents, guardians and adult participants to ensure equal opportunity',
  correct: 0
  };
 var question10 = {
  question: "Which skill is both a Civil Rights compliance area and a great way to handle all interactions within your institution and community?",
  answers: ['Know the USDA regulations inside and out', 'Provide excellent customer service', 'Hire the right staff and treat people well'],
  explanation:'Providing excellent customer service is one of the best ways to ensure compliance with Civil Rights laws and make certain that everyone is treated the same.',
  correct: 1
  };

//declaring the variable of all questions
var allQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10,];

//Display the first question's text and the possible answers. 
questionText.innerHTML = allQuestions[0].question;
document.getElementById("choice1").innerHTML = allQuestions[0].answers[0]; 
document.getElementById("choice2").innerHTML = allQuestions[0].answers[1];
document.getElementById("choice3").innerHTML = allQuestions[0].answers[2];

// variable to hold the number of the current question
var currentNum = 0;

//variable to hold the users number of correct answers
var totalScore = 0;

//calling the main quiz function with the first click of the navButton
//I use the .onclick in this js file instead of in the HTML
document.getElementById("navButton").onclick = function quizFunction() {
 
 /*BROKEN IN INTERNET EXPLORER
 var noSelection = document.forms["questionForm"]["answer:checked"].value;
	if (noSelection == undefined) {
		alert("please choose an answer.");
		return;*/

  //declaring the variable that retreives the user's selected radio button
  var selectedOption = document.querySelector('input[name="answer"]:checked').value;
  
  //This statement displays feedback if the user got the question right or wrong
  //The second statement displays the explanation of the question after the line break
  if (selectedOption == allQuestions[currentNum].correct) {
   alert("That is correct: \n \n" + (allQuestions[currentNum].explanation));
   totalScore++;
  } else {
    alert("That is incorrect: \n \n" + (allQuestions[currentNum].explanation));
  }
  
  optionGroup = document.forms["questionForm"]["answer"];
  for (var i = 0; i < optionGroup.length; i++) {
    optionGroup[i].checked = false;
  }
  
  //not the final question
  currentNum++;
  
  //this statement will execute if all questions have been answered AND the score is higher than the threshold
  if (currentNum == allQuestions.length && totalScore >= (allQuestions.length*0.80)) {
    document.getElementById("questionForm").style.display = "none"; //hides the HTML form containing the questions
    questionText.innerHTML = "Your score is " + totalScore + " of " + allQuestions.length + " You may now download your certificate.";
    navButton.style.display = "none"; //hides the button used to execute this function
    sudoDownloadButton.style.display = "block"; //reveals the <a> tag, that looks like a button, for downloading the file
   
	//this statement will execute if all questions have been answered BUT the score is below the padding threshold
	} else if (currentNum == allQuestions.length && totalScore < (allQuestions.length*0.80)) {
      document.getElementById("questionForm").style.display = "none"; //again, hides the form containing the questions
      questionText.innerHTML = "Your score is " + totalScore + " out of " + allQuestions.length + ". You must get at least 80% of the questions right in order to download the training certificate. Please click the button below to retake the quiz.";
      navButton.style.display = "none"; //as above, hides the button used to execute this function
      retakeButton.style.display = "block"; //reveals the button used to reload the entire quiz
    
	//this statement executes only when not all questions have been answered. This is the code used for dynamically populating the question and answers in the quiz
	} else {
      questionText.innerHTML = allQuestions[currentNum].question;
      document.getElementById("choice1").innerHTML = allQuestions[currentNum].answers[0];
      document.getElementById("choice2").innerHTML = allQuestions[currentNum].answers[1];
      document.getElementById("choice3").innerHTML = allQuestions[currentNum].answers[2];
  }
};

retakeButton.onclick = function reloadQuiz() {
    location.reload(true);
};