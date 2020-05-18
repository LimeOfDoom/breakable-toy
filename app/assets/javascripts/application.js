// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });

$(function(){
   var flashDurationInSeconds = 5;
   var flashContainerId = 'flash-messages';

   function removeFlashMessages() {
     $('#' + flashContainerId).remove();
   }

   setTimeout(removeFlashMessages, flashDurationInSeconds * 1000);
})

$('select[name="user[role]"').change(function() {
    $('#orgs').toggle();
});

// <%= f.collection_radio_buttons :is_revision, [[false, 'Post'] ,[true, 'Revision']], :first, :last %>
// <%= f.input :revision_id, collection: @originals, :input_html => {:id => 'revision'} %>
// <%= f.input :title, :input_html => { :maxlength => '50', :placeholder => 'Title', :id => 'title'} %>
