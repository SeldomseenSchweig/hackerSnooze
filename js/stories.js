"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}
$storyForm.on('submit',formSubmitClick )

{/* <form id="storyForm" action="" style="display: none;">
  <label for="Author">Author:</label>
  <input type="text" name="" id= >
  <label for="Title">Title: </label>
  <input type="text" name="" >
  <label for="URL">URL: </label>
  <input type="text" name="">
  <button type="submit"> Submit Story</button>
</form> */}

function formSubmitClick(){
  
  console.log($('#author').val())
  let title = $('#title').val();
  let author = $('#author').val();
  let url = $('#url').val();
  let submittedStory = {
    author,
    title,
    url
  }

  storyList.addStory(currentUser, submittedStory);
  getAndShowStoriesOnStart();
  
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}
