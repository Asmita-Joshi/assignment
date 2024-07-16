$(document).ready(function() {
    // Open Contact Us Modal
    $('#contactUsBtn').click(function() {
        $('#contactUsModal').modal('show');
    $('#contactUsBtn1').click(function() {
        $('#contactUsModal').modal('show');
    });

    // Change Project Image
    window.changeProjectImage = function(imageSrc) {
        $('#projectImage').attr('src', imageSrc);
    };
});
