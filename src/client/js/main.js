(function () {

  console.log('sanity check!');

})();

$(document).on('submit', '#deleteForm', function(event) {
  event.preventDefault();
  const id = $('#restID').val();
  $.ajax({
    type: 'DELETE',
    url: `/restaurants/delete/${id}`
  })
  .done((data) => {
    $('#mySuccess').toggle();
    setTimeout(function() {
      window.location.href = '../../restaurants';
    }, 1000);
    console.log(data);
  })
  .fail((err) => {
    console.log(err);
  });
});

$(document).on('submit', '#addEmployee', function(event) {
  event.preventDefault();
  $('#addEmployeeModal').modal('toggle');
});

$(document).on('click', '.edit-employee-link', function(event) {
  event.preventDefault();
  const $this = $(this);
  const id = $this.attr('data-id');
  const first_name = $this.attr('data-first_name');
  const last_name = $this.attr('data-last_name');
  const position = $this.attr('data-position');
  $('#id_edit').val(id);
  $('#first_name_edit').val(first_name);
  $('#first_name_edit').val(first_name);
  $('#last_name_edit').val(last_name);
  $('#position_edit').val(position);
  $('#editEmployeeModal').modal('toggle');
});

$(document).on('submit', '#modal-employee-edit-form', function(event) {
  event.preventDefault();
  const id = $('#id_edit').val();
  const first_name = $('#first_name_edit').val();
  const last_name = $('#last_name_edit').val();
  const position = $('#position_edit').val();

  const payload = {
    id: id,
    first_name: first_name,
    last_name: last_name,
    position: position
  };

  $.ajax({
    type: 'PUT',
    url: `/restaurants/employees/update/${id}`,
    data: payload
  })
  .done((data) => {
    $('#editEmployeeModal').modal('toggle');
    location.reload();
  })
  .fail((err) => {
    console.log(err);
  });
});

$(document).on('click', '.delete-employee-link', function() {
  const answer = confirm('Are you sure?');
  if (answer) {
    const $this = $(this);
    const id = $this.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/restaurants/employees/delete/${id}`
    })
    .done((data) => {
      location.reload();
      console.log(data);
    })
    .fail((err) => {
      console.log(err);
    });
  }
});
