// Not technically a userscript, too lazy to turn it into one
// 
// Ignore play times below 3 hours on steamdb's calculator/library listing

selector = ".app > :nth-child(5)";

$(selector).each(function(index) {
    if ($(this).attr("data-sort") <= 120) {
        $(this).attr("data-sort", -1);
    }
});

$($.fn.dataTable.tables()[0]).DataTable().cells(selector).invalidate().draw();

