var getUrlParameters = function()
{
    var parameters = [], keyValue;
    var keyValues = window.location.href
        .slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < keyValues.length; i++)
    {
        keyValue = keyValues[i].split('=');
        parameters.push(keyValue[0]);
        parameters[keyValue[0]] = keyValue[1];
    }
    return parameters;
}