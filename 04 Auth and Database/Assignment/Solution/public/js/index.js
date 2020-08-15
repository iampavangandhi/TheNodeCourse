$("document").ready(function() {
  $("form").submit(function() {
    console.log("submit clicked");
    $.ajax({
      type: "post",
      url: "add/todo",
      data: {
        todo: $("form input").val(),
        check: false
      }
    });
  });

  $("button.remove").click(function() {
    console.log("remove clicked");
    if (confirm("Are you sure you want to delete?")) {
      let id = $(this).data("id");

      $.ajax({
        type: "delete",
        url: `remove/todo/${id}`,
        success: function(res) {
          location.href = "/";
        }
      });
    }
  });

  $("button.edit").click(function() {
    console.log("edit clicked");
    let initial = $(this)
      .parent()
      .find("span")
      .text();
    let todo = prompt("Rename the todo: ", initial);

    if (todo != null) {
      let id = $(this).data("id");

      $.ajax({
        type: "put",
        url: `edit/todo/${id}`,
        data: {
          todo: todo
        },
        success: function(res) {
          location.href = "/";
        }
      });
    }
  });

  $("input[type=checkbox]").click(function() {
    let state = $(this).prop("checked");
    let id = $(this).data("id");

    $.ajax({
      type: "put",
      url: `edit/check/${id}`,
      data: {
        check: state
      },
      success: function(res) {}
    });
  });
});
