$(document).ready(function() {
  $("#taskForm").submit(function(event) {
    event.preventDefault();
    const taskName = $("#taskInput").val();
    if (taskName) {
      $("#taskList").append(`<li>${taskName}</li>`);
      $("#taskInput").val("");
    }
  });

  $(document).on("click", "li", function() {
    $(this).toggleClass("completed");
  });
});
