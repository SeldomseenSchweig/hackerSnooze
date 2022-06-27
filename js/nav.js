"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}
$body.on("click", "#nav-all", navAllStories);



function submitFormShowClick() {
  

 if($storyForm.css("display") === 'none'|| $storyForm.css("display")=== 'inline'){
  $storyForm.show();

 }else{

  $storyForm.hide();

 }

 // this works but only after double clicking submit, I don't know why...
// if($storyForm.hasClass("hidden")){
//   $storyForm.show();
//   $storyForm.removeClass("hidden")


//  }else{
//   $storyForm.addClass("hidden")
//  $storyForm.hide();

//  }

}


$('#submit').on("click", submitFormShowClick);


/** Show login/signup on click on "login" */




function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $submit.show()
  $loginForm.hide() 
  $signupForm.hide()
  $navUserProfile.text(`${currentUser.username}`).show();
}
