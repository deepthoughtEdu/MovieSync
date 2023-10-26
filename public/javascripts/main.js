$(window).on('load', initialize);

function initialize() {

    $('.logout-icon').on('click', function (e) {
        e.preventDefault();
            if (!confirm('Are you sure to log-out from the application?')) return;

            $.ajax({
                url: '/api/auth/signout',
                method: 'post',
                cache: false,
                success: function () {
                    Swal.fire(
                        'Success!',
                        'Logout successfully',
                        'success'
                        ).then(() => {
                            location.pathname = '/login'
                        });
                }
            })    
    });
}