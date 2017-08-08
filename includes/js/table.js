$(document).ready(function(){
    $('#tableau').DataTable( {
        data: b,
        order: [[1, 'desc']],
        columns: [
            { data: '0', sDefaultContent: '' },
            { data: '1', sDefaultContent: '' },
            { data: '2', sDefaultContent: '' },
            { data: '3', sDefaultContent: '' },
            { data: '4', sDefaultContent: '' },
            { data: '5', sDefaultContent: '' },
            { data: '6', sDefaultContent: '' },
        ],
        initComplete: function () {
            var i = 0;
            this.api().columns([0, 1, 2, 3, 4, 5, 6, 7, 8]).every( function () {
//                this.api().columns().every(function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo($('#selects #t'+i+'').empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                i++;
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            })
        }
    } );
});
//
// jQuery('#myTable').DataTable({
//     order: [[0, 'desc']],
//     data: b,
//     columns: [
//         {data: 'id', sDefaultContent: ''},
//         {data: 'channel', sDefaultContent: ''},
//         {data: 'from_email', sDefaultContent: ''},
//         {data: 'fields.your-company', sDefaultContent: ''},
//         {data: 'fields.your-message', sDefaultContent: '', "width": "100"},
//         {data: 'referent', sDefaultContent: ''},
//         {data: 'actionController', sDefaultContent: ''},
//         {data: 'etat', sDefaultContent: ''},
//         {data: 'delai', sDefaultContent: ''}
//
//
//
//     ],
//     "columnDefs": [
//         { "width": "50", "targets": 0 },
//         { "width": "50", "targets": 1 },
//         { "width": "10", "targets": 2 },
//         { "width": "100", "targets": 3 },
//         { "width": "200", "targets": 4 },
//         { "width": "50", "targets": 5 },
//         { "width": "50", "targets": 6 },
//         { "width": "50", "targets": 7 },
//         { "width": "50", "targets": 8 },
//
//         {"targets": 4,  render: function ( data, type, row ) {
//             if(typeof row.fields['your-message'] !== 'undefined'){
//                 return row.fields['your-message'].substr(0, 100);
//
//             }
//         }, 'width': 500
//         }
//     ],
//     initComplete: function () {
//         var i = 0;
//         this.api().columns([0, 1, 2, 3, 4, 5, 6, 7, 8]).every( function () {
// //                this.api().columns().every(function () {
//             var column = this;
//             var select = $('<select><option value=""></option></select>')
//                 .appendTo($('#selects #t'+i+'').empty())
//                 .on('change', function () {
//                     var val = $.fn.dataTable.util.escapeRegex(
//                         $(this).val()
//                     );
//
//                     column
//                         .search(val ? '^' + val + '$' : '', true, false)
//                         .draw();
//                 });
//             i++;
//             column.data().unique().sort().each( function ( d, j ) {
//                 select.append( '<option value="'+d+'">'+d+'</option>' )
//             } );
//         })
//     }
// });
//
// //On Action select change call controller corresponding to action.
// jQuery(document).ready(function(){
//     jQuery(document).delegate('td select', "change", function () {
//         var action = jQuery(this).val();
//         var id = $(this).closest('tr').find('td:eq(0)').text();
//         var email = $(this).closest('tr').find('td:eq(2)').text();
//
//         jQuery.ajax({
//             url: "/choosit/wp-content/plugins/gestion_contacts/ajaxHandler.php",
//             type: "post",
//             datatype: "html",
//             data: {registration: "success", action: action, id: id, email:email},
//             success:function(result){
//                 jQuery("html").append(result);
//             }
//         })
//     })//On click TD
// }); //Document ready.
