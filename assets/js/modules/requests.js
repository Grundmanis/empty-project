$('#request-modal form, .request form, .trusted form').on('submit', function (event) {
    event.preventDefault();

    let $this = $(this);
    if ($this[0].checkValidity() === false) {
        event.stopPropagation();
        $this.addClass('was-validated');
        return false;
    }

    sendForm($this.attr('action'), $this);
});

function sendForm(url, t) {
    let $btn = t.find('button').button('loading');
    $.post(url, t.serialize(), function (result) {
        $btn.button('reset');
        $('#form-sent .modal-title').html(result.title);
        $('#form-sent .modal-body').html(result.message);
        $('#form-sent').modal().on('hidden.bs.modal', function (e) {
            location.reload();
        })
    });
}