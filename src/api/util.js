export function setURLParams(url, params) {
    params && Object.keys(params).forEach(name => url = url.replace(`{{${name}}}`, params[name]));
    return url;
}

