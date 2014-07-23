function changeGroup(role, i)
{
    if(role || roleGroup[role])
    {
        $('#group' + i).val(roleGroup[role]); 
    }
    else
    {
        $('#group' + i).val(''); 
    }
}
function toggleCheck(obj, i)
{
    if($(obj).val() == '')
    {
        $('#ditto' + i).attr('checked', true);
    }
    else
    {
        $('#ditto' + i).removeAttr('checked');
    }
}

$(document).on('click', '.chosen-with-drop', function()
{
    var select = $(this).prev('select');
    if($(select).val() == 'ditto')
    {
        var index = $(select).parents('td').index();
        var value = $(select).parents('tr').prev('tr').find('td').eq(index).find('select').val();
        $(select).val(value);
        $(select).trigger("chosen:updated");
    }
})
