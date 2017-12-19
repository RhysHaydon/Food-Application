// JavaScript source code

$(document).ready(function () {

    $("#stock-table").tablesorter();


    $("#stock--input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#stock-table tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#stock-buttons .filter").each(function () {
        $(this).on("click", function () {
            var value = $(this).text().toLowerCase();
            $("#stock-table tbody tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > 1)
            });
        })
    });

     $("#stock-buttons .reset").on("click", function () {
             $("#stock-table tbody tr").toggle(true);
    })



});

   



